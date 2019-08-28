<template>
  <div>
    <Header title="首页模板" />
    <!-- <div style="margin-top:48px;"></div> -->
    <div class="Home_swipe">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="@/assets/02.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="@/assets/03.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="@/assets/04.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="@/assets/05.jpg" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
export default {
  //     data(){
  //   return {}
  // },
  name: "home1",
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
  .Home_swipe{
    position: relative;
    margin-top:50px;
    width: 100%;
    height: 140px;
  }
</style>>
</style>
