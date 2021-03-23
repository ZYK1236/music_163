<template>
  <div class="sideBar-wrap">
    <a-button type="primary" icon="user" style="margin:15px 0px 10px 45px" ghost>
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
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.sideBar-wrap {
  height: 100%;
  width: 200px;
  background-color: #fff;
}
</style>