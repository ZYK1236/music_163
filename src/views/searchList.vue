<template>
  <div id="search-list">
    <span class="search-result-text">搜索结果</span>
    <el-table :data="tableData" style="width: 100%; border-radius: 12px" stripe>
      <el-table-column prop="name" label="音乐标题" width="200">
      </el-table-column>
      <el-table-column prop="singer" label="歌手" width="180">
      </el-table-column>
      <el-table-column prop="album" label="专辑" width="300"> </el-table-column>
      <el-table-column prop="date" label="发布时间" width="200">
      </el-table-column>
      <el-table-column label="播放" width="120" align="center" fixed="right">
        <template slot-scope="scope">
          <a-button
            @click="handlePlay(scope.row)"
            shape="circle"
            icon="customer-service"
          ></a-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000"
      style="padding: 20px; float: right"
    >
    </el-pagination>
  </div>
</template>

<script>
import searchApi from "../api/search.js";
import audioplayerApi from "../api/audioplayer.js";
import dayjs from "dayjs";
import store from "../store/index.js";

export default {
  data() {
    return {
      tableData: [],
    };
  },

  methods: {
    async getSongsList(keywords) {
      if (keywords) {
        const {
          result: { songs },
        } = await searchApi.getSearchResult(keywords, 0);
        const tableData = songs.map((item) => {
          return {
            name: item.name,
            singer: item.artists[0].name,
            album: item.album.name,
            date: dayjs(item.album.publishTime).format("YYYY年MM月DD日"),
            id: item.id,
          };
        });
        this.tableData = tableData;
      } else {
        return;
      }
    },

    async handlePlay({ id }) {
      store.commit({
        type: "refreshId",
        id,
      });
    },
  },

  async mounted() {
    let keywords = this.$route.params.keywords || "";
    await this.getSongsList(keywords);
  },

  computed: {
    getNewKeywords() {
      return store.state.keywords;
    },
  },

  watch: {
    getNewKeywords: {
      async handler(newKeywords) {
        await this.getSongsList(newKeywords);
      },
      immediate: true,
    },
  },
};
</script>

<style lang="less" scoped>
#search-list {
  width: 100%;
  padding: 20px 5%;

  .search-result-text {
    display: block;
    font-size: 18px;
    font-weight: bold;
    color: #4a4a4a;
    padding: 10px 0px;
  }
}
</style>