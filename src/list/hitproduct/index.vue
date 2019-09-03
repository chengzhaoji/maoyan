<template>
  <div>
    <!-- 电影图片  模糊 -->
    <div
      class="detail-container"
      style="background:url(../../../../assets648bbced128324a4b4ccf7db6c564a251744344.jpg) no-repeat top"
    ></div>
    <!-- 电影图片  遮罩 -->
    <div class="detail-mask"></div>
    <!-- 电影介绍 -->
    <div class="detail-info img">
      <!-- 左侧电影图片 -->
      <a href class="detail-img">
        <img src="@/assets/648bbced128324a4b4ccf7db6c564a251744344.jpg" />
      </a>
      <!-- 电影右侧文字介绍 -->
      <div class="detail">
        <!-- 右侧电影  标题 -->
        <div class="detail-nm" style="font-size:17px">速度与激情：特别行动</div>
        <div>Fast & Furious Presents: Hobbs & Shaw</div>
        <div class="score-num">
          <div class="score">
            <van-rate v-model="value" allow-half void-icon="star" void-color="#eee" @click="syc" />
            <span class="detail-sc">8.6分</span>
          </div>
          <span>(</span>
          <span>35.4万</span>
          <span>人评分)</span>
        </div>
        <!-- 电影类型 -->
        <div class="movie-category" style="display:flex">
          <span class="movie-cat">动作,惊悚,犯罪</span>
          <div class="movie-tag" style="    margin: 4px 0 0 5px;">
            <img src="@/assets/3D.png" alt style="width:43px;height:13px" />
          </div>
        </div>
        <!-- 电影归属地 时间 -->
        <div class="movie-content-row">
          <span>英国,美国</span>
          <span>/</span>
          <span>
            <span>134</span>
            <span>分钟</span>
          </span>
          <span></span>
        </div>
        <div class="movie-content-row">2019-08-23大陆上映</div>
      </div>
      <!-- 电影描述  -->

      <!-- 右侧电影  打分 -->
      <!-- <div class="detail-sc">8.6分</div> -->
      <!-- 右侧电影  打国家 -->
      <!-- <div>英国</div> -->
      <!-- 右侧电影  导演 -->
      <!-- <div class="detail-">大卫</div> -->
    </div>
    <div class="btn-list btn-border">
      <a href="/cinema/movie/1215605?_v_=yes" class="btn btn-block">
        <span >特惠购票</span>
      </a>
      <div class="desc">
      <div v-if="this.id=lid">{{details[3]}}</div>
      <div class="text-expander-button">
        <i class="icon icon-chevron-down"></i>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 2.5,
      id: [],
      //   list_producyt: "",
      //   listImg: [],
      //   content: "", //输入框中显示内容
      //   score: "4" //用户评分
      details: []
    };
  },
  methods: {
    syc() {
      //   this.value=
    },
    bb() {
      var url1 =
        "http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10";
      this.$jsonp(url1)
        .then(res => {
          // console.log(res.subjects);
          for (var i = 0; i < res.subjects.length; i++) {
            let idUrl = res.subjects[i].id;
            this.id.push(idUrl);
          }
          console.log(this.id);
          return new Promise(resolve => {
            setTimeout(() => {
              resolve(this.id);
            }, 1000);
          });
        })
        .then(res => {
          //   console.log(res);
          for (var item of res) {
            item = parseInt(item);
            var url2 = `http://api.douban.com/v2/movie/subject/${item}?apikey=0df993c66c0c636e29ecbb5344252a4a`;
            this.$jsonp(url2).then(res => {
              //   this.id.push(url2)
              //   console.log(res);
              console.log(res.summary);
              this.details.push(res.summary);
              // for(var i=0;i<id.length;i++){

              // }
              // this.id=res.summary
            });
          }
        });
    }
  },
  created() {
    this.bb();
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
}
/* 电影详情列表 */
.detail-info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 15px;
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
.detail-img:after {
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
}

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
.btn-border{
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    margin: 4px 0;
}
/* 上传预览图片 */
.comment-img {
  width: 100px;
  height: 100rpx;
  margin-right: 20px;
}
</style>