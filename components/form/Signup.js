import Link from "next/link";
import styles from "./Signup.module.css";

const SignupForm = ({
  handleSignup,
  email,
  password,
  confirmPassword,
  nickname,
  isEmailValid,
  isPasswordValid,
  isConfirmPasswordValid,
  isNicknameValid,
  handleEmailChange,
  handlePasswordChange,
  handleConfirmPasswordChange,
  handleNicknameChange,
}) => {
  return (
    <div className={styles.signupArea}>
      <h3 className={styles.mainTitle}>회원가입</h3>
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
        {/* 이메일 유효성 메시지 표시 */}
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
        {/* 비밀번호 유효성 메시지 표시 */}
        {!isPasswordValid && password.trim() !== "" && (
          <div className={styles.errorMsg}>
            영문, 숫자, 특수문자를 조합하여 입력해주세요.
          </div>
        )}
      </div>

      <div className={styles.inputBox}>
        <h3 htmlFor="confirmPassword" className={styles.inputTitle}>
          비밀번호 확인
        </h3>
        <div className={styles.inputItem}>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className={`${styles.inputPw} " input "`}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        {/* 비밀번호 확인 일치 여부 메시지 표시 */}
        {!isConfirmPasswordValid && confirmPassword.trim() !== "" && (
          <div className={styles.errorMsg}>비밀번호가 일치하지 않습니다.</div>
        )}
      </div>

      <div className={styles.inputBox}>
        <h3 htmlFor="confirmPassword" className={styles.inputTitle}>
          닉네임
        </h3>
        <div className={styles.inputItem}>
          <input
            type="text"
            id="nickname"
            name="nickname"
            className={`${styles.inputTxt} " input "`}
            value={nickname}
            onChange={handleNicknameChange}
          />
        </div>
        {/* 닉네임 유효성 메시지 표시 */}
        {!isNicknameValid && nickname.trim() !== "" && (
          <div className={styles.errorMsg}>
            최소 3자 이상을 조합하여 입력해주세요.
          </div>
        )}
      </div>

      <div className={styles.signup}>
        <Link
          href="/"
          type="submit"
          onClick={handleSignup}
          className={`${styles.signupBtn} ${
            isEmailValid && isPasswordValid && isNicknameValid
              ? styles.validate
              : styles.unvalidate
          } " resetBtn btn "`}
        >
          가입하기
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
