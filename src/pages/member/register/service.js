import request from "@/services/requestAxios";

// 获取用户信息
export async function registerUser(params) {
  return request({
    url: '/member/register',
    method: "POST",
    data: params
  });
}
