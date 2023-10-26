import { useState } from "react";
import styles from "./index.module.css";
import SignupForm from "../../components/form/Signup";
import { signupUser } from "../../helpers/api/auth";
import {
  validateEmail,
  validatePassword,
  validateNickname,
} from "../../helpers/validation";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isNicknameValid, setIsNicknameValid] = useState(false);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsEmailValid(newEmail.trim() === "" || validateEmail(newEmail));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setIsPasswordValid(
      newPassword.trim() === "" || validatePassword(newPassword)
    );
    setIsConfirmPasswordValid(newPassword === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newPassword = e.target.value;
    setConfirmPassword(newPassword);
    setIsConfirmPasswordValid(newPassword === password);
  };

  const handleNicknameChange = (e) => {
    const newNickname = e.target.value;
    setNickname(newNickname);
    setIsNicknameValid(
      newNickname.trim() === "" || validateNickname(newNickname)
    );
  };

  const handleSignup = async () => {
    if (
      isEmailValid &&
      isPasswordValid &&
      isNicknameValid &&
      isConfirmPasswordValid
    ) {
      const signupInfo = {
        email,
        password,
        nickname,
      };

      try {
        const response = await signupUser(signupInfo);

        if (response.status === "success") {
          alert("가입이 완료되었습니다.");
        } else {
          alert("가입에 실패했습니다. 다시 시도해주세요.");
        }
      } catch (error) {
        console.error("가입 오류:", error);
        alert("가입 중 오류가 발생했습니다.");
      }
    } else {
      alert("입력 정보를 확인하세요.");
    }
  };

  return (
    <div className="container">
      <div className={styles.content}>
        <SignupForm
          handleSignup={handleSignup}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
          nickname={nickname}
          isEmailValid={isEmailValid}
          isPasswordValid={isPasswordValid}
          isNicknameValid={isNicknameValid}
          isConfirmPasswordValid={isConfirmPasswordValid}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleConfirmPasswordChange={handleConfirmPasswordChange}
          handleNicknameChange={handleNicknameChange}
        />
      </div>
    </div>
  );
};

export default Signup;
