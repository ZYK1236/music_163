<template>
  <div id="discovery">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item, index) in banners" :key="item + index">
        <el-image :src="item.imageUrl" style="height: 100%"></el-image>
      </el-carousel-item>
    </el-carousel>
    <div class="recommend-wrap">
      <span
        style="
          display: block;
          color: #303133;
          font-size: 18px;
          padding: 10px 0px;
        "
        >推荐歌单</span
      >
      <el-row :gutter="24">
        <el-col
          :span="4"
          v-for="(item, index) in recommend.slice(0, 6)"
          :key="index"
        >
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.picUrl" class="image" />
            <div class="text-wrap">
              {{ item.name }}
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="24">
        <el-col
          :span="4"
          v-for="(item, index) in recommend.slice(6)"
          :key="index"
        >
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.picUrl" class="image" />
            <div class="text-wrap">
              {{ item.name }}
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="newest-song">
      <span
        style="
          display: block;
          color: #303133;
          font-size: 18px;
          padding: 10px 0px;
        "
        >热门歌手</span
      >
      <div class="list-wrap">
        <List :hotSingers="hotSingers.slice(0, 5)"></List>
        <List :hotSingers="hotSingers.slice(5, 10)"></List>
        <List :hotSingers="hotSingers.slice(10, 15)"></List>
      </div>
    </div>
  </div>
</template>

<script>
import discoveryApi from "../api/discovery.js";
import List from "@/components/list";

export default {
  data() {
    return {
      banners: [],
      recommend: [],
      hotSingers: [],
    };
  },
  async mounted() {
    const { banners } = await discoveryApi.getNewestAlbum();
    const { result } = await discoveryApi.getRecommend(12);
    const { artists } = await discoveryApi.getHotSingers(15);
    this.banners = this.banners.concat(banners);
    this.recommend = this.recommend.concat(result);
    this.hotSingers = this.hotSingers.concat(artists);
  },
  components: {
    List,
  },
};
</script>

<style lang="less" scoped>
#discovery {
  height: 100%;
  width: 100%;
  padding: 20px 10%;

  .recommend-wrap {
    padding: 40px 0px;
    .text-wrap {
      width: 100%;
      padding: 0px 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  .list-wrap {
    display: flex;
    justify-content: space-between;
  }
}

// 下面是 饿了么UI 设置的样式

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.image {
  display: block;
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
}
</style>