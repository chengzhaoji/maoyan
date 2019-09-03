<template>
  <div class="for">
    <footer>
     <mt-tab-container v-model="active">
       <!--子面板1 -->
       <!-- <mt-tab-container-item id="Home1">
          首页
       </mt-tab-container-item> -->
       <!--子面板2-->
       <mt-tab-container-item id="Movie">

       </mt-tab-container-item>
       <!--子面板3-->
       <mt-tab-container-item id="Theater">

       </mt-tab-container-item>
        <mt-tab-container-item>
   
       </mt-tab-container-item>
        <mt-tab-container-item id="Mine">

       </mt-tab-container-item>
     </mt-tab-container>

    <!--底部导航条父元素-->
    <mt-tabbar v-model="active" fixed>
      <!--按钮-->
       <mt-tab-item id="Home1">
         <!--图片:检查图片正确01.png-->
         <img slot="icon" src="../../assets/04.png" />
         <!--文字-->
         首页
       </mt-tab-item>
       <mt-tab-item id="Movie">
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
        <mt-tab-item id="Cinema">
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
    }
  }
</script>
<style scoped>
.for{
      position:fixed;
}

</style>