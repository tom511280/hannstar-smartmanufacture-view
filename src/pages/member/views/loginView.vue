<template>
  <div class="loginView" @keyup.enter="login()">
    <div class="loginBg">
        <div class="loginLeft">
          <img src="@/assets/img/login/img-login.png" srcset="@/assets/img/login/img-login@2x.png 2x,@/assets/img/login/img-login@3x.png 3x">
        </div>
        <div class="loginRright">
            <div class="loginTitle"><h2>Welcome</h2></div>
            <div class="loginDescribution description">Log in to your account to continue</div>
            <div id="emailArea" class="inputbox-area-external" :class="[this.emailInputErrorClass]">
                <img class="common-icon" src="@/assets/img/login/icons-email.svg">
                <div class="common-line"></div>
                <input type="email" class="emailArea-inputBox common-inputBox" v-model="email"  name="email" placeholder="Email">
            </div>
            <div>
                <p class="errortext fontbase input-no-error-style">{{emailErrorMsg}}</p>
            </div>
            <passwordComp v-model="password" :passwordPlaceholder="passwordPlaceholder" :passwordInputErrorClass="passwordInputErrorClass"></passwordComp>
            <div>
                <p class="errortext input-no-error-style">{{passwordErrorMsg}}</p>
            </div>
            <div class="ckeckBox-area-external">
                <input class="common-ckeckBox squaredFour" type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
                <p class="ckeckBox-area-lefttext">Keep me logged in</p>
                <a class="ckeckBox-area-rightText" href="javascript:void(0)" @click="goToSendResetpwdEmailView()">Forgot password?</a>
            </div>
            <button type="button" class="btn button-confirm login-btn-area" @click="login()">Log in</button>
            <div class="signup-area-external">
                <p class="signup-leftText">Don’t have an account?</p>
                <a class="signup-rightText" href="javascript:void(0)" @click="goToSigninView()">Sign up?</a>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import passwordComp from '@/components/inputBox/components/passwordComp.vue'
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
      passwordPlaceholder:'Password',
      isShowPwd:false,
    }
  },
  components: {
        passwordComp
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
        this.$router.push({ path: '/overview/overviewView'});
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
  created(){
      //初始化時執行
      this.$store.dispatch({type:'memberModule/initPage'})
      let parameter = {
        isShowSiderbar:false,
        isShowTopHeader:false,
        isContainerBase:false,
      }
      this.$store.dispatch({type:'commonModule/init',parameter:parameter})
  },
  methods: {
    login(){
      let parameter = {
          email:this.email,
          password:this.password
      }
      this.$store.dispatch({type:'memberModule/login',parameter:parameter})
    },
    showPwd(isShow){
      this.isShowPwd = isShow;
      if(isShow == true) this.passwordInputType = "text";
      else this.passwordInputType = "password";
    },
    goToSigninView(){
        this.$router.push({ path: '/member/signinView'});
    },
    goToSendResetpwdEmailView(){
        this.$router.push({ path: '/member/sendResetpwdEmailView'});
    }
  },
  
}
</script>


<style scoped>
@import '../../../assets/css/memberCommon.css'; /*引入登入公共樣式*/
/* .emailArea-inputBox {
  width: 20vw;
} */
</style>