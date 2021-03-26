<template>
  <div class="audioBar-wrap">
    <a-slider
      style="position: absolute; width: 95%; bottom: 52px"
      v-model="sliderValue"
      @afterChange="onSliderChange"
      max="1000"
    ></a-slider>
    <div class="song-basic-information">
      <div class="profile">
        <el-image style="height: 100%; width: 100%" :src="picUrl" fit="fill">
        </el-image>
      </div>
      <div class="message">
        <div class="title-and-singer">{{ title }} - {{ singer }}</div>
        <div class="progress">{{ currentTime }} / {{ endTime }}</div>
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
        v-show="!play"
        @click="playSong"
      />
      <a-icon
        type="pause"
        class="icon-trigger"
        style="color: #1890ff; font-size: 40px"
        v-show="play"
        @click="pauseSong"
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
        @change="onVolumeChange"
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

    <audio
      :src="src"
      autoplay
      @canplay="getDuration"
      @timeupdate="updateTime"
      ref="audio"
      @ended="ended"
    ></audio>
  </div>
</template>

<script>
import store from "../store/index.js";
import audioplayerApi from "../api/audioplayer.js";

export default {
  data() {
    return {
      src: "",
      title: "当前没有歌曲",
      singer: "",
      picUrl: "",
      play: false,
      duration: 0,
      endTime: "",
      currentTime: "",
      sliderValue: 0,
    };
  },

  computed: {
    getid() {
      return store.state.id;
    },
  },

  watch: {
    getid: {
      async handler(newId) {
        let { success } = (await audioplayerApi.checkSongUrl(newId)) || false;
        if (success) {
          let { data } = await audioplayerApi.getSongUrl(newId);
          this.src = data[0].url;
        }

        let { code, songs } = await audioplayerApi.getSongDetail(newId);
        if (code === 200) {
          this.play = true;
          this.title = songs[0].al.name;
          this.picUrl = songs[0].al.picUrl;
          this.singer = songs[0].ar[0].name;
        }
      },
    },
  },

  methods: {
    playSong() {
      this.play = true;
      this.$refs.audio.play();
    },
    pauseSong() {
      this.play = false;
      this.$refs.audio.pause();
    },
    onVolumeChange(value) {
      this.$refs.audio.volume = value / 100;
    },
    onSliderChange(value) {
      this.$refs.audio.currentTime = (value / 1000) * this.duration;
    },
    getDuration() {
      this.duration = this.$refs.audio.duration;
      this.endTime = this.handleToStandradTime(this.$refs.audio.duration);
    },
    updateTime(e) {
      this.currentTime = this.handleToStandradTime(e.target.currentTime); //获取audio当前播放时间
      this.sliderValue = (e.target.currentTime * 1000) / this.duration;
    },
    handleToStandradTime(time) {
      let minute = Math.floor(time / 60);
      let second = (time / 60 - minute) * 60;
      if (second < 10) {
        second = "0" + second;
      } else {
        second = "" + second;
      }
      second = second.slice(0, 2);
      return `${minute} : ${second}`;
    },
    ended() {
      this.play = false;
    },
  },
};
</script>

<style lang="less" scoped>
@borderStyle: 1px solid #fff;
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
  padding: 10px 20px;
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