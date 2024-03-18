import { commonrequest } from "./ApiCall";
import { BACKEND_URL } from "./helper";

export const getCitiesData = async () => {
  return await commonrequest("GET", `${BACKEND_URL}/api/cities`);
};

export const userData = async () => {
  return await commonrequest("GET", `${BACKEND_URL}/api/user`);
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

