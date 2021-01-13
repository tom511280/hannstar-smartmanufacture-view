<template>
  <div class="sendResetpwdEmailView" @keyup.enter="sendMail()">
    <div class="loginBg">
        <div class="loginLeft">
          <img src="@/assets/img/login/img-login.png" srcset="@/assets/img/login/img-login@2x.png 2x,@/assets/img/login/img-login@3x.png 3x">
        </div>
        <div class="loginRright">
            <div class="loginTitle"><h2>Don’t Worry</h2></div>
            <div class="loginDescribution description">Let’s reset your password with several steps.</div>
            <div id="emailArea" class="inputbox-area-external" :class="[this.emailInputErrorClass]">
                <img class="common-icon" src="@/assets/img/login/icons-email.svg">
                <div class="common-line"></div>
                <input type="email" class="common-inputBox" v-model="email"  name="email" placeholder="Email">
            </div>
            <div>
                <p class="errortext fontbase input-no-error-style">{{emailErrorMsg}}</p>
            </div>
            <button type="button" class="btn button-confirm login-btn-area login-btn-area_C" @click="sendMail()">Send</button>
            <div class="signup-area-external">
                <p class="signup-leftText fontbase">If you didn’t receive the mail</p>
                <a @click="sendMailAgain()" class="signup-rightText fontbase" href="javascript:void(0)">Sent it again</a>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email:'',
      emailErrorMsg:'',
      emailErrorMsgClass:'',
      emailInputErrorClass:'',
    }
  },
  created(){
      //初始化時執行
      let parameter = {
        isShowSiderbar:false,
        isShowTopHeader:false,
        isContainerBase:false,
      }
      this.$store.dispatch({type:'commonModule/init',parameter:parameter})
  },
  computed: {
    //取得留言資料
		errorCodeList(){
      return this.$store.getters['memberModule/getState'].errorCodeList;
    },
  },
  watch: {
    errorCodeList (newErrorCodeList, oldErrorCodeList) {
      console.log(newErrorCodeList)
      console.log(oldErrorCodeList)

      //初始化
      this.emailInputErrorClass = 'input-no-error-style';
      this.emailErrorMsg = "";

      if(newErrorCodeList.includes(0)){
        alert("送出mail!!")
      }
      //驗證是否為空
      if(newErrorCodeList.includes(1)){
        this.emailInputErrorClass = "input-error-style";
        this.emailErrorMsg = "Please enter your email address.";
      }
      //驗證email格式
      if(newErrorCodeList.includes(2)){
        this.emailInputErrorClass = "input-error-style";
        this.emailErrorMsg = "Please confirm your email address";
      }
      //驗證信箱是否存在
      if(newErrorCodeList.includes(3)){
        this.emailInputErrorClass = "input-error-style";
        this.emailErrorMsg = "The email address is not exist.";
      }
    }
  },
  methods: {
    sendMail(){
      let parameter = {
          isShowSiderbar:true,
          isShowTopHeader:true,
          email:this.email,
      }
      this.$store.dispatch({type:'memberModule/sendResetpwdemail',parameter:parameter})
    },
    sendMailAgain(){
        alert("在送出一次maill了!!")
    }
  },
  
}
</script>
<style scoped>
@import '../../../assets/css/memberCommon.css'; /*引入登入公共樣式*/
.login-btn-area_C{
  margin-top: 1.6vh;
}
</style>