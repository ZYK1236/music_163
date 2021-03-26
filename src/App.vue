<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "./views/home";
import store from "./store/index";

export default {
  components: {
    Home,
  },
  computed: {
    getajax() {
      return store.state.getAjaxData;
    },
  },
  watch: {
    getajax: {
      handler(newVal, oldVal) {
        if (newVal !== oldVal) {
          this.$message.success("接口返回数据成功");
        }
      },
    },
  },
};
</script>

<style lang="less" scoped>
#app {
  height: 100%;
  overflow: hidden;
}
</style>
