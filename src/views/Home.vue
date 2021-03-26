<template>
  <div id="home">
    <NavBar></NavBar>
    <Body></Body>
    <AudioBar></AudioBar>
    <div class="temp-audio-bar"></div>
  </div>
</template>

<script>
import NavBar from "@/components/navBar";
import AudioBar from "@/components/audioBar";
import Body from "@/components/body";

export default {
  components: {
    NavBar,
    AudioBar,
    Body,
  },
};
</script>

<style lang="less" scoped>
#home {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: whitesmoke;

  .temp-audio-bar {
    width: 100%;
    height: 70px;
    flex-shrink: 0;
  }
}
</style>
