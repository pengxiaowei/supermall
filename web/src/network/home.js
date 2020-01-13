import { request } from "./request";

export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  });
}

export function getHomeGoods(type, page) {
  return request({
    url: "/home/data",
    params: {
      type,
      page
    }
  });
}

// class http {
//   async getHomeMultidata() {
//     return await request({
//       url: "/home/multidata"
//     });
//   }

// //   async getHomeGoods(type, page) {
// //     return await request({
// //       url: "/home/data",
// //       params: {
// //         type,
// //         page
// //       }
// //     });
// //   }
// }

// export default new http();
