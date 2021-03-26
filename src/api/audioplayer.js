import service from "../service/axios.config.js";

export default {
  checkSongUrl(id) {
    return service({
      method: "get",
      url: "/check/music",
      params: {
        id,
      },
    });
  },

  getSongUrl(id) {
    return service({
      method: "get",
      url: "/song/url",
      params: {
        id,
      },
    });
  },

  getSongDetail(id) {
    return service({
      method: "get",
      url: "/song/detail",
      params: {
        ids: id,
      },
    });
  },
};
