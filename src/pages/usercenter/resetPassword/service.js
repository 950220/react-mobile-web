import request from "@/services/requestAxios";

// 重置密码
export async function resetPassword(params) {
  return request({
    url: '/member/changePassword',
    method: "POST",
    data: params
  });
}
