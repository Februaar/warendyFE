import { useState } from "react";
import styles from "./index.module.css";
import SigninForm from "../../components/form/Signin";
import useAuth from "../../hooks/useAuth";
import { signinUser } from "../../helpers/api/auth";
import { validateEmail, validatePassword } from "../../helpers/validation";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const { token, signin } = useAuth();

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
  };

  const handleSignin = async () => {
    if (isEmailValid && isPasswordValid) {
      const signinInfo = {
        email,
        password,
      };

      try {
        const response = await signinUser(signinInfo);

        if (response.status === "success") {
          alert("로그인 되었습니다.");
        } else {
          alert("로그인에 실패했습니다. 다시 시도해주세요.");
        }
      } catch (error) {
        console.error("로그인 오류:", error);
        alert("로그인 중 오류가 발생했습니다.");
      }
    } else {
      alert("입력 정보를 확인하세요.");
    }
  };

  return (
    <div className="container">
      <div className={styles.content}>
        <SigninForm
          handleSignin={handleSignin}
          email={email}
          password={password}
          isEmailValid={isEmailValid}
          isPasswordValid={isPasswordValid}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
        />
      </div>
    </div>
  );
};

export default SignIn;
