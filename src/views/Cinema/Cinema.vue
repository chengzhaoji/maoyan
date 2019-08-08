<template>
<div id="Cinema"> 
    <Header title="影院模板"/>
    <div style="margin-top:48px;">
      </div>
    <h1>影院</h1>
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
   name: 'cinema',
  components:{
    Header,
    Footer
  }
}
</script>

<style>

</style>
