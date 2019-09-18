<template>
  <div>
    <!-- <div class="city-list city-list-inline clearfix">
      <div class="location-city">定位失败，请点击重试</div>
    </div> -->
    <div class="container">
    <div index="热门城市" class="city-title">热门城市</div>
    <div class="city-list city-list-inline clearfix">
      <div class="city-item" title="上海" data-id="10">上海</div>

      <div class="city-item" title="北京" data-id="1">北京</div>

      <div class="city-item" title="广州" data-id="20">广州</div>

      <div class="city-item" title="深圳" data-id="30">深圳</div>

      <div class="city-item" title="武汉" data-id="57">武汉</div>

      <div class="city-item" title="天津" data-id="40">天津</div>

      <div class="city-item" title="西安" data-id="42">西安</div>

      <div class="city-item" title="南京" data-id="55">南京</div>

      <div class="city-item" title="杭州" data-id="50">杭州</div>

      <div class="city-item" title="成都" data-id="59">成都</div>

      <div class="city-item" title="重庆" data-id="45">重庆</div>
    </div>
    <mt-index-list>
      <mt-index-section index="A">
        <mt-cell title="Aaron"></mt-cell>
        <mt-cell title="Alden"></mt-cell>
        <mt-cell title="Austin"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Caldwin"></mt-cell>
        <mt-cell title="Craden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="D">
        <mt-cell title="Daldwin"></mt-cell>
        <mt-cell title="Draden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="E">
        <mt-cell title="Ealdwin"></mt-cell>
        <mt-cell title="Eraden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="F">
        <mt-cell title="Faldwin"></mt-cell>
        <mt-cell title="Fraden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="G">
        <mt-cell title="Galdwin"></mt-cell>
        <mt-cell title="Graden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="H">
        <mt-cell title="Haldwin"></mt-cell>
        <mt-cell title="raden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="Z">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
    </mt-index-list>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
div {
  display: block;
}
.city-title {
  padding-left: 15px;
  line-height: 30px;
}
.container{
    background-color: #ebebeb;
    font-size: 14px;
    color: #333;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 1000;
    overflow-y: auto;
}
.city-item,.city-list-inline .location-city {
  float: left;
  background: #fff;
  width: 29%;
  height: 33px;
  margin-top: 15px;
  margin-left: 4%;
  padding: 0 4px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  line-height: 33px;
  text-align: center;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.city-list-inline {
  background-color: #f5f5f5;
  padding-bottom: 8px;
}
.city-list {
  padding-right: 30px;
}
</style>