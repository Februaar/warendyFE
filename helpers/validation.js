// 이메일 유효성 검사
export const validateEmail = (inputValue) => {
  if (!inputValue) {
    return false; // 값이 비어있으면 유효하지 않음
  }

  const atIndex = inputValue.indexOf("@"); // "@" 기호의 위치 찾기
  const lastDotIndex = inputValue.lastIndexOf("."); // 마지막 "." 기호의 위치 찾기

  // "@" 기호가 있고, "@" 기호가 마지막 "." 기호보다 앞에 있으며, 마지막 "." 기호가 뒤에 더 있을 때 유효
  if (
    atIndex !== -1 &&
    atIndex < lastDotIndex &&
    lastDotIndex < inputValue.length - 1
  ) {
    // 한글이 포함되지 않도록 검사 (정규식 사용)
    const koreanRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    if (!koreanRegex.test(inputValue)) {
      return true;
    }
  }

  return false;
};

// 비밀번호 유효성 검사
export const validatePassword = (inputValue) => {
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?!.*[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{6,}$/;
  return passwordRegex.test(inputValue); // 정규식 패턴과 매치되면 유효
};

// 닉네임 유효성 검사
export const validateNickname = (inputValue) => {
  return inputValue.length >= 3;
};
