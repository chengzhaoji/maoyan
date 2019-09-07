<template>
  <div class="hit_active">
    <div style="height:50px">
      <headerss :title=detail.title style="height:50px" />
      <div class="back-content">
        <div class="back" @click="backs"></div>
      </div>
    </div>
    <div  v-if="detail!=''">
      <!-- 电影图片  模糊 -->
      <div
        class="detail-container"
        :style="`background-image:url(https://images.weserv.nl/?url=${detailImg})`"
      ></div>
      <!-- 电影图片  遮罩 -->
      <div class="detail-mask"></div>
      <!-- 电影介绍 -->
      <div class="detail-info img">
        <!-- 左侧电影图片 -->
        <a href class="detail-img">
          <img :src="'https://images.weserv.nl/?url='+detailImg"/>
        </a>
        <!-- 电影右侧文字介绍 -->
        <div class="detail">
          <!-- 右侧电影  标题 -->
          <div class="detail-nm" style="font-size:17px">{{detail.title}}</div>
          <div>{{detail.aka[1]}}</div>
          <div class="score-num">
            <div class="score">
              <van-rate v-model="value" allow-half void-icon="star" void-color="#eee" />
              <span class="detail-sc">{{detail.rating.average}}分</span>
            </div>
            <span>(</span>
            <span>35.4万</span>
            <span>人评分)</span>
          </div>
          <!-- 电影类型 -->
          <div class="movie-category" style="display:flex">
            <span class="movie-cat">{{detail.tags[0]}},{{detail.tags[1]}}</span>
            <div class="movie-tag" style="    margin: 4px 0 0 5px;">
              <img src="@/assets/3D.png" alt style="width:43px;height:13px" />
            </div>
          </div>
          <!-- 电影归属地 时间 -->
          <div class="movie-content-row">
            <span>{{detail.countries[0]}}</span>
            <span>/</span>
            <span>
              <span>{{detail.durations[0]}}</span>
            </span>
            <span></span>
          </div>
          <div class="movie-content-row">{{detail.pubdates[1]}}</div>
        </div>
       
      </div>
      <div class="btn-list btn-border">
        <a href="javascript" class="btn btn-block">
          <span>特惠购票</span>
        </a>
        <div class="desc">
          <div>{{detail.summary}}</div>
          <div class="text-expander-button">
            <i class="icon icon-chevron-down"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Headerss from "@/components/headerss/Headerss.vue";
export default {
  data() {
    return {
      value: 4.5,
      detail:"",
      detailImg:"",
    };
  },
  methods: {
    backs() {
      this.$router.back();
      this.$store.commit("changename");
    },
    bb() {
          var url =
       `http://api.douban.com/v2/movie/subject/${this.movieId}?apikey=0df993c66c0c636e29ecbb5344252a4a`;
      this.$jsonp(url).then(res => {
        // console.log(res);
        this.detailImg=res.images.large;
        this.detail=res
        console.log(this.detail);
      });
          console.log(this.movieId)
    }
  },
  props:["movieId"],
  created() {
    this.bb();
  },
  components: {
    Headerss
  }
};
</script>
<style scoped>
.detail-container {
  height: 185px;
  opacity: 0.9;
  filter: blur(20px); /*滤镜,高斯模糊*/
  color: #fff;
}
/* 遮罩层 */
.detail-mask {
  height: 185px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  position: absolute;
  background-color: #40454d;
  opacity: 0.55;
  z-index: -1;
  margin-top: 50px;
}
/* 电影详情列表 */
.detail-info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 15px;
  margin-top: 50px;
}
.detail-img {
  width: 107px; /*调整元素的宽度和高度*/
  height: 150px;
}
/* 介绍电影内容 */
.detail {
  line-height: 1.7; /*行高*/
  position: absolute;
  /* width: 100%; */
  padding-left: 125.5px;
}
/* div的基础样式 */
.detail div {
  color: #fff;
  font-size: 12px;
}
/* 电影类型 */
.movie-category {
  display: flex;
  text-align: center;
}
/* 右侧电影评分 */
.detail .detail-sc {
  color: #fc0;
  font-size: 17px;
}
.score {
  display: flex;
  align-items: flex-end;
}
/* .detail-img:after {
  content: "播";
  color: white;
  left: 93px;
  bottom: 17px;
  font-size: 25px;
  position: absolute;
  font-family: "myfont";
  width: 25px;
  height: 25px;
  line-height: 25px;
  border-radius: 100%;
  opacity: 0.7;
  background: #333;
} */

/* 第二部分 */
.btn-list {
  padding: 15px 15px 0px;
  position: relative;
  margin-top: 0 !important;
}
/* 购票按钮 */
.btn {
  /* color: white; */
  cursor: pointer;
  font-size: 16px;
  /* padding: .13rem .24rem; */
  display: inline-block;
  text-align: center;
  border-radius: 4px;
  line-height: 1;
  background: #e54847;
  color: #fff;
  text-decoration: none;
}
.btn-block {
  display: inline-block;
  width: 94%;
  /* margin: 10px 0 10px 0; */
  padding: 10px;
  text-align: center;
}
/* 电影描述 */
.desc {
  cursor: pointer;
  color: #555;
  font-size: 15px;
  padding: 10px 10px 0 10px;
  background-color: #fff;
}
/* 收缩按钮 */
.text-expander-button {
  color: #aaa;
  text-align: center;
  height: 15px;
}
/* 向下箭头的图标 */
.icon-chevron-down {
  background: url("../../assets/drop.png") no-repeat;
  display: inline-block;
  width: 17px;
  height: 15px;
}
.btn-border {
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  margin: 4px 0;
}
/* 上传预览图片
.comment-img {
  width: 100px;
  height: 100rpx;
  margin-right: 20px;
} */
/* 返回 */
.back-content {
  position: relative;
  top: -40px;
  left: 10px;
  z-index: 999;
  width: 35px;
}
/* 返回键的大小 */
.back {
  background: url("../../assets/back.png") no-repeat;
  width: 35px;
  height: 32px;
}
/* 动画效果 */
.hit_active{
  animation:.3s slideMove;
}
@keyframes slideMove{
    0%{transform:translateX(100%)}
    100%{transform:translateX(0%)}
}
</style>