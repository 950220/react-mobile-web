import request from "@/services/requestAxios";

// 获取测试题目
export async function getJokeData() {
  return request({
    url: '/joke/getJokeData',
    method: "GET",
    data: {}
  });
}
