<template>
  <div>
    <Header title="首页模板" style="height:50px" />
    <!-- <div style="margin-top:48px;"></div> -->
    <div>
      <van-tabs>
        <van-tab title="推荐" name="a">
          <div style="padding:8px">
            <div class="Home_swipe">
              <mt-swipe :auto="4000">
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
        </van-tab>
        <van-tab title="电视剧" name="b">内容 2</van-tab>
        <van-tab title="演唱会" name="c">内容 3</van-tab>
        <van-tab title="看大片" name="d">内容 4</van-tab>
        <van-tab title="综艺" name="e">内容 5</van-tab>
        <van-tab title="书籍" name="f">内容 6</van-tab>
      </van-tabs>
    </div>

    <div></div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
export default {
  data() {
    return {};
  },
  name: "home1",
  components: {
    Header,
    Footer
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
.list-color{
  color: #000;
}
</style>
