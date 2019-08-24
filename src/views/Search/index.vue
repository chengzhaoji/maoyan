<template>
<div>
<Header/>
    <!-- <div class="search-header">
      <div class="input-wrapper">
        <img class="search-icon" src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/search.png" alt="">
        <input class="search-input" type="text" placeholder="搜影院">
        <img class="del-input" style="display: none;" src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/close.png" alt="">
      </div>
      <div class="cancel">取消</div>
    </div> -->
    <div style="margin-top:50px;">
        <mt-search
  :value.sync="value"
  cancel-text="取消"
  placeholder="搜索">
</mt-search>
    </div>
    
</div>
</template>
<script>
import Header from '@/components/header/Header.vue'
export default {
    data(){
        return{
            value:"",
        }
    },
     components:{
    Header,
  }

}
</script>
<style scoped>
    /* .search-header {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 8px 0 8px 10px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
    z-index: 1;
}
.search-header .input-wrapper {
    padding: 0 10px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    background-color: #fff;
    flex-grow: 1;
} */
</style>