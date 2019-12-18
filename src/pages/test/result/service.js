import request from "@/services/requestAxios";

// 获取测试结果
export async function getResultById(params) {
  return request({
    url: '/test/getResultById',
    method: "POST",
    data: params
  });
}
