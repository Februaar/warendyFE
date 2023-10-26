import { api, handleResponse } from "./api";

// 와인 리스트 가져오기
export const getWineList = async (token) => {
  const requestPromise = api.get("/wines/recommendation", {
    headers: { Authorization: token },
  });
  return handleResponse(requestPromise);
};
