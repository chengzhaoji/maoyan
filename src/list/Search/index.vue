<template>
  <div>
    <headerss />
    <!-- <div class="search-header">
      <div class="input-wrapper">
        <img class="search-icon" src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/search.png" alt="">
        <input class="search-input" type="text" placeholder="搜影院">
        <img class="del-input" style="display: none;" src="//s0.meituan.net/bs/?f=myfe/canary:/static/deploy/images/close.png" alt="">
      </div>
      <div class="cancel">取消</div>
    </div>-->
    <div style="margin-top:50px;">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        @search="onSearch"
      >
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    </div>
    <div class="result">
      <h3>电影/电视剧/综艺</h3>
      <div class="list">
        <div class="tow-list-item" v-for="(item,index) in listTitle" :key="index" >
          <div class="tow-block">
            <div class="expected-item">
              <div class="avatar img-bg">
                <img
                  :src="'https://images.weserv.nl/?url='+item.images.small"
                  onerror="this.style.visibility='hidden'"
                />
              </div>
            </div>
            <div class="mb-line-b">
              <div class="movie-content">
                <div class="detail">
                  <div class="flex movie-title">
                    <div class="line-ellipsis title">{{item.title}}</div>
                  </div>
                  <div class="wantsee line-ellipsis">
                    <span class="person">43613</span>
                    <span class="p-suffix">人想看</span>
                  </div>
                  <div class="actor line-ellipsis">主演:{{item.casts[0].name}}</div>
                  <div class="actor line-ellipsis">{{item.mainland_pubdate}}上映</div>
                </div>
                <div class="button-block">
                  <div class="btn pre">
                    <span class="fix">预售</span>
                  </div>
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
import headerss from "@/components/headerss/Headerss.vue";
export default {
  data() {
    return {
      value: "",
      lists: "",
      listImg: [],
      listTitle:"",
    };
  },
  components: {
    headerss
  },
  methods: {
    add() {
      var url =
        "http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=40";
      this.$jsonp(url).then(res => {
        // console.log(res)
        for (var i = 0; i < res.subjects.length; i++) {
          let imgUrl = res.subjects[i].images.small;
          let imgUrls = imgUrl.slice(7);
          this.listImg.push(imgUrls);
          // console.log(imgUrls);
        }
        // console.log('我是:',this.listImg);
        this.lists = res.subjects;
      });
    },
    onSearch() {
               var  arr = [];
               for (let i = 0; i < this.lists.length; i++) {
                   if (this.lists[i].title.search(this.value) != -1 && this.value!="") {
                       arr.push(this.lists[i])
                       this.listTitle=arr;
                       console.log(arr);
                   }
               }
               return arr;   
    },
  },
  
  created() {
    this.add();
  },
  watch:{
    value(){
      
    }
  }
};
</script>
<style scoped>
.result {
  margin-bottom: 10px;
  background-color: #fff;
}
.result h3 {
  font-size: 15px;
  color: #999;
  padding: 9px 15px;
}
.result .list {
  padding-left: 15px;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
}
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
  line-height: 35px;
  overflow: hidden;
  font-weight: 700;
  color: #333;
}
/* 图片的大小 */
.avatar {
  width: 64px;
  height: 90px;
  position: relative;
  margin-top: 12px;
  margin-right: 30px;
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
.detail {
  box-sizing: border-box;
  line-height: 1;
  overflow: hidden;
  height: 112px;
  font-size: 14px;
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
.movie-content > .detail > div + div {
  margin-top: 6px;
  line-height: 15px;
}
/* 右边按钮的位置调整 */
.button-block {
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
/* .list-wrap .item .button-block .btn {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  box-sizing: border-box;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 12px;
  cursor: pointer;
} */
/* 预售 */
.btn.pre {
  background-color: #3c9fe6 !important;
}
</style>