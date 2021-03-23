<template>
  <div class="audioBar-wrap">
    <div class="song-basic-information">
      <div class="profile"></div>
      <div class="message">
        <div class="title-and-singer">沦陷 (抖音女声版)-黄雯雯</div>
        <div class="progress">00:00 / 03:30</div>
      </div>
    </div>
    <div class="song-control">
      <a-icon
        class="icon-trigger"
        type="step-backward"
        theme="filled"
        style="color: #1890ff; font-size: 25px"
      />
      <a-icon
        class="icon-trigger"
        type="play-circle"
        style="color: #1890ff; font-size: 40px"
        theme="filled"
      />
      <a-icon
        class="icon-trigger"
        type="step-forward"
        theme="filled"
        style="color: #1890ff; font-size: 25px"
      />
    </div>
    <div class="song-misc">
      <a-icon type="sound" theme="filled" style="font-size: 20px" />
      <a-slider
        :default-value="30"
        style="width: 100px; margin: 0px 0px 1px 15px"
      />
      <a href="https://github.com/ZYK1236/music_163">
        <a-icon
          type="github"
          style="font-size: 30px; margin-left: 100px; color: grey"
          class="icon-trigger"
        />
      </a>
    </div>
    <audio></audio>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@borderStyle: 1px solid black;
.icon-trigger:hover {
  cursor: pointer;
}

.audioBar-wrap {
  position: fixed;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 10px 40px;
  background-color: #fff;

  .song-basic-information {
    display: flex;
    width: 300px;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    .profile {
      width: 40px;
      height: 80%;
      border: @borderStyle;
    }
    .message {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      height: 80%;
      .title-and-singer {
        width: 180px;
        height: 25px;
        padding-left: 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .progress {
        width: 100%;
        height: 15px;
        font-size: 10px;
        color: rgb(100, 98, 98);
        padding-left: 10px;
      }
    }
  }

  .song-control {
    display: flex;
    width: 200px;
    height: 100%;
    justify-content: space-around;
    align-items: center;
  }

  .song-misc {
    display: flex;
    width: 300px;
    height: 100%;
    align-items: center;
  }
}
</style>