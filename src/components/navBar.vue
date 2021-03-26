<template>
  <div class="navbar-wrap">
    <div class="choose-btn-wrap">
      <span class="icon-wrap" @click="goBack">
        <a-icon type="left-circle" style="color: white" />
      </span>
      <span class="icon-wrap" @click="goForward">
        <a-icon type="right-circle" style="color: white" />
      </span>
    </div>
    <a-input-search
      placeholder="搜索"
      style="width: 150px; position: absolute; right: 20px; top: 10px"
      @search="onSearch"
    />
  </div>
</template>

<script>
import store from "../store/index.js";

export default {
  methods: {
    goBack() {
      if (this.$route.name !== "Discovery") {
        this.$router.go(-1);
      } else {
        return;
      }
    },
    goForward() {
      this.$router.go(1);
    },
    /**
     * @description 搜索框的 onSearch 方法
     */
    onSearch(val) {
      if (this.$route.name !== "Search") {
        this.$router.push({
          name: "Search",
          params: {
            keywords: val,
          },
        });
      } else {
        store.commit({
          type: "refreshKeywords",
          keywords: val,
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.navbar-wrap {
  width: 100%;
  height: 55px;
  flex-shrink: 0;
  padding: 10px 40px;
  background-color: #1890ff;
  .choose-btn-wrap {
    display: flex;
    justify-content: space-around;
    width: 100px;
    margin-top: 2px;
    font-size: 20px;
    .icon-wrap:hover {
      cursor: pointer;
    }
  }
}
</style>