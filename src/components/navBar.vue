<template>
  <div class="navbar-wrap">
    <div class="choose-btn-wrap">
      <span class="icon-wrap">
        <a-icon type="left-circle" style="color: white" />
      </span>
      <span class="icon-wrap">
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
export default {
  methods: {
    onSearch(val) {
      console.log(val);
    },
  },
};
</script>

<style lang="less" scoped>
.navbar-wrap {
  width: 100%;
  height: 55px;
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