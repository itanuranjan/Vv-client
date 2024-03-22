import { commonrequest } from "./ApiCall";
import { BACKEND_URL } from "./helper";

export const getCitiesData = async () => {
  return await commonrequest("GET", `${BACKEND_URL}/api/cities`);
};

// export const userData = async () => {
//   return await commonrequest("GET", `${BACKEND_URL}/api/user`);
// };

// Apis.js

export const getUserProfile = async (email = null) => {
  try {
    let url = `${BACKEND_URL}/api/user`;
    if (email) {
      url += `?email=${email}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};



export const registerfunction = async (data) => {
  return await commonrequest("POST", `${BACKEND_URL}/user/register`, data);
};

export const sentOtpFunction = async (data) => {
  return await commonrequest("POST", `${BACKEND_URL}/user/sendotp`, data);
};

export const userVerify = async (data) => {
  return await commonrequest("POST", `${BACKEND_URL}/user/login`, data);
};

export const updateProfileFunction = async (data) => {
  return await commonrequest("POST", `${BACKEND_URL}/user/profile`, data);
};


