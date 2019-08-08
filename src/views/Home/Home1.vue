<template>
<div> 
    <Header title="首页模板"/>
    <div style="margin-top:48px;">
      </div>
      <!-- <mt-tab-container-item id="Home1">
          我的首页
       </mt-tab-container-item> -->
       <h1>首页</h1>
    <Footer/>
    </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
export default {
  //     data(){
  //   return {}
  // },
   name: 'home1',
  components:{
    Header,
    Footer
  }
}
</script>

<style>

</style>
