<template>
  <div>
    <Header title="我的模板" />
    <div style="margin-top:48px;"></div>
    <!-- <h1>电影</h1> -->
    <mt-navbar v-model="selected">
      <mt-tab-item id="p2">美团账号登录</mt-tab-item>
      <mt-tab-item id="p3">手机验证登录</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="p2">
        <!-- <mt-cell> -->
          <div class="app-login">
            <!--h1>Login.vue</h1-->
            <!--1：用户名输入框-->
            <mt-field :placeholder="unameholder" v-model="uname" class="login-input"></mt-field>
            <!--2: 密码输入框-->
            <mt-field :placeholder="upwdholder" v-model="upwd" type="password" class="login-input"></mt-field>
            <!--3: 登陆按钮-->
            <div style="padding:5px 10px 0px 0">
              <mt-button size="large" @click="login" type="danger">登录</mt-button>
            </div>
            <div class="subline">
              <ul class="subline-ul">
                <li>
                  <a href="//i.meituan.com/account/signup">立即注册</a>
                </li>
                <li class="pull-right">
                  <a href="https://passport.meituan.com/useraccount/retrievepassword">找回密码</a>
                </li>
              </ul>
            </div>
            <footer>
              <div class="copyright">
                <span class="copyright">
                  © 猫眼电影 客服电话：
                  <a href="tel:4006705335">400-670-5335</a>
                </span>
              </div>
            </footer>
          </div>
        <!-- </mt-cell> -->
      </mt-tab-container-item>
      <mt-tab-container-item id="p3">
         <div class="phone"  style="margin-top:5px">
            <div class="phone-cll">
              <input
                type="tel"
                name="mobile"
                class="input-weak"
                placeholder="请输入手机号"
                maxlength="11"
              />
              <button class="phone-btn" type="button" disabled="disabled">获取验证码</button>
              </div>
            <div class="phone-tel">
              <input
                class="input-tel"
                name="code"
                type="tel"
                pattern="[0-9]+"
                placeholder="请输入短信验证码"
                disabled="true"
              />
            </div>
            <!--3: 登陆按钮-->
            <div style="padding:10px 10px 10px 15px">
              <button type="" class="btn" disabled="disabled">登录</button>
            </div>
            <div class="subline">
              <ul class="subline-ul">
                <li>
                  <a href="//i.meituan.com/account/signup">立即注册</a>
                </li>
                <li class="pull-right">
                  <a href="https://passport.meituan.com/useraccount/retrievepassword">找回密码</a>
                </li>
              </ul>
            </div>
            <footer>
              <div class="copyright">
                <span class="copyright">
                  © 猫眼电影 客服电话：
                  <a href="tel:4006705335">400-670-5335</a>
                </span>
              </div>
            </footer>
          </div>
      </mt-tab-container-item>
    </mt-tab-container>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";
import Footer from "@/components/footer/Footer.vue";
export default {
  data() {
    return {
      selected: "p2", //默认选中
      unameholder: "账户名/手机号/Email", //用户名提示
      upwdholder: "请输入您的密码", //密码提示
      uname: "", //用户输入用户名
      upwd: "" //用户输入密码
    };
  },
  components: {
    Header,
    Footer
  },
  methods: {
    login() {
      //功能:完成用户登录操作 16:30
      //*1:获取用户输入用户名
      var u = this.uname;
      //*2:获取用户输入密码
      var p = this.upwd;
      //console.log(u+"_"+p);
      //*3:创建正则表达式验证用户名和密码
      //  3~12 字母数字
      var reg = /^[a-z0-9]{3,12}$/i;
      //*4:用户验证失败 提示短消息
      if (!reg.test(u)) {
        this.$toast("用户名格式不正确");
        return; //失败停止执行
      }
      //*5:密码验证失败 提示短消息
      if (!reg.test(p)) {
        this.$toast("密码格式不正确");
        return; //失败停止执行
      }
    }
  }
};
</script>
<style scoped>
.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid #26a2ff;
  color: #26a2ff;
  margin-bottom: 0px;
}
/* 边框样式 */
.mint-cell:last-child {
  background-image: linear-gradient(
    0deg,
    #d9d9d9,
    #d9d9d9 50%,
    transparent 50%
  );
  background-size: 100% 1px;
  background-repeat: no-repeat;
  background-position: unset;
}
/* 选中时的状态 */
.mint-navbar .is-selected[data-v-48715865] {
  border-bottom: 3px solid #ffc300;
  color: #000;
  margin-bottom: 0px;
}
.mint-navbar {
    background-color: #fff;
    display: flex;
    text-align: center;
    border-bottom: 1px solid #ddd;
}
.app-login {
  margin: 0;
  border-top: 0;
  width: 100%;
}
/* 下面的虚线 */
.login-input {
  border-bottom: 1px solid #ddd;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
a {
  text-decoration: none;
  outline: 0;
}
.subline {
  display: block;
  margin: 0.28rem 0.2rem;
}
.subline-ul {
  padding: 5px;
  margin-right: 10px;
}
.subline li {
  display: inline-block;
}
.subline li a {
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #fe8c00;
}
.pull-right {
  float: right !important;
}
/* 尾部 */
.copyright {
  font-size: 15px;
  color: #000;
  text-align: center;
}
.copyright span a {
  color: #f00;
  text-decoration: none;
}
/* 手机验证部分 */
.phone{
  
    margin: 0;
    margin-bottom: -1px;
    border: 0;
}

/* 手机框 */
.input-weak {
   width: 65%;
   margin-right: 5px;
   margin-left:15px
}
/* 验证码按钮 */
.phone-btn{
   border: 0;
    background-color: #ddd;
    position: relative;
    border-radius: 10px;
    height:30px;
    color: #999;
}
.phone-tel{
  text-align: center;
  border-bottom:1px solid #ddd;
  margin-bottom: 3px;
}
.phone-cll{
   border-bottom:1px solid #ddd;
  margin-bottom: 5px;
}
.phone div input{
  height: 30px;
  padding: 5px;
  border: 0;
  margin-bottom: 5px;
}
.input-tel{
  width: 90%;
  border-radius: 6px;
}
/* 登录禁用 */
.btn:disabled {
    background-color: #dcdcdc;
    color: #999;
    border: 0;
}
.btn{
       margin: 0;
    text-align: center;
    height: 30px;
    padding: 5px;
    border-radius: 3px;
    font-size: 16px;
    vertical-align: middle;
    line-height: 1;
    box-sizing: border-box;
    cursor: pointer;
    width: 100%;
}
</style>
