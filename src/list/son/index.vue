<template>
  <div class="page">
    
    <div class="list-wrap" style="margin-top: 0px;">
      <div class="most-expected">
        <p class="title">近期最受期待</p>
        <div class="most-expected-list  container">
          <div class="expected-item" v-for="list in 10" :key="list">
            <div class="poster img-bg">
              <img
                src="@/assets/4c01895cfd53e82f7c3048c407974a6b4739229.jpg"
                onerror="this.style.visibility='hidden'"
              />
              <span class="wish-bg"></span>
              <span class="wish-bottom">
                <span>197990</span>人想看
              </span>
              <div class="toggle-wish">
                <span class="like"></span>
              </div>
            </div>
            <h5 class="name line-ellipsis">攀登者</h5>
            <p class="date">9月30日</p>
          </div>
        </div>
      </div>
    </div>
    <div class="tow-list">
      <div>
        <p class="list-date">8月30日 周五</p>
        <div class="tow-list-item" v-for="dis in 5" :key="dis">
          <div class="tow-block">
            <div class="expected-item">
              <div class="avatar img-bg">
                <img
                  src="@/assets/c2ea0e5c6b9afb43add575c4d51d2f192279458.jpg"
                  onerror="this.style.visibility='hidden'"
                />
              </div>
            </div>
            <div class="mb-line-b">
              <div class="movie-content">
                <div class="flex movie-title">
                  <div class="line-ellipsis">深夜食堂</div>
                </div>
                <div class="detail">
                  <div class="wantsee line-ellipsis">
                    <span class="person">43613</span>
                    <span class="p-suffix">人想看</span>
                  </div>
                  <div class="actor line-ellipsis">主演: 梁家辉,刘涛,魏晨</div>
                  <div class="actor line-ellipsis">2019-08-30上映</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
/* 图片的公共样式 */
img {
  width: 100%;
  display: block;
}
.page {
  display: block;
  position: absolute;
  width: 100%;
  background-color: #f5f5f5;
}
/* 背景的底色 */
.page .list-wrap {
  background: #f5f5f5;
  font-size: 14px;
  color: #777;
}
/* 列表的的边距与样式结构 */
.list-wrap .most-expected {
  padding: 12px 0 12px 15px;
  background: #fff;
  margin-bottom: 10px;
}
/* 列表标题 */
.title {
  margin: 0;
  color: #666;
  font-size: 14px;
  margin-bottom: 12px;
}
/* 去滚动条 */
.container::-webkit-scrollbar {display:none}
/* 预期列表介绍的内容 */
.most-expected-list {
  overflow: scroll; /*卷轴方式的移动*/
  white-space: nowrap; /*空间不换行,在同一行*/
}
.list-wrap .expected-item {
  display: inline-block;
  overflow: hidden;
  margin-right: 10px; /*每个列表框之间的距离*/
}
/* 图片的大小 */
.expected-item .poster {
  width: 85px;
  height: 115px;
  position: relative;
  margin-bottom: 6px;
}
/* 图片的背景样式 */
.img-bg {
  background-color: #e1e1e1;
  background-size: 100% 1000%;
}
.img-bg > img {
  width: 100%;
  height: 100%;
}
/*图片底部遮罩的线性渐变 */
.wish-bg {
  display: inline-block;
  width: 100%;
  height: 35px;
  position: absolute;
  bottom: 0;
  background-image: linear-gradient(-180deg, rgba(77, 77, 77, 0), #000);
}
/* 底部想看的样式 */
.wish-bottom {
  position: absolute;
  left: 4px;
  bottom: 2px;
  color: #faaf00;
  font-size: 11px;
  font-weight: 600;
}
/* 图片左上角的喜欢标签 */
.toggle-wish {
  width: 28px;
  height: 28px;
  background: rgba(61, 63, 71, 0.6);
  text-align: center;
  border-bottom-right-radius: 13px;
  position: absolute;
  top: 0px;
  line-height:28px;
}
.toggle-wish span {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-size: 100%;
  background-repeat: no-repeat;
}
.toggle-wish .like {
  background-image: url(../../assets/link.png);
}
.name {
  margin: 0;
  font-size: 13px;
  color: #222;
  margin-bottom: 3px;
}
.date {
  margin: 0;
  margin-top: 3px;
  font-size: 12px;
  color: #999;
}
/* 第二部分电影列表 */
.tow-list {
  background-color: #fff;
}
/* 标题样式 */
.list-date {
  padding: 12px 5px 0;
  font-size: 14px;
  color: #333;
  margin: 0;
}

.movie-content {
  padding: 12px 14px 12px 0;
  margin-left: 74px;
  height: 90px;
  max-height: 90px;
  position: relative;
}
/* 列表位置 */
.tow-list-item {
  padding-left: 15px;
}
/* 内容框架的固定 */
.tow-block {
  position: relative;
  width: 100%;
}
/* 右边内容 */
.item .content-wrapper {
  padding: 12px 14px 12px 0;
  margin-left: 74px;
  height: 90px;
  max-height: 90px;
  position: relative;
}
.mb-line-b {
  background: url(../../assets/bottom.png) 0 bottom repeat-x;
}
.movie-title {
  margin-bottom: 7px;
  line-height: 24px;
  overflow: hidden;
}
/* 图片的大小 */
.avatar {
  width: 64px;
  height: 90px;
  position: relative;
  margin-top: 12px;
  float: left;
}
.flex {
  display: flex;
}
.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.item .detail {
  box-sizing: border-box;
  line-height: 1;
  overflow: hidden;
}
/* 人数的样式 */
.person {
  color: #faaf00;
  font-size: 15px;
  font-weight: 600;
}
.p-suffix {
  font-size: 13px;
  margin-left: -2px;
  display: inline-block;
  color: #666;
}
/* 各行之间的间距 */
.movie-content>.detail >div+div {
  margin-top: 6px;
  line-height: 15px;
}
/* 右边按钮的位置调整 */
.item .button-block {
  font-size: 12px;
  position: absolute;
  right: 14px;
  top: 0;
  bottom: 0;
  height: 27px;
  margin: auto;
}
/* 右边按钮的样式 */
.button-block .btn {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  box-sizing: border-box;
  background-color: #3c9fe6;
  color: #fff;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 12px;
  cursor: pointer;
}
</style>