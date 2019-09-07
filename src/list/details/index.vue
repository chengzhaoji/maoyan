<template>
  <div>
    <div style="height:50px">
      <Headerss title="星汇电影城" style="height:50px" />
      <div class="back-content">
        <div class="back" @click="backs"></div>
      </div>
    </div>
    <div>
      <div class="details-wrap">
        <div class="cinema-wrap">
          <div class="cinema-info">
            <div class="cinema-title line-ellipsis">星汇电影城</div>
            <div class="location line-ellipsis">越秀区西湖路63号光明广场7层（北京路广百南门对面）</div>
            <div class="location-icon">
              <img src="@/assets/maps.png" alt />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div
              class="post-bg"
              style="background-image: url(&quot;//p1.meituan.net/148.208/movie/648bbced128324a4b4ccf7db6c564a251744344.jpg&quot;);"
            ></div>
            <swiper :options="swiperOption" class="cinema-nav swiper-container">
              <swiper-slide v-for="(item,index) in list" :key="index">
                <img :src="'https://images.weserv.nl/?url='+listImg[index]" />
              </swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <div class="movie-info">
              <div class="movie-title line-ellipsis">
                <span class="title">速度与激情：特别行动</span>
                <span class="grade">
                  <span>
                    8.6
                    <span class="small">分</span>
                  </span>
                </span>
              </div>
              <div class="movie-desc line-ellipsis">134分钟 | 动作 | 道恩·强森,杰森·斯坦森</div>
            </div>
          </div>
        </div>
      </div>
      <!-- swiper -->

      <div>
        <van-tabs v-model="active" swipeable title-active-color="#f00" swipeable:true>
          <van-tab title="今天9月7号">
            <div class="seat-wrap">
              <div class="discount-block">
                <div class="vip-tips">
                  <a>
                    <div class="label">折扣卡</div>
                    <div class="label-text line-ellipsis">现在开卡，首单2张最高立减6元</div>
                    <div class="process">20元起开卡</div>
                  </a>
                </div>
              </div>
              <div class="seat-inner-wrap">
                <div class="seat-list">
                  <div class="list-wrap">
                    <div class="item-outer mb-line-b" data-bid="dp_wx_cinema_show_item">
                      <div class="item box-flex">
                        <div class="time-block">
                          <div class="begin">19:20</div>
                          <div class="end">
                            21:34
                            <span class="tui">散场</span>
                          </div>
                        </div>
                        <div class="info-block">
                          <div class="lan">原版 3D</div>
                          <div class="hall">杜比3号巨幕厅</div>
                        </div>
                        <div class="price">
                          <div class="sellPr">
                            <span class="d">¥</span>
                            <span>
                              <span class="stonefont">42.5</span>
                            </span>
                          </div>
                          <div class="vipPrice">
                            <span class="icon">折扣卡</span>
                            <span class="num">¥37.5</span>
                          </div>
                          <div class="extraDesc">折扣卡首单特惠</div>
                        </div>
                        <div class="button-block">
                          <div class="button disable-btn">购票</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="周日9月8号">
              <div class="seat-wrap">
              <div class="discount-block">
                <div class="vip-tips">
                  <a>
                    <div class="label">折扣卡</div>
                    <div class="label-text line-ellipsis">现在开卡，首单2张最高立减6元</div>
                    <div class="process">20元起开卡</div>
                  </a>
                </div>
              </div>
              <div class="seat-inner-wrap">
                <div class="seat-list">
                  <div class="list-wrap">
                    <div class="item-outer mb-line-b" data-bid="dp_wx_cinema_show_item">
                      <div class="item box-flex">
                        <div class="time-block">
                          <div class="begin">10:30</div>
                          <div class="end">
                            12:11
                            <span class="tui">散场</span>
                          </div>
                        </div>
                        <div class="info-block">
                          <div class="lan">国语 3D</div>
                          <div class="hall">7号厅</div>
                        </div>
                        <div class="price">
                          <div class="sellPr">
                            <span class="d">¥</span>
                            <span>
                              <span class="stonefont">37.5</span>
                            </span>
                          </div>
                          <div class="vipPrice">
                            <span class="icon">折扣卡</span>
                            <span class="num">¥32.5</span>
                          </div>
                          <div class="extraDesc">折扣卡首单特惠</div>
                        </div>
                        <div class="button-block">
                          <div class="button disable-btn">购票</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="后天9月10号">
              <div class="seat-wrap">
              <div class="discount-block">
                <div class="vip-tips">
                  <a>
                    <div class="label">折扣卡</div>
                    <div class="label-text line-ellipsis">现在开卡，首单2张最高立减6元</div>
                    <div class="process">20元起开卡</div>
                  </a>
                </div>
              </div>
              <div class="seat-inner-wrap">
                <div class="seat-list">
                  <div class="list-wrap">
                    <div class="item-outer mb-line-b" data-bid="dp_wx_cinema_show_item">
                      <div class="item box-flex">
                        <div class="time-block">
                          <div class="begin">19:20</div>
                          <div class="end">
                            21:34
                            <span class="tui">散场</span>
                          </div>
                        </div>
                        <div class="info-block">
                          <div class="lan">原版 3D</div>
                          <div class="hall">杜比3号巨幕厅</div>
                        </div>
                        <div class="price">
                          <div class="sellPr">
                            <span class="d">¥</span>
                            <span>
                              <span class="stonefont">42.5</span>
                            </span>
                          </div>
                          <div class="vipPrice">
                            <span class="icon">折扣卡</span>
                            <span class="num">¥37.5</span>
                          </div>
                          <div class="extraDesc">折扣卡首单特惠</div>
                        </div>
                        <div class="button-block">
                          <div class="button disable-btn">购票</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
import Headerss from "@/components/headerss/Headerss.vue";
import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
// require styles
import "swiper/dist/css/swiper.css";
Vue.use(VueAwesomeSwiper /* { default global options } */);
export default {
  data() {
    return {
      listImg: [],
      list: "",
      count: 10,
      start: 0,
      active: "",
      swiperOption: {
        slidesPerView: 4,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  methods: {
    backs() {
      this.$router.back();
      this.$store.commit("changecinema");
    },
    bb() {
      var url = `http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${this.list.length}&count=${this.count}`;
      this.$jsonp(url).then(res => {
        console.log(res.subjects);
        for (var i = 0; i < res.subjects.length; i++) {
          let imgUrl = res.subjects[i].images.small;
          let imgUrls = imgUrl.slice(7);
          this.listImg.push(imgUrls);
          // console.log(imgUrls);
          // console.log(ratings);
        }
        // console.log('我是:',this.listImg);
        this.list = res.subjects;
      });
    }
  },
  components: {
    Headerss: Headerss
  },

  created() {
    this.bb();
  }
};
</script>
<style scoped>
.details-wrap {
  background: #777;
  font-size: 14px;
  margin-bottom: 20px;
  opacity: 0.99;
}
.cinema-wrap {
  background: #fff;
}
.cinema-wrap .cinema-info {
  position: relative;
  padding: 15px;
  padding-right: 100px;
}
.cinema-info .cinema-title {
  font-size: 17px;
  line-height: 24px;
  font-weight: 700;
  color: #333;
}
.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.cinema-info .location {
  margin-top: 2px;
  font-size: 13px;
  line-height: 18.5px;
  color: #999;
}
/* 图标整体的定位 */
.cinema-info .location-icon {
  position: absolute;
  right: 0;
  top: 50%;
  width: 70px;
  height: 31px;
  /* -webkit-transform: translateY(-50%); */
  transform: translateY(-50%);
  border-left: 1px solid #d8d8d8;
  text-align: center;
}
/* 图标的大小 */
.location-icon img {
  display: inline-block;
  width: 19px;
  height: 22px;
  margin-top: 5px;
}
/* 电影选择框 */
.cinema-nav {
  padding: 20px 0;
  padding-left: 5px;
  padding-right: 15px;
}
/* 优先 */
.swiper-container {
  position: relative;
  overflow: hidden;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
}
/* 遮罩层 */
.post-bg {
  position: absolute;
  width: 100%;
  height: 141px;
  top: 125px;
  left: 0;
  z-index: -1;
  overflow: hidden;
  filter: blur(30px);
  background-position-y: 40%;
}
/* 背景重叠 */
.post-bg-filter {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #40454d;
  opacity: 0.55;
}
/* 内容 */
/* 第一张图片 */
.swiper-slide:first-child {
  margin-left: 10%;
}

/* 内部图片的尺寸 */
.cinema-nav .swiper-slide {
  width: 65px !important;
  margin-right: 8px !important;
}
.swiper-slide {
  width: 65px;
  transition: transform 0.3s;
  position: relative;
}
/* 图片间距,从第二张开始 */
.swiper-wrapper .swiper-slide + .swiper-slide {
  margin-left: 10px;
}
/* 选中时添加一个小箭头 */
.swiper-slide.swiper-slide-active:after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 5px;
  background: url("../../assets/cinema-dorp.png") no-repeat;
  background-size: contain;
}
/* 选中时放大,添加边框 */
.cinema-nav .swiper-slide.swiper-slide-active {
  transform: scale(1.15);
  border: 2px solid #fff;
  margin-right: 5px !important;
}
.swiper-wrapper {
  -webkit-transform: translate3d(0px, 0, 0);
  transform: translate3d(0px, 0, 0);
  margin-left: 50%;
}
/* 底部列表文字 */
.movie-info {
  padding: 11px 15px;
  text-align: center;
  background: #fff;
  opacity: 1;
}
/* 文字一 */
.movie-info .movie-title {
  height: 24px;
  line-height: 24px;
  font-size: 17px;
  color: #333;
  font-weight: 700;
}
/* 评分颜色 */
.movie-info .movie-title .grade {
  color: #ffb400;
  font-size: 16px;
}
.movie-title .grade .small {
  font-size: 10px;
}
/* 文字二 */
.movie-info .movie-desc {
  margin-top: 2px;
  height: 18.5px;
  line-height: 18.5px;
  font-size: 13px;
  color: #999;
}
/* 返回键 */
.back-content {
  position: relative;
  top: -33px;
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
/* 售票的一些时间段和情况 */
.vip-tips {
  padding: 0 15px;
  height: 42px;
  line-height: 42px;
  background: #fff5ea;
}
a {
  text-decoration: none;
}
.vip-tips a {
  display: flex;
  color: #777;
}
/* 折扣栏标签 */
.discount-tips .label,
.vip-tips .label {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  display: inline-block;
  background-color: #ffb400;
  border-radius: 2px;
  font-size: 10px;
  line-height: 15px;
  height: 15px;
  width: 34px;
  text-align: center;
  color: #fff;
  margin-top: 13px;
  margin-right: 10px;
}
/* 字体样式 */
.vip-tips .label-text {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  background-color: fa9600;
  font-size: 12px;
}
/* 最右边的价格标准 */
.vip-tips .process {
  flex: 0 0 auto;
  line-height: 42px;
  color: #999;
  font-size: 12px;
}
.vip-tips .process:after {
  display: inline-block;
  content: "";
  width: 7px;
  height: 7px;
  border-left: 1px solid #ccc;
  border-top: 1px solid #ccc;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
}
.seat-inner-wrap {
  position: relative;
}
.list-wrap .item-outer {
  padding: 20px 0;
  margin-left: 12.5px;
}
.list-wrap .item {
  padding-right: 12.5px;
  display: -ms-flexbox;
  display: flex;
  flex: 1;
  height: 43px;
  line-height: 15px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  font-size: 13px;
  text-overflow: ellipsis;
}
.item .time-block {
  position: relative;
}
/* 时间 */
.item .time-block .begin {
  font-size: 20px;
  color: #333;
  line-height: 1;
  white-space: nowrap;
}
/* 散场时间 */
.item .time-block .end {
  margin-top: 10px;
  color: #999;
  font-size: 11px;
  line-height: 1;
  white-space: nowrap;
}
.list-wrap .item .info-block {
  margin-left: 17px;
  flex: 1;
  overflow-x: hidden;
}
.list-wrap .item .info-block .lan {
  margin-top: 2px;
  line-height: 18px;
  font-size: 13px;
  color: #333;
  white-space: normal;
}
.list-wrap .item .info-block .hall {
  margin-top: 7px;
  font-size: 11px;
  color: #999;
  white-space: normal;
}
.list-wrap .item .price {
  flex: 0 1 auto;
  width: 130px;
  margin-left: 5px;
}
.list-wrap .item .price .sellPr {
  display: inline-block;
  line-height: 1;
  color: #f03d37;
  margin-top: 1px;
  font-size: 19px;
}
.list-wrap .item .price .sellPr .d {
  color: 13px;
  font-size: 11px;
}
.list-wrap .item .price .sellPr {
  display: inline-block;
  line-height: 1;
  color: #f03d37;
  margin-top: 1px;
  font-size: 19px;
}
/* 折扣 */
.vipPrice {
  display: inline-block;
  line-height: 15px;
  height: 15px;
  /* -webkit-transform: scale(.8); */
  transform: scale(0.8);
  /* -webkit-transform-origin: left; */
  transform-origin: left;
  margin-right: -16px;
  border: 1px solid #ff9000;
  border-radius: 2px;
  font-size: 12px;
}
.vipPrice .icon {
  color: #fff;
  background-color: #f90;
  padding: 0 2px;
}
.vipPrice .num {
  color: #f90;
  background-color: #fff;
  padding: 0 2px;
}
.list-wrap .item .price .extraDesc {
  margin-top: 5px;
  display: block;
  font-size: 11px;
  color: #999;
}
/* 待售按钮 */
.list-wrap .item .button-block {
  width: 45px;
  margin-left: 2px;
  position: relative;
  height: 10px;
}
.list-wrap .item .button-block .button {
  position: absolute;
  top: 50%;
  width: 100%;
  height: 27px;
  line-height: 28px;
  font-size: 12px;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  text-align: center;
}
</style>