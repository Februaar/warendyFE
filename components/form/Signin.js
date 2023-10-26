import Image from "next/image";
import Link from "next/link";
import styles from "./Signin.module.css";

const SigninForm = ({
  handleSignin,
  email,
  password,
  isEmailValid,
  isPasswordValid,
  handleEmailChange,
  handlePasswordChange,
}) => {
  return (
    <div className={styles.signinArea}>
      <h3 className={styles.mainLogo}>
        <Image
          src="/images/Logo.svg"
          alt="logo"
          width={210}
          height={87}
          className={styles.mainImg}
        />
      </h3>

      <div className={styles.inputBox}>
        <h3 htmlFor="email" className={styles.inputTitle}>
          이메일 주소
        </h3>
        <div className={styles.inputItem}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="예) warendy@warendy.com"
            autoComplete="off"
            className={`${styles.inputTxt} " input "`}
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        {!isEmailValid && email.trim() !== "" && (
          <div className={styles.errorMsg}>
            이메일 주소를 정확히 입력해주세요.
          </div>
        )}
      </div>

      <div className={styles.inputBox}>
        <h3 htmlFor="password" className={styles.inputTitle}>
          비밀번호
        </h3>
        <div className={styles.inputItem}>
          <input
            type="password"
            id="password"
            name="password"
            className={`${styles.inputPw} " input "`}
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        {!isPasswordValid && password.trim() !== "" && (
          <div className={styles.errorMsg}>
            영문, 숫자, 특수문자를 조합해서 입력해주세요. (8-16자)
          </div>
        )}
      </div>

      <div className={styles.signin}>
        <Link
          href="/"
          type="submit"
          onClick={handleSignin}
          className={`${styles.signinBtn} ${
            isEmailValid && isPasswordValid
              ? styles.validate
              : styles.unvalidate
          } " resetBtn btn "`}
        >
          로그인
        </Link>
      </div>
      <div className={styles.signup}>
        <Link href="/sign-up" type="submit" disabled="disabled">
          이메일 가입
        </Link>
      </div>
    </div>
  );
};

export default SigninForm;
