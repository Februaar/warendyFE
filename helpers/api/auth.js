import { api, handleResponse } from "./api";

export const signupUser = async (signupInfo) => {
  const requestPromise = api.post("/signup", signupInfo);
  return handleResponse(requestPromise);
};

export const getUserInfo = async (token) => {
  const requestPromise = api.get("/members", {
    headers: { Authorization: token },
  });
  return handleResponse(requestPromise);
};

export const signinUser = async (signinInfo, token) => {
  const requestPromise = api.post("/signin", signinInfo, {
    headers: { Authorization: token },
  });
  return handleResponse(requestPromise);
};
