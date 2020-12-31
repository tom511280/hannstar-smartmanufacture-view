<template>
  <div class="signinView">
    <div class="loginBg">
        <div class="loginLeft">
          <img src="@/assets/img/img-login.png" srcset="@/assets/img/img-login@2x.png 2x,@/assets/img/img-login@3x.png 3x">
        </div>
        <div class="loginRright">
            <div class="loginTitle fontbase">Creat Your Account</div>
            <div class="loginDescribution fontbase">Log in to your account to continue</div>
            <div id="emailArea" class="inputbox-area-external" :class="[this.emailInputErrorClass]">
                <img class="common-icon" src="@/assets/img/icons-email.png" srcset="@/assets/img/icons-email@2x.png 2x,@/assets/img/icons-email@3x.png 3x">
                <div class="common-line"></div>
                <input type="email" class="common-inputBox" v-model="email"  name="email" placeholder="Email">
            </div>
            <div>
                <p class="errortext fontbase input-no-error-style">{{emailErrorMsg}}</p>
            </div>
            <div id="memberArea" class="inputbox-area-external" :class="[this.memberInputErrorClass]">
                <img class="common-icon" src="@/assets/img/icons-member.png" srcset="@/assets/img/icons-member@2x.png 2x,@/assets/img/icons-member@3x.png 3x">
                <div class="common-line"></div>
                <input type="text" class="common-inputBox" v-model="member"  name="member" placeholder="User Name">
            </div>
            <div>
                <p class="errortext fontbase input-no-error-style">{{memberErrorMsg}}</p>
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
            <div class="login-btn-area-external">
                <button class="login-btn btn" type="button" @click="signin()">
                    <p class="login-btn-text fontbase">Sign up</p>
                </button>
            </div>
            <div class="signup-area-external">
                <p class="signup-leftText fontbase">Already have an account?</p>
                <a @click="goToLoginView" class="signup-rightText fontbase" href="javascript:void(0)">log in?</a>
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
      member:'',
      memberErrorMsg:'',
      memberErrorMsgClass:'',
      memberInputErrorClass:'',
      password:'',
      passwordErrorMsg:'',
      passwordErrorMsgClass:'',
      passwordInputErrorClass:'',
      passwordInputType:'password',
    }
  },
  created(){
      //初始化時執行
      this.$store.dispatch({type:'memberModule/initPage'})
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
      this.passwordInputErrorClass = 'input-no-error-style';
      this.emailErrorMsg = "";
      this.passwordErrorMsg = "";

      //成功
      if(newErrorCodeList.includes(0)){
        this.$router.push({ path: '/signinSuccessView'});
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
          this.emailErrorMsg = "The email address is exist.";
      }  
      if(newErrorCodeList.includes(5)){
        this.passwordInputErrorClass = 'input-error-style';
        this.passwordErrorMsg = "Password must be 6 or more characters in length.";
      }
      if(newErrorCodeList.includes(6)){
        this.memberInputErrorClass = "input-error-style";
        this.memberErrorMsg = "Please enter your user member.";
      }
    }
  },
  methods: {
    signin(){
      let parameter = {
          isShowSiderbar:true,
          isShowTopHeader:true,
          email:this.email,
          password:this.password,
          member:this.member
      }
      this.$store.dispatch({type:'memberModule/signin',parameter:parameter})
    },
    showPwd(isShow){
      if(isShow == true) this.passwordInputType = "text";
      else this.passwordInputType = "password";
    },
    goToLoginView(){
        this.$router.push({ path: '/loginView'});
    }
  },
  
}
</script>
<style scoped>
@import '../../../assets/css/memberCommon.css'; 
</style>