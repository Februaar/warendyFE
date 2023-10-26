import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "./SigninForm.module.css";
import { userIdState } from "../../recoil/userState";
import { useSetRecoilState } from "recoil";
import { userTokenState } from "@/recoil/atoms";
import { postLogin, getUserInfo } from "../../services/api/api";
import InputForm from "./InputForm";
import { ErrorModal, SuccessModal } from "../Modal";
import { validateEmail, validatePassword } from "./FormValidation";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const [isFormValid, setIsFormValid] = useState(false);
  const [isAppropriate, setIsAppropriate] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const router = useRouter();

  const setUserToken = useSetRecoilState(userTokenState);
  const setUserId = useSetRecoilState(userIdState);

  const handleLogin = async () => {
    const loginInfo = {
      email: email,
      password: password,
    };

    try {
      setIsAppropriate(true);

      if (!isFormValid) {
        setShowErrorMessage(true);
        return;
      }

      const token = await postLogin(loginInfo);

      if (token) {
        setUserToken(token);
        sessionStorage.setItem("userTokenState", token);

        const userInfoResponse = await getUserInfo(token);

        if (
          userInfoResponse &&
          userInfoResponse.data &&
          userInfoResponse.data.id
        ) {
          setUserId(userInfoResponse.data.id);
        }
        sessionStorage.setItem("usernickname", userInfoResponse.data.nickname);
        sessionStorage.setItem("userIdState", userInfoResponse.data.id);

        setShowSuccessMessage(true);
        router.push("/main/main");
      }
    } catch (error) {
      setIsAppropriate(false);
      console.error("Error fetching data:", error);
      setShowErrorMessage(true);
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsValidPassword(validatePassword(value));
  };

  useEffect(() => {
    let timer;
    if (!isAppropriate) {
      setShowErrorMessage(true);
      setShowSuccessMessage(true);
      timer = setTimeout(() => {
        setShowErrorMessage(false);
        setShowSuccessMessage(false);
      }, 5000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isAppropriate]);

  useEffect(() => {
    setIsFormValid(isValidEmail && isValidPassword);
  }, [isValidEmail, isValidPassword]);

  return (
    <div className={styles.signinPage}>
      <Image
        src="/images/logo.svg"
        alt="Logo"
        className={styles.logo + " padding "}
        width={150}
        height={50}
      />
      <div className={styles.contentArea}>
        <InputForm
          label="이메일 주소"
          type="email"
          value={email}
          onChange={handleEmailChange}
          isValid={isValidEmail}
          onBlur={() => setIsAppropriate(true)}
          errorMessage="이메일 주소를 정확히 입력해주세요."
          onClear={() => setEmail("")}
        />
        <InputForm
          label="비밀번호"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          isValid={isValidPassword}
          onBlur={() => setIsAppropriate(true)}
          errorMessage="영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)"
          onClear={() => setPassword("")}
        />
        {showErrorMessage && <ErrorModal />}
        {showSuccessMessage && <SuccessModal />}
      </div>
      <div className={styles.btnArea}>
        <button
          type="submit"
          disabled={!isFormValid}
          onClick={handleLogin}
          className={`${styles.btn} ${
            isFormValid ? styles.validate : styles.unvalidate
          } btn outline`}
        >
          로그인하기
        </button>
      </div>
      <Link href="/sign-up" className={styles.btnSignup}>
        이메일 가입
      </Link>
      {/* <button className={`${styles.btnSocial} ${styles.kakao} btn`}>
        <Image
          src="/images/kakao.svg"
          alt="Logo"
          className={styles.social}
          width={30}
          height={30}
        />
        카카오톡으로 로그인
      </button> */}
    </div>
  );
};

export default SigninForm;
