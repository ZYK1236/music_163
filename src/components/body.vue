<template>
  <div id="body">
    <div class="sideBar-wrap">
      <a-button
        type="primary"
        icon="user"
        style="display:block; margin: 10px auto"
        ghost
      >
        我要登陆
      </a-button>
      <a-menu :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>发现音乐</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="desktop" />
          <span>推荐歌单</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="inbox" />
          <span>最新音乐</span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="inbox" />
          <span>最新 mv</span>
        </a-menu-item>
      </a-menu>
    </div>

    <div class="layout">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style lang="less" scoped>
#body {
  display: flex;
  flex-grow: 1;
  border: 1px solid whitesmoke;

  .sideBar-wrap {
    flex-shrink: 0;
    width: 15%;
    background-color: #fff;
  }

  .layout {
    display: flex;
    width: 85%;
    height: e("calc(100vh - 125px)");
    justify-content: center;
    flex-grow: 1;
    overflow: scroll;
  }
}
</style>