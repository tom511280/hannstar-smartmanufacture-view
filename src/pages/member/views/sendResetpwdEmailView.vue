<template>
  <div class="sendResetpwdEmailView">
    <div class="loginBg">
        <div class="loginLeft">
          <img src="@/assets/img/img-login.png" srcset="@/assets/img/img-login@2x.png 2x,@/assets/img/img-login@3x.png 3x">
        </div>
        <div class="loginRright">
            <div class="loginTitle fontbase">Don’t Worry</div>
            <div class="loginDescribution fontbase">Let’s reset your password with several steps.</div>
            <div id="emailArea" class="inputbox-area-external" :class="[this.emailInputErrorClass]">
                <img class="common-icon" src="@/assets/img/icons-email.png" srcset="@/assets/img/icons-email@2x.png 2x,@/assets/img/icons-email@3x.png 3x">
                <div class="common-line"></div>
                <input type="email" class="common-inputBox" v-model="email"  name="email" placeholder="Email">
            </div>
            <div>
                <p class="errortext fontbase input-no-error-style">{{emailErrorMsg}}</p>
            </div>
            <div class="login-btn-area-external login-btn-area-external_C">
                <button class="login-btn btn" type="button" @click="sendMail()">
                    <p class="login-btn-text fontbase">Send</p>
                </button>
            </div>
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
  mounted(){
      //初始化時執行
      this.$store.dispatch({type:'commonModule/init'})
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
.login-btn-area-external_C{
  margin-top: 1.6vh;
}
</style>