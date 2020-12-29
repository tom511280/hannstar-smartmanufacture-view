<template>
  <div class="loginView">
    <div class="loginBg">
        <div class="loginLeft">
          <img src="@/assets/img/img-login.png" srcset="@/assets/img/img-login@2x.png 2x,@/assets/img/img-login@3x.png 3x">
        </div>
        <div class="loginRright">
            <div class="loginTitle fontbase">Welcome</div>
            <div class="loginDescribution fontbase">Log in to your account to continue</div>
            <div id="emailArea" class="inputbox-area-external" :class="[this.emailInputErrorClass]">
                <img class="common-icon" src="@/assets/img/icons-email.png" srcset="@/assets/img/icons-email@2x.png 2x,@/assets/img/icons-email@3x.png 3x">
                <div class="common-line"></div>
                <input type="email" class="common-inputBox" v-model="email"  name="email" placeholder="Email">
            </div>
            <div>
                <p class="errortext fontbase input-no-error-style">{{emailErrorMsg}}</p>
            </div>
            <div id="passwordArea" class="inputbox-area-external" :class="[this.passwordInputErrorClass]">
                <img class="common-icon" src="@/assets/img/icons-lock.png" srcset="@/assets/img/icons-lock@2x.png 2x,img/icons-lock@3x.png 3x">
                <div class="common-line"></div>
                <input :type="passwordInputType" class="common-inputBox" v-model="password" name="password" placeholder="Password">
                <div class="common-right-icon-external" @mousedown="showPwd(true)" @mouseup="showPwd(false)">
                    <img class="common-icon" src="@/assets/img/icon-eye-hide.png" srcset="@/assets/img/icon-eye-hide@2x.png 2x,img/icon-eye-hide@3x.png 3x">
                </div>
            </div>
            <div>
                <p class="errortext fontbase input-no-error-style">{{passwordErrorMsg}}</p>
            </div>
            <div class="ckeckBox-area-external">
                <input class="common-ckeckBox squaredFour" type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                <p class="ckeckBox-area-lefttext fontbase">Keep me logged in</p>
                <a class="ckeckBox-area-rightText fontbase" href="javascript:void(0)" @click="goToSendResetpwdEmailView()">Forgot password?</a>
            </div>
            <div class="login-btn-area-external">
                <button class="login-btn btn" type="button" @click="login()">
                    <p class="login-btn-text fontbase">Log in</p>
                </button>
            </div>
            <div class="signup-area-external">
                <p class="signup-leftText fontbase">Don’t have an account?</p>
                <a class="signup-rightText fontbase" href="javascript:void(0)" @click="goToSigninView()">Sign up?</a>
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
      password:'',
      passwordErrorMsg:'',
      passwordErrorMsgClass:'',
      passwordInputErrorClass:'',
      passwordInputType:'password',
    }
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
      this.passwordInputErrorClass = 'input-no-error-style';
      this.emailErrorMsg = "";
      this.passwordErrorMsg = "";

      //成功
      if(newErrorCodeList.includes(0)){
        this.$router.push({ path: '/overviewView'});
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
      
      if(newErrorCodeList.includes(3)){
        this.passwordInputErrorClass = 'input-error-style';
        this.passwordErrorMsg = "Please enter your password.";
      }
      //驗證帳號密碼
      if(newErrorCodeList.includes(4)){
          this.emailInputErrorClass = "input-error-style";
          this.emailErrorMsg = "The email address does not exist.";
      }  
      if(newErrorCodeList.includes(5)){
        this.passwordInputErrorClass = 'input-error-style';
        this.passwordErrorMsg = "The password is valid.";
      }
    }
  },
  mounted(){
      //初始化時執行
      this.$store.dispatch({type:'memberModule/initPage'})
      this.$store.dispatch({type:'commonModule/init'})
  },
  methods: {
    login(){
      let parameter = {
          isShowSiderbar:true,
          isShowTopHeader:true,
          email:this.email,
          password:this.password
      }
      this.$store.dispatch({type:'memberModule/login',parameter:parameter})
    },
    showPwd(isShow){
      if(isShow == true) this.passwordInputType = "text";
      else this.passwordInputType = "password";
    },
    goToSigninView(){
        this.$router.push({ path: '/signinView'});
    },
    goToSendResetpwdEmailView(){
        this.$router.push({ path: '/sendResetpwdEmailView'});
    }
  },
  
}
</script>


<style scoped>
@import '../../../assets/css/memberCommon.css'; /*引入登入公共樣式*/
</style>