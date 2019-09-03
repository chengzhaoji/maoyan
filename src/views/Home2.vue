<template>
  <div class="page-tabbar">
    <!--Home.vue-->
    <!--1:顶部标题子组件-->
    <Header class="header">
      <h1>{{title}}</h1>
    </Header>
    <!--2:div保留(标题)48px高度-->
    <!-- <div style="margin-top:50px;">
    </div>-->
    <!--Home2.vue 入口全局组件-->
    <!--3:切换面板列表-->
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="home1">
        <home1></home1>
      </mt-tab-container-item>
      <mt-tab-container-item id="movie">
        <movie  style="position:none"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="theater">
        <theater></theater>
      </mt-tab-container-item>
      <mt-tab-container-item id="cinema">
        <cinema></cinema>
      </mt-tab-container-item>
      <mt-tab-container-item id="mine">
        <mine></mine>
      </mt-tab-container-item>
    </mt-tab-container>
    <!--4:tabbar列表-->
    <!--为每个按钮绑定点击事件-->
    <mt-tabbar v-model="active" fixed>
      <mt-tab-item id="home1">
        <footer/>
        <img slot="icon" src="@/assets/04.png" />
        首页
      </mt-tab-item>
      <mt-tab-item id="movie">
        <footer/>
        <img slot="icon" src="@/assets/05.png" />
        电影
      </mt-tab-item>
      <mt-tab-item id="theater">
        <footer/>
        <img slot="icon" src="@/assets/06.png" />
        演出
      </mt-tab-item>
      <mt-tab-item id="cinema">
        <footer/>
        <img slot="icon" src="@/assets/08.png" />
        影视
      </mt-tab-item>
      <mt-tab-item id="mine">
        <footer/>
        <img slot="icon" src="@/assets/09.png" />
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import Headerss from "@/components/headerss/Headerss.vue";
import Footerss from "@/components/footerss/Footerss.vue";
import Home1 from "@/views/Home/Home1.vue";
import Movie from "@/views/Movie/Movie.vue";
import Theater from "@/views/Theater/Theater.vue";
import Cinema from "@/views/Cinema/Cinema.vue";
import Mine from "@/views/Mine/Mine.vue";
export default {
  data() {
    return {
      //面板中显示子组件id
      active: "home1"
      //创建数组保存图片焦点状态
    };
  },
  props: {
    title: {
      type: String,
      default: "猫眼影院"
    }
  },
//   mounted: function() {
// //当前页面挂载的时候调用 返回键的监听方法
// this.listeningBack()
// },
//  //当页面销毁的时候我们也要将事件监听销毁，以免影响其他内容
//  destroyed:function(){
//   window.onpopstate = null
// },
  methods: {
//     listeningBack() {
// var that = this;//window.onpopstate方法指向window,所以要储存一下当前的vue实例
// let route = '上一页';//根据业务逻辑的上一页决定
// window.onpopstate = function() {
// //将当前页面window.location.href 放入页面栈当中
// history.pushState({}, null, window.location.href);
// Dialog.alert({
// title: '标题',
// message: '确认返回吗，你所填写的内容将保存为草稿'
// }).then(() => {
// that.$router.push({
// path:route
// })
// }).catch(
// console.log('取消返回，留在当前页面')
// );
// }
// },
  },
  components: {
    headerss: Headerss,
    home1: Home1,
    movie: Movie,
    theater: Theater,
    cinema: Cinema,
    mine: Mine,
    footerss: Footerss
  }
};
</script>
<style  scoped>
.mint-tab-container {
    overflow: hidden;
    position: inherit;
}
.page-tabbar {
  overflow: hidden; /*溢出隐藏*/
}
.header {
  width: 100%;
  height: 50px;
  background: #ddd;
  border-bottom: 1px solid #f00;
  position: fixed;
  top: 0px;
  left: 0px;
}
.header h1 {
  font-size: 18px;
  text-align: center;
  line-height: 50px;
  margin-top: 0px;
}
</style>
</style>