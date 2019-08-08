<template>
   <div class="page-tabbar">
      <!--Home.vue-->
      <!--1:顶部标题子组件-->      
      <header class="header"><h1>{{title}}</h1></header>
      <!--2:div保留(标题)48px高度-->
      <div style="margin-top:48px;">
      </div>
      <!--Home2.vue 入口全局组件-->
      <!--3:切换面板列表-->
      <mt-tab-container class="" v-model="active">
        <mt-tab-container-item id="home1">
         <home1>
         </home1>
        </mt-tab-container-item>
        <mt-tab-container-item id="movie">
         <movie>
         </movie>
        </mt-tab-container-item>
        <mt-tab-container-item id="theater">
         <theater>
         </theater>
        </mt-tab-container-item>
        <mt-tab-container-item id="cinema">
         <cinema>
         </cinema>
        </mt-tab-container-item>
        <mt-tab-container-item id="mine">
         <mine>
         </mine>
        </mt-tab-container-item>
      </mt-tab-container>
      <!--4:tabbar列表-->
      <!--为每个按钮绑定点击事件-->
      <mt-tabbar v-model="active" fixed>
        <mt-tab-item id="home1">
         <footer
          >
         </footer>
         <img  slot="icon" src="@/assets/04.png" />
         首页   
        </mt-tab-item>
        <mt-tab-item id="movie">
         <footer
         >
         </footer>
         <img  slot="icon" src="@/assets/05.png" />
         电影
        </mt-tab-item>
        <mt-tab-item id="theater">
          <footer
          >
          </footer>
          <img  slot="icon" src="@/assets/06.png" />
          演出
        </mt-tab-item>
        <mt-tab-item id="cinema">
          <footer
          ></footer>
          <img  slot="icon" src="@/assets/08.png" />
          影视
        </mt-tab-item>
        <mt-tab-item id="mine">
          <footer
          ></footer>
          <img  slot="icon" src="@/assets/09.png" />
          我的
        </mt-tab-item>
      </mt-tabbar>
   
   </div>
</template>
<script>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
import Home1 from '@/views/Home/Home1.vue'
import Movie from '@/views/Movie/Movie.vue'
import Theater from '@/views/Theater/Theater.vue'
import Cinema from '@/views/Cinema/Cinema.vue'
import Mine from '@/views/Mine/Mine.vue'
export default {
  data(){
    return {
      //面板中显示子组件id
       active:"home1"
      //创建数组保存图片焦点状态
     
    }
  },
  props:{
      title:{
        type:String,
        default:"猫眼影院"
      }
    },
  methods: {
    // mysearch(){console.log("搜索");},
    // changeState(n){
    //   //函数功能:将当前参数下标
    //   //对应数组值修改true其它修改false
    //   //1:创建循环,循环数组中内容
    //   for(var i=0;i<this.currentIndex.length;i++){
    //    //2:判断如果循环下标与n相等 20
    //    if(n==i){
    //     //3:当前下标元素true 10:22
    //     this.currentIndex[i].isSelect=true;
    //    }else{
    //     //4:其它元素修改false
    //     this.currentIndex[i].isSelect=false;
    //    }
       
    //   }

    // }
  },
  components:{
    "header":Header,
    "home1":Home1,
    "movie":Movie,
    "theater":Theater,
    "cinema":Cinema,
    "mine":Mine,
    "footer":Footer
  }
}
</script>
<style  scoped>
.page-tabbar{
  overflow: hidden;/*溢出隐藏*/
}
  .header{
  width:100%;
  height:50px;
  background:#ddd;
  border-bottom:1px solid #f00;
  position:fixed;
  top:0px;
  left:0px;
}
.header h1{
  font-size:18px;
  text-align: center;
  line-height:50px;
  margin-top:0px
  }

</style>
</style>