<template>
  <div>
    <Headerss title="首页" style="height:50px" />
    <!-- <div style="margin-top:48px;"></div> -->
    <div>
      <van-tabs>
        <van-tab title="推荐" name="a">
          <div style="padding:8px">
            <div class="Home_swipe">
              <mt-swipe :auto="4000" style="height:140px">
                <mt-swipe-item>
                  <img src="@/assets/02.jpg" alt />
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="@/assets/03.jpg" alt />
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="@/assets/04.jpg" alt />
                </mt-swipe-item>
                <mt-swipe-item>
                  <img src="@/assets/05.jpg" alt />
                </mt-swipe-item>
              </mt-swipe>
            </div>
          </div>
          <div class="home-list">
            <ul class="listbox">
              <li>
                <router-link to="/movie">
                  <div class="list-sd icon"></div>
                  <div class="list-color">速度与激情</div>
                </router-link>
              </li>
              <li>
                <router-link to>
                  <div class="list-yc icon"></div>
                  <div class="list-color">热门演出</div>
                </router-link>
              </li>
              <li>
                <router-link to>
                  <div class="list-zn icon"></div>
                  <div class="list-color">周边年中秒</div>
                </router-link>
              </li>
              <li>
                <router-link to>
                  <div class="list-hb icon"></div>
                  <div class="list-color">现金红包</div>
                </router-link>
              </li>
              <li>
                <router-link to>
                  <div class="list-mx icon"></div>
                  <div class="list-color">明星应援</div>
                </router-link>
              </li>
            </ul>
          </div>
          <van-tabs :border="false">
            <div>
              <van-tab title="正在热映" >
                <div class="list-wrap" style="margin-top: 0px;">
                  <div class="most-expected">
                    <!-- <p class="title" style="margin-bottom:5px">近期最受期待</p> -->
                    <div class="most-expected-list container">
                      <div class="expected-item" v-for="(item,index) in lists" :key="item.id">
                        <div class="poster img-bg">
                          <img
                            :src="'https://images.weserv.nl/?url='+listImg[index]"
                            onerror="this.style.visibility='hidden'"
                          />
                          <span class="wish-bg"></span>
                          <span class="wish-bottom">
                            <span>197990</span>人想看
                          </span>
                          <div class="toggle-wish">
                            <span class="like"></span>
                          </div>
                        </div>
                        <h5 class="name line-ellipsis">{{item.title}}</h5>
                        <p class="date">9月30日</p>
                      </div>
                    </div>
                  </div>
                </div>
              </van-tab>
              <van-tab title="即将上映">
                <div class="list-wrap" style="margin-top: 0px;">
                  <div class="most-expected">
                    <!-- <p class="title" style="margin-bottom:5px">近期最受期待</p> -->
                    <div class="most-expected-list container">
                      <div class="expected-item" v-for="(item,index) in lists1" :key="item.id">
                        <div class="poster img-bg">
                          <img
                            :src="'https://images.weserv.nl/?url='+listImgs[index]"
                            onerror="this.style.visibility='hidden'"
                          />
                          <span class="wish-bg"></span>
                          <span class="wish-bottom">
                            <span>197990</span>人想看
                          </span>
                          <div class="toggle-wish">
                            <span class="like"></span>
                          </div>
                        </div>
                        <h5 class="name line-ellipsis">{{item.title}}</h5>
                        <p class="date">9月30日</p>
                      </div>
                    </div>
                  </div>
                </div>
              </van-tab>
            </div>
            <div
              style="display:flex;position:relative;top:0px;left:44%;font-size:15px;color:#666"
            >
              全部69部
              <img src="@/assets/arrow.png" style="width:16px;height:16px" />
            </div>
          </van-tabs>
        </van-tab>
        <van-tab title="电视剧" name="b">内容 2</van-tab>
        <van-tab title="演唱会" name="c">内容 3</van-tab>
        <van-tab title="看大片" name="d">内容 4</van-tab>
        <van-tab title="综艺" name="e">内容 5</van-tab>
        <van-tab title="书籍" name="f">内容 6</van-tab>
      </van-tabs>
    </div>
    <div></div>
    <Footerss />
  </div>
</template>

<script>
import Headerss from "@/components/headerss/Headerss.vue";
import Footerss from "@/components/footerss/Footerss.vue";
export default {
  name: "home1",
  data() {
    return {
      start:30,
      count: 10,
      lists: "",
      lists1: "",
      listImg: [],
      listImgs: [],
    };
  },
  methods: {
    add() {
      var url =
        `http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=${this.start}&count=${this.count}`;
      this.$jsonp(url).then(res => {
        // console.log(res)
        for (var i = 0; i < res.subjects.length; i++) {
          let imgUrl = res.subjects[i].images.small;
          let imgUrls = imgUrl.slice(7);
          this.listImg.push(imgUrls);
          // console.log(imgUrls);
        }
        // console.log('我是:',this.listImg);
        this.lists = res.subjects;
      });
    },
    acc() {
      var urls="http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=40&count=10";
      this.$jsonp(urls).then(res => {
        // console.log(res)
        for (var i = 0; i < res.subjects.length; i++) {
          let imgUrl1 = res.subjects[i].images.small;
          let imgUrls1 = imgUrl1.slice(7);
          this.listImgs.push(imgUrls1);
          // console.log(imgUrls);
        }
        // console.log('我是:',this.listImg);
        this.lists1 = res.subjects;
      });
    }
  },
  created() {
    this.add();
    this.acc();
  },
  components: {
    Headerss,
    Footerss
  }
};
</script>

<style scoped>
div ul li {
  display: block;
}
.Home_swipe {
  position: relative;
  height: 140px;
}
.mint-swipe-item > img {
  border-radius: 10px;
  height: 100%;
}
/*二级的列表 */
.home-list {
  background: #fff;
  height: 95px;
  padding: 0 10px;
}
/* 弹性布局 */
.home-list .listbox {
  display: flex;
  font-size: 12px;
}
/* 文本对齐调整 */
.home-list .listbox li {
  flex: 1;
  text-align: center;
  padding-top: 20px;
}
/* 图片的大小样式 */
.home-list .listbox .icon {
  margin: 0 auto;
  width: 43px;
  height: 43px;
  background-size: cover;
}
/* 速度激情 */
.list-sd {
  border-radius: 32px;
  overflow: hidden;
  background: url("../../assets/178932010_1566973331_75258.jpg") no-repeat;
  width: 32px;
  height: 32px;
}
.list-yc {
  border-radius: 32px;
  overflow: hidden;
  background: url("../../assets/178932010_1566973331_75258.jpg") no-repeat;
  width: 32px;
  height: 32px;
}
.list-hb {
  border-radius: 32px;
  overflow: hidden;
  background: url("../../assets/178932010_1566973331_75258.jpg") no-repeat;
  width: 32px;
  height: 32px;
}
.list-zn {
  border-radius: 32px;
  overflow: hidden;
  background: url("../../assets/178932010_1566973331_75258.jpg") no-repeat;
  width: 32px;
  height: 32px;
}
.list-mx {
  border-radius: 32px;
  overflow: hidden;
  background: url("../../assets/178932010_1566973331_75258.jpg") no-repeat;
  width: 32px;
  height: 32px;
}
.list-color {
  color: #000;
}
img {
  width: 100%;
  display: block;
}
.list-wrap {
  background: #f5f5f5;
  font-size: 14px;
  color: #777;
}
/* 列表的的边距与样式结构 */
.list-wrap .most-expected {
  padding: 12px 15px 12px 15px;
  background: #fff;
  margin-bottom: 10px;
}
/* 列表标题 */
.title {
  margin: 0;
  color: #333;
  font-size: 17px;
  /* margin-bottom: 12px; */
}
/* 去滚动条 */
.container::-webkit-scrollbar {
  display: none;
}
/* 预期列表介绍的内容 */
.most-expected-list {
  overflow: scroll; /*卷轴方式的移动*/
  white-space: nowrap; /*空间不换行,在同一行*/
}
/* 宽度的范围 */
.list-wrap .expected-item {
  display: inline-block;
  overflow: hidden;
  width: 85px;
  margin-right: 10px; /*每个列表框之间的距离*/
}
/* 图片的大小 */
.expected-item .poster {
  width: 85px;
  height: 115px;
  position: relative;
  margin-bottom: 6px;
}
/* 图片的背景样式 */
.img-bg {
  background-color: #e1e1e1;
  background-size: 100% 1000%;
}
.img-bg > img {
  width: 100%;
  height: 100%;
}
/*图片底部遮罩的线性渐变 */
.wish-bg {
  display: inline-block;
  width: 100%;
  height: 35px;
  position: absolute;
  bottom: 0;
  background-image: linear-gradient(-180deg, rgba(77, 77, 77, 0), #000);
}
/* 底部想看的样式 */
.wish-bottom {
  position: absolute;
  left: 4px;
  bottom: 2px;
  color: #faaf00;
  font-size: 11px;
  font-weight: 600;
}
/* 图片左上角的喜欢标签 */
.toggle-wish {
  width: 28px;
  height: 28px;
  background: rgba(61, 63, 71, 0.6);
  text-align: center;
  border-bottom-right-radius: 13px;
  position: absolute;
  top: 0px;
  line-height: 28px;
}
.toggle-wish span {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-size: 100%;
  background-repeat: no-repeat;
}
.toggle-wish .like {
  background-image: url(../../assets/link.png);
}
.name {
  margin: 0;
  font-size: 13px;
  color: #222;
  margin-bottom: 3px;
}
.date {
  margin: 0;
  margin-top: 3px;
  font-size: 12px;
  color: #999;
}
</style>
