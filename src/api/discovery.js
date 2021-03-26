import service from "../service/axios.config.js";

export default {
  getNewestAlbum() {
    return service({
      method: "get",
      url: "/banner",
    });
  },

  getRecommend(limit) {
    return service({
      method: "get",
      url: "/personalized",
      params: {
        limit,
      },
    });
  },

  getHotSingers(limit) {
    return service({
      method: "get",
      url: "/top/artists",
      params: {
        limit,
      },
    });
  },
};
