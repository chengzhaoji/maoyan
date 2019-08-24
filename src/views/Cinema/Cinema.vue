<template>
  <div id="Cinema">
    <Header title="影院模板" />
    <!-- <div style="margin-top:48px;">
    </div>-->
    <div class="gray-bg topbar-bg">
      <div class="city-entry">
        <span class="city-name">广州</span>
        <i class="city-entry-arrow"></i>
      </div>
      <div class="search-entry search-input" data-type="cinema" @click="add">
        <img src="@/assets/seach.png" />
        <span>搜影院</span>
      </div>
    </div>
    <div class="tow-list">
      <div class="tab mb-line-b">
        <div class="item" data-tab="region">
          全城
          <span class="drop"></span>
        </div>
        <div class="item" data-tab="brand">
          品牌
          <span class="drop"></span>
        </div>
        <div class="item" data-tab="special">
          特色
          <span class="drop"></span>
        </div>
      </div>
    </div>
    <div class="list-wrap list_item mb-line-b">
      <div class="title-block">
        <div class="title line-ellipsis">
          <span>星汇电影城</span>

          <span class="price-block">
            <span class="price">32.5</span>
            <span class="q">元起</span>
          </span>
        </div>
        <div class="location-block box-flex">
          <div class="flex line-ellipsis">越秀区西湖路63号光明广场7层（北京路广百南门对面）</div>

          <div class="distance">700m</div>
        </div>
        <div class="flex"></div>

        <div class="label-block">
          <div class="snack">小吃</div>
          <div class="vipTag">折扣卡</div>
          <div class="hallType">杜比全景声厅</div>
        </div>

        <div class="discount-block">
          <div>
            <div class="discount-label normal card">
              <img src="@/assets/car.png" alt />
            </div>
            <div class="discount-label-text">开卡特惠，首单2张最高立减6元</div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
export default {
  data() {
    return {
      // active: "special",
    };
  },
  //  name: 'cinema',
  components: {
    Header,
    Footer
  },
  methods: {
    add() {
      this.$router.push("/Search");
    },
    acc() {
      this.add("active");
    }
  }
};
</script>

<style>
.gray-bg {
  background: #f5f5f5;
  margin-top: 50px;
}
.topbar-bg {
  display: flex;
  align-items: center;
  height: 44px;
  justify-content: space-between;
}
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
.topbar .search-input {
  flex-grow: 1;
}
.search-input {
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  width: 75%;
  height: 28px;
  font-size: 13px;
  color: #b2b2b2;
  margin-left: 18px;
  border: 0.5px solid #e6e6e6;
  border-radius: 5px;
  margin-right: 15px;
}
.search-input img {
  width: 14px;
  height: 14px;
  margin-left: 3px;
  margin-right: 4px;
}
.tow-list {
  font-size: 14px;
  color: #777;
}
.tab {
  display: flex;
}
.item {
  flex: 1;
  text-align: center;
  line-height: 40px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  font-size: 13px;
  text-overflow: ellipsis;
}
.drop {
  width: 0;
  height: 0;
  border: 4px solid transparent;
  border-top-color: #b0b0b0;
  display: inline-block;
  margin-left: 4px;
  margin-top: 5px;
}
.mb-line-b {
  background: url(../../assets/bottom.png) 0 bottom repeat-x;
}
.list-wrap.list_item {
  padding: 13px 15px 13px 0;
  margin-left: 15px;
  background-color: #fff;
  position: relative;
  overflow: hidden;
}
.list-wrap .title-block {
  display: block;
}
.list-wrap .title-block {
  line-height: 1.5;
}
.list-wrap .title-block .title {
  height: 23px;
  line-height: 23px;
  font-size: 16px;
  color: #000;
}
.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.list-wrap .price-block {
  padding-left: 3px;
}
.price-block > .price {
  font-size: 18px;
  color: #f03d37;
}
.price-block > .q {
  margin-left: 3px;
  font-size: 11px;
  color: #f03d37;
}
.list-wrap .location-block {
  margin-top: 6px;
  font-size: 13px;
  color: #666;
  display: flex;
}
.flex {
  flex: 1;
}
.title-block .label-block {
  height: 17px;
  line-height: 17px;
  margin-top: 4px;
  margin-bottom: 4px;
  overflow: hidden;
  font-size: 0;
  flex-shrink: 0;
}
.title-block .label-block > div {
  position: relative;
  display: inline-block;
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  font-size: 0.6rem;
}
.label-block div.snack {
  color: #f90;
  border: 1px solid #f90;
}
.label-block div.vipTag {
  color: #f90;
  border: 1px solid #f90;
}
.label-block div.hallType {
  color: #589daf;
  border: 1px solid #589daf;
}
.discount-block {
  color: #999;
  margin-bottom: 4px;
}
.discount-block .discount-label {
  width: 15px;
  height: 14px;
  position: relative;
  top: 3px;
}
.discount-label {
  display: inline-block;
}
img {
  display: block;
  width: 100%;
}
.discount-block .discount-label-text {
  margin-left: 5px;
  font-size: 11px;
  display: inline-block;
}
.active {
  color: #f03d37;
}
</style>
