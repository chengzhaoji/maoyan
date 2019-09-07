<template>
  <div class="for">
    <footer>
    <!--底部导航条父元素-->
    <mt-tabbar v-model="active" fixed>
      <!--按钮-->
       <mt-tab-item id="Home1">
         <!--图片:检查图片正确01.png-->
         <img slot="icon" src="../../assets/04.png" />
         <!--文字-->
         首页
       </mt-tab-item>
       <mt-tab-item id="Movie" >
         <!--图片:检查图片正确01.png-->
         <img  slot="icon" src="../../assets/05.png" />
         <!--文字-->
         电影
       </mt-tab-item>       
       <mt-tab-item id="Theater">
         <!--图片:检查图片正确01.png-->
         <img  slot="icon" src="../../assets/06.png" />
         <!--文字 55-->
         演出
       </mt-tab-item>
        <mt-tab-item id="Cinema" >
         <!--图片:检查图片正确01.png-->
         <img  slot="icon" src="../../assets/08.png" />
         <!--文字 55-->
         影院
       </mt-tab-item>
        <mt-tab-item id="Mine">
         <!--图片:检查图片正确01.png-->
         <img  slot="icon" src="../../assets/09.png" />
         <!--文字 55-->
         我的
       </mt-tab-item>
     </mt-tabbar>
     </footer>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        //按钮保存id值
        active:"Home1"
      }
    },
    methods:{
      // home(){
      //   this.$router.push("/home")
      // },
      // cinema(){
      //   this.$router.push("/cinema")
      // },
      // mine(){
      //   this.$router.push("/mine")
      // },
      // theater(){
      //   this.$router.push("/theater")
      // },
      // movie(){
      //   this.$router.push("/movie")
      // }
    }
  }
</script>
<style scoped>
.for{
      position:fixed;
}

</style>