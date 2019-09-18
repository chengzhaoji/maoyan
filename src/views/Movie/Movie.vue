<template>
  <div>
    <Headerss title="电影" />
    <div style="margin-top:48px;height:748px;">
      <div style="height:51px">
      <div class="gray-bg topbar-bg movies">
        <div class="city-entry">
          <span class="city-name" @click="gzlist">广州</span>
          <i class="city-entry-arrow"></i>
        </div>
        <div class="switch-hot">
          <div class="hot-item" v-bind:class="see==true?'active':''" @click="hit">正在热映</div>
          <div class="hot-item" v-bind:class="see==false?'active':''" @click="son">即将上映</div>
          <!-- <son/> -->
        </div>
        <div class="search-entry search-icon" @click="add"></div>
        
      </div>
      </div>
    <hit v-if="on"/>
    <son v-else />
     </div>
    <Footerss />
  </div>
</template>

<script>
import Headerss from "@/components/headerss/Headerss.vue";
import Footerss from "@/components/footerss/Footerss.vue";
import hit from "@/list/hit";
import son from "@/list/son";
export default {
  data() {
    return {
      see: true,
      on: true
    };
  },
  components: {
    Headerss,
    Footerss,
    hit,
    son
  },
  methods: {
    add() {
      this.$router.push("/Search");
    },
    gzlist() {
      this.$router.push("/gz");
    },
    hit() {
      this.see = true;
      this.on = true;
    },
    son() {
      this.see = false;
      this.on = false;
    }
  }
};
</script>

<style scoped>
/* 总的样表项样式 */
.gray-bg.movies{
      position: fixed;
    width: 100%;
    z-index: 10;
    background: #fff;
}
.gray-bg {
  background: #f5f5f5;
  /* margin-top: 50px; */
  border-bottom: 1px solid #ddd
}
.topbar-bg {
  display: flex;
  align-items: center;
  height: 50px;
  justify-content: space-between;
}
/* 定位项 */
.city-entry {
  padding-left: 15px;
  font-size: 15px;
  color: #666;
  display: flex;
  align-items: center;
}
.city-entry-arrow {
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-top-color: #b0b0b0;
  display: inline-block;
  margin-left: 4px;
  margin-top: 5px;
}
/* 搜索栏 */
.search-icon {
  width: 20px;
  height: 20px;
  background: url(../../assets/seach.png) no-repeat;
  background-size: 20px;
  padding: 10px 15px 10px 10px;
  background-position: 10px;
}
/* 切换栏目列表部分 */
.switch-hot {
  display: flex;
  height: 44px;
  line-height: 44px;
  position: relative;
}
.hot-item {
  font-size: 15px;
  color: #666;
  width: 70px;
  height: 45px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}
.mb-line-b {
  background: url(../../assets/bottom.png) 0 bottom repeat-x;
}
.active {
  color: #ef4238;
  border-bottom: 2px solid #ef4238;
}
.show {
  display: block;
}
.hidden {
  display: none;
}
</style>
