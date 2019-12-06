import request from "@/services/requestAxios";

// 获取用户信息
export async function getUserInfo(guid) {
  return request({
    url: `api-member-service-auth-v2/api/v1/member/${guid}/info`,
    method: "GET",
    data: {}
  });
}

// 登录
export async function loginIn(params) {
  return request({
    url: '/member/login',
    method: "POST",
    data: params
  });
}