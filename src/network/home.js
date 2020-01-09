import { request } from "./request";

export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  });
}

class http {
  async getHomeMultidata() {
    return await request({
      url: "/home/multidata"
    });
  }
}

export default new http();
