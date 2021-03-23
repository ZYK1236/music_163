<template>
  <div id="body">
    <SideBar></SideBar>
  </div>
</template>

<script>
import SideBar from "@/components/sideBar";

export default {
  components: {
    SideBar
  }
};
</script>

<style lang="less" scoped>
#body {
  flex-grow: 1;
  margin-bottom: 70px;
  border: 1px solid whitesmoke;
}
</style>