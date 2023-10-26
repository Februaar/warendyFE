import { useState, useEffect } from "react";

const useAuth = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    if (!storedToken) {
      setToken(storedToken);
    }
  }, []);

  const signin = (newToken) => {
    setToken(newToken);
    sessionStorage.setItem("token", newToken);
  };

  const signout = () => {
    setToken(null);
    sessionStorage.removeItem("token");
  };

  return { token, signin, signout };
};

export default useAuth;
