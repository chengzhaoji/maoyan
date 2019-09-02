<template>
  <div>
    <Header title="演出模板" />
    <div class="container">
      <div class="thear-content">
        <ul>
          <li class="list-item" v-for="(items,index) in thear" :key="index">
            <div style="position:relative" class="thear-flex">
              <div class="contain">
                <p class="theae-ps">预售</p>
              </div>
              <div>
                <img :src="items.image" class="thear-img" />
              </div>
              <div style="padding-left:30px" class="thear-time">
                <p class="thear-title">{{items.title}}</p>
                <p>
                  时间：
                  <!-- -->
                  {{items.time}}
                </p>
                <p>
                  场馆：
                  <!-- -->
                  {{items.site}}
                </p>
                <p style="color:#f00;font-size:16px">
                  {{items.price}}
                  <!-- -->
                  元
                </p>
              </div>
              <div class="thear-btn">购票</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="rowlist rowlist footer">
        <p
          class="rowlist rowlist"
        >商务合作邮箱：v@maoyan.com <br>
        客服电话：10105335 <br>违法和不良信息举报电话：4006018900</p><br>
        <p
          class="rowlist rowlist"
        ><br>用户投诉邮箱：tousujubao@meituan.com <br>舞弊线索举报邮箱：wubijubao@maoyan.com</p><br>
        <p class="rowlist rowlist">
         <br><a
            href="/permissionTwo"
            target="_blank"
            class="rowlist rowlist"
          >营业性演出许可证 京演（机构）（2019）4094号</a><br>
        </p><br>
        <br><p class="rowlist rowlist">
          <a
            href="/permissionThree"
            target="_blank"
            class="rowlist rowlist"
          >广播电视节目制作经营许可证（京）字第08478号</a> |<br>
          <a
            href="/permissionFour"
            target="_blank"
            class="rowlist rowlist"
          >网络文化经营许可证 京网文（2019）3837-369号</a>
        </p><br>
        <p class="rowlist rowlist">
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010102003232"
            target="_blank"
            class="rowlist rowlist"
          >京公网安备 11010102003232号</a> |<br>
          <a href="/announce" target="_blank" class="rowlist rowlist">电子公告服务规则</a>
        </p><br>
        <p class="rowlist rowlist">北京猫眼文化传媒有限公司</p>
        <p class="rowlist rowlist">©2016 猫眼娱乐 maoyan.com</p>
        <div class="rowlist rowlist logo">
          <a
            href="http://sq.ccm.gov.cn/ccnt/sczr/service/business/emark/toDetail/350CF8BCA8416C4FE0530140A8C0957E"
            target="_blank"
            class="rowlist rowlist"
          >
            <img
              src="@/assets/e54374ccf134d1f7b2c5b075a74fca525326.png"
              class="rowlist rowlist"
            />
          </a>
          <a
            href="https://img.meituan.net/kylisean/5672d181ff6bf3258e1e2275573f11952211373.png"
            target="_blank"
            class="rowlist rowlist"
          >
            <img
              src="@/assets/805f605d5cf1b1a02a4e3a5e29df003b8376.png"
              class="rowlist rowlist"
            />
          </a>
        </div>
      </div>
      <div style="margin-top:41px"></div>
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
      thear: [
        {
          image: require("@/assets/18027371ac7bd560435488a1631ddecc2010189.jpg"),
          title: "2019超级企鹅联盟-红蓝大战",
          time: "2019.9.21 19:30 周六",
          site: "东方体育中心",
          price: "280-2280"
        },
        {
          image: require("@/assets/6c34f839a4cdc44d959c169cbaf48d592013892.png"),
          title: "LIVE NATION 倾力呈现 The Chainsmokers 2019上海演唱会",
          time: "2019.9.10 20:00 周二",
          site: "梅赛德斯-奔驰文化中心",
          price: "480-1580"
        },
        {
          image: require("@/assets/6625f9d7023fa4d3171ac7fd71d453ef517665.jpg"),
          title: "隔壁老樊《我曾》2019巡回演唱会-上海站",
          time: "2019.9.21 19:30 周六",
          site: "浅水湾文化艺术中心",
          price: "280"
        },
        {image:require("@/assets/8c2bf9ff7c4c57da3b5cb7defcddc744108390.jpg"),title:"2019费玉清告别巡演内地最终场-上海站",time:"2019.10.26 / 10.27",site:"东方体育中心",price:"280-1580"},
        {image:require("@/assets/498e106c0ce76cc5feaa4e490071f978700661.png"),title:"汪苏泷2019“银河漫游”巡回演唱会上海站-生日特别场",time:"2019.9.14 19:30 周六",site:"国家会展中心（上海）虹馆EH",price:"380-1280"}
        // {image:require("@/assets/"),title:"",time:"",site:"",price:""},
      ]
    };
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
  margin: 50px 5px 5px 5px;
}
*:before,
*:after {
  box-sizing: inherit;
}
.thear-content {
  margin: 20px auto;
  border: 1px solid #e8e8e8;
  background: #fff;
  padding: 5px 10px;
}
ul {
  list-style: none;
}
ul > .list-item :first-child {
  padding-top: 0;
}
.list-item {
  border-bottom: 1px solid #e8e8e8;
}
/* 弹性布局 */
.thear-flex {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  justify-content: flex-start;
}
/* 图标上 */
.contain {
  position: absolute;
  top: 10px;
  left: 5px;
  background: #5bbfff;
  width: 25px;
  height: 23px;
  border-radius: 2px;
  text-align: center;
  font-size: 14px;
  line-height: 25px;
  color: #fff;
}
/* 尖角图标 下 */
.contain :after {
  content: "";
  display: block;
  border-top: 4px solid #5bbfff;
  border-right: 16px solid #5bbfff;
  border-left: 9px solid #5bbfff;
  border-bottom: 8px solid transparent;
  position: absolute;
  top: 20px;
  left: 0;
}
/* 首行文字标题的大小样式 */
.thear-title {
  font-size: 16px;
  color: #222;
}
/* 图标上文字的位置大小 */
.theae-ps {
  font-size: 12px;
  display: inline-block;
  margin-top: 0px;
}
/* 图片的大小 */
.thear-img {
  width: 75px;
  height: 100px;
}
/* 右边内容部分 */
.thear-time {
  font-size: 13px;
  color: #666;
  text-align: left;
}
/* 购票按钮 */
.thear-btn {
  background: #ef4238;
  border-radius: 4px;
  width: 45px;
  height: 25px;
  line-height: 30px;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
  position: absolute;
  right: 0;
}
ul>li{padding-bottom: 5px}
/* 尾部部分 */
footer.rowlist {
    width: 100%;
    background: #3e3e3e;
    padding: 56px 0;
}
.footer.rowlist p.rowlist {
    text-align: center;
    font-size: 14px;
    color: #a8a8a8;
    line-height: 22px;
    height: 22px;
    margin: 0 auto;
}
/* 两个跳转网页样式 */
.footer.rowlist .logo.rowlist {
    margin-top: 20px;
    display: flex;
    margin-top: 20px;
    justify-content: center;
}
 .logo.rowlist a.rowlist {
    padding-right: 12px;
}
 p.rowlist a.rowlist {
    text-decoration: none;
    color: inherit;
}
 .logo.rowlist a.rowlist img{
    width:106px;
    height: 40px;
 }
</style>
