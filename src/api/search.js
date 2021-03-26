import service from "../service/axios.config.js";

export default {
  getSearchResult(keywords, offset) {
    return service({
      method: "get",
      url: "/search",
      params: {
        keywords,
        limit: 10,
        offset,
      },
    });
  },
};
