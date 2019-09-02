<template>
  <div class="page">
    <div class="list-wrap" style="margin-top: 0px;" v-for="(item,index) in list" :key="item.id">
      <div class="item" data-id="1215605" data-bid="dp_wx_home_movie_list">
        <div class="main-block">
          <div class="avatar" sort-flag>
            <div class="default-img-bg">
              <img
                :src="'https://images.weserv.nl/?url='+listImg[index]"
                onerror="this.style.visibility='hidden'"
              />
            </div>
          </div>
          <div class="mb-outline-b content-wrapper">
            <div class="column content">
              <div class="box-flex movie-title">
                <div class="title line-ellipsis v3dimax_title">{{item.title}}</div>

                <span class="version v3d imax"></span>
              </div>

              <div class="detail column">
                <div class="score line-ellipsis">
                  <span class="score-suffix">观众评</span>
                  <span class="grade">{{item.rating.average}}</span>
                </div>

                <div class="actor line-ellipsis">主演: {{item.casts[0].name}}</div>

                <div class="show-info line-ellipsis">今天220家影院放映4679场</div>
              </div>
            </div>
            <div class="button-block">
              <div class="btn normal">
                <span class="fix" @click="jumpComment">购票</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div style="height:40px"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: "",
      listImg: [],
      value:6
    };
  },
  methods: {
    aa() {
      var url =
        "http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=20";
      this.$jsonp(url).then(res => {
        // console.log(res.subjects);
        for (var i = 0; i < res.subjects.length; i++) {
          let imgUrl = res.subjects[i].images.small;
          let imgUrls = imgUrl.slice(7);
          this.listImg.push(imgUrls);
          // console.log(imgUrls);
        }
        // console.log('我是:',this.listImg);
        this.list = res.subjects;
      });
    },
    jumpComment(){
     this.$router.push("/hitproduct")
  }
  },
  props: [],
  created() {
    this.aa();
  },
  onReachBottom() {
    //加载下一页数据
    this.aa();
    //conso.log(123)
  }
};
</script>
<style scoped>
div {
  display: block;
}
img {
  width: 100%;
  display: block;
}
.page {
  position: absolute;
  width: 100%;
  height:571.57px;
  /* margin-top: 200px; */
}
/* 整个布局的基础背景 */
.list-wrap {
  background-color: #f5f5f5;
}
/* 微调的样式 */
.list-wrap .item {
  padding-left: 15px;
  background-color: #fff;
}
.item .main-block {
  position: relative;
  width: 100%;
}
/* 图片的定位样式 */
.item .avatar {
  width: 64px;
  height: 90px;
  position: relative;
  margin-top: 12px;
  float: left;
}
.item .avatar:before {
  content: "";
  display: block;
  position: absolute;
  width: 46px;
  height: 46px;
  background-repeat: no-repeat;
  background-size: contain;
}
/* 图片的微调高度 */
.item .avatar img {
  background-color: transparent;
  height: 90px;
}
/* 右边的详情布局 */
.item .content-wrapper {
  padding: 12px 14px 20px 0;
  margin-left: 74px;
  height: 83px;
  max-height: 83px;
  position: relative;
}
/* 标题的样式 */
.item .content {
  padding-right: 5px;
  margin-right: 48px;
  overflow: hidden;
}
/* 标题弹性，使其溢出隐藏 */
.box-flex {
  display: flex;
}
/* 标题的行高和微调 */
.item .movie-title {
  max-height: 24px;
  margin-bottom: 7px;
  line-height: 24px;
  overflow: hidden;
}

.item .title {
  font-size: 17px;
  color: #333;
  font-weight: 700;
  padding-right: 5px;
  flex-shrink: 1;
}
.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
/* 3D图标的显示 */
.version.v3d.imax {
  width: 43px;
  background-image: url(../../assets/3D.png);
}
/* 3D图片的基本样式调试 */
.pre-show,
.version {
  background-size: contain;
  background-repeat: no-repeat;
  /* height: 14px; */
  /* width: 17px; */
  display: inline-block;
  margin-top: 5px;
  flex: 0 0 auto;
  margin-right: 3px;
}
/* 各行之间的行高，内容左对齐 */
.item .detail {
  box-sizing: border-box;
  line-height: 1;
  overflow: hidden;
  text-align: left;
}
/* 各行的公共样式溢出隐藏 */
.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
/* 字体的大小和 颜色，避免覆盖 */
.list-wrap .item .score,
.actor,
.show-info {
  font-size: 13px;
  color: #666;
}
/* 评分的单独颜色，大小 */
.list-wrap .item .detail .score .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}
/* 各行之间的间距调整 */
.list-wrap .item .detail > div + div {
  margin-top: 6px;
  line-height: 15px;
}
/* 购票范围的布局 */
.list-wrap .item .button-block {
  font-size: 12px;
  position: absolute;
  right: 14px;
  top: 0;
  bottom: 0;
  height: 27px;
  margin: auto;
}
/* 购票按钮 */
.list-wrap .item .button-block .btn {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  box-sizing: border-box;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 12px;
  cursor: pointer;
}
/* 底部的虚线分割  */
.mb-outline-b {
  background: url(../../assets/bottom.png) 0 bottom repeat-x;
}
.van-rate__item {
    float: left;
}
</style>