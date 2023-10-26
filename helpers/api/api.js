import axios from "axios";

export const api = axios.create({
  baseURL: "https://warendy.shop",
  headers: {
    "Content-Type": "application/json",
  },
});

export const handleResponse = async (requestPromise) => {
  try {
    const response = await requestPromise;
    if (response.data.status === "success") {
      return response.data;
    } else {
      throw new Error("API 요청 실패");
    }
  } catch (error) {
    console.error("서버에 데이터 전송 실패:", error);
    throw error;
  }
};

// 사용자 게시물 작성
export const createUserPost = async (token, dataToSend) => {
  try {
    const response = await api.post("/boards", dataToSend);
    return response.data;
  } catch (error) {
    console.error("서버에 데이터 전송 실패:", error);
    throw error;
  }
};

// 현재 비밀번호 확인
export const checkCurrentPassword = async (token, currentPassword) => {
  const dataToSend = {
    password: currentPassword,
  };
  try {
    const response = await api.post("/members/check", dataToSend, {
      headers: { Authorization: token },
    });
    if (response.data.status === "success") {
      return response.data;
    }
  } catch (error) {
    console.error("서버에 데이터 전송 실패:", error);
    throw error;
  }
};

// 사용자 정보 업데이트
export const updateUserProfile = async (token, dataToUpdate) => {
  try {
    const response = await api.patch("/members", dataToUpdate, {
      headers: { Authorization: token },
    });
    if (response.data.status === "success") {
      return response.data;
    }
  } catch (error) {
    console.error("서버에 데이터 전송 실패:", error);
    throw error;
  }
};

// 사용자 게시물 가져오기
export const getUserPosts = async (token) => {
  try {
    const response = await api.get("/boards", {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    console.error("서버에 데이터 전송 실패:", error);
    throw error;
  }
};

// 사용자 리뷰 가져오기
export const getUserReviews = async (token) => {
  try {
    const response = await api.get("/reviews/my", {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    console.error("서버에 데이터 전송 실패:", error);
    throw error;
  }
};

// 사용자 리뷰 업데이트
export const updateUserReview = async (
  reviewId,
  newContents,
  updatedRating,
  token
) => {
  const updatedData = {
    contents: newContents,
    rating: updatedRating,
  };
  try {
    const response = await api.put(`/reviews/${reviewId}`, updatedData, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    console.error("리뷰 업데이트 실패:", error);
    throw new Error("리뷰 업데이트 실패");
  }
};

// 사용자 리뷰 삭제
export const deleteUserReview = async (reviewId, token) => {
  try {
    const response = await api.delete(`/reviews/${reviewId}`, {
      headers: {
        Authorization: token,
      },
    });

    return response.data;
  } catch (error) {
    console.error("리뷰 삭제 실패:", error);
    throw new Error("리뷰 삭제 실패");
  }
};

// 사용자 와인 컬렉션 가져오기
export const getUserWineCollection = async (token) => {
  try {
    const response = await api.get("/collections/wines", {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    console.error("서버에 데이터 전송 실패:", error);
    throw error;
  }
};

// 사용자 와인 컬렉션 저장
export const saveUserWineCollection = async (dataToSend, token) => {
  try {
    const response = await api.post(
      "/collections/update/category",
      dataToSend,
      {
        headers: { Authorization: token },
      }
    );
    return response.data;
  } catch (error) {
    console.error("서버에 데이터 전송 실패:", error);
    throw error;
  }
};

// 사용자 와인 컬렉션 삭제
export const deleteUserWineCollection = async (wineId, token) => {
  try {
    const response = await api.delete(
      `/collections/delete/wine?wine-id=${wineId}`,
      {
        headers: { Authorization: token },
      }
    );
    return response.data;
  } catch (error) {
    console.error("서버에 데이터 전송 실패:", error);
    throw error;
  }
};

// 와인 상세 정보 가져오기
export const getWineDetail = async (wineId) => {
  try {
    const response = await api.get(`/wines/${wineId}/detail`);
    return response.data;
  } catch (error) {
    console.error("서버에 데이터 전송 실패:", error);
    return null;
  }
};

// 즐겨찾기에 와인 추가
export const addWineToFavorites = async (dataToSend, token) => {
  try {
    const response = await api.post("/collections/add/wines", dataToSend, {
      headers: { Authorization: token },
    });
    return response.data;
  } catch (error) {
    console.error("서버에 데이터 전송 실패:", error);
    throw error;
  }
};

// 와인 추천 리스트 가져오기
export const getRecommendedWineList = async (params) => {
  try {
    const response = await api.post("/landing/recommendation", params);
    return response.data;
  } catch (error) {
    console.error("서버에 데이터 전송 실패:", error);
    throw error;
  }
};

// 주변 와인 가게 정보 가져오기
export const fetchNearbyWineStores = async (longitude, latitude) => {
  try {
    const response = await fetch(
      `${process.env.API_KEY}winebars/around?lnt=${longitude}&lat=${latitude}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("주변 와인 가게 정보 가져오기 실패:", error);
  }
};

// 와인 리뷰 작성
export const postWineReview = async (data, token) => {
  try {
    const response = await api.post(
      `/reviews/wines?wine-id=${data.wineId}`,
      data,
      { headers: { Authorization: token } }
    );

    return response;
  } catch (error) {
    console.error("와인 리뷰 작성 실패:", error);
  }
};

export default api;
