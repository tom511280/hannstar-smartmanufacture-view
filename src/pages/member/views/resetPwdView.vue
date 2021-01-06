<template>
  <div class="sendResetpwdEmailView">
    <div class="loginBg">
        <div class="loginLeft">
          <img src="@/assets/img/login/img-login.png" srcset="@/assets/img/login/img-login@2x.png 2x,@/assets/img/login/img-login@3x.png 3x">
        </div>
        <div class="loginRright">
            <div class="loginTitle fontbase">Reset your password</div>
            <div class="loginDescribution fontbase">You can log in with your password soon</div>
            <div class="inputbox-area-external" :class="[this.passwordInputErrorClass]">
                <img class="common-icon" src="@/assets/img/login/icons-lock.svg">
                <div class="common-line"></div>
                <input :type="passwordInputType" class="common-inputBox" v-model="password" placeholder="Password">
                <div class="common-right-icon-external" @mousedown="showPwd('password', true)" @mouseup="showPwd('password', false)">
                    <img v-if="isShowPwd" class="common-icon" src="@/assets/img/login/icons-eye.svg">
                    <img v-if="!isShowPwd" class="common-icon" src="@/assets/img/login/icons-eye-hide.svg">
                </div>
            </div>
            <div>
                <p class="errortext fontbase input-no-error-style">{{passwordErrorMsg}}</p>
            </div>
            <div class="inputbox-area-external" :class="[this.confirmPasswordInputErrorClass]">
                <img class="common-icon" src="@/assets/img/login/icons-lock.svg">
                <div class="common-line"></div>
                <input :type="confirmPasswordInputType" class="common-inputBox" v-model="confirmPassword" placeholder="Confirm password">
                <div class="common-right-icon-external" @mousedown="showPwd('confirmPassword', true)" @mouseup="showPwd('confirmPassword', false)">
                    <img v-if="isShowConfirmPwd" class="common-icon" src="@/assets/img/login/icons-eye.svg">
                    <img v-if="!isShowConfirmPwd" class="common-icon" src="@/assets/img/login/icons-eye-hide.svg">
                </div>
            </div>
            <div>
                <p class="errortext fontbase input-no-error-style">{{confirmPasswordErrorMsg}}</p>
            </div>
            <div class="login-btn-area-external login-btn-area-external_C">
                <button class="login-btn btn" type="button" @click="resetPassword()">
                    <p class="login-btn-text fontbase">Reset password</p>
                </button>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password:'',
      passwordErrorMsg:'',
      passwordErrorMsgClass:'',
      passwordInputErrorClass:'',
      passwordInputType:'password',
      confirmPassword:'',
      confirmPasswordErrorMsg:'',
      confirmPasswordErrorMsgClass:'',
      confirmPasswordInputErrorClass:'',
      confirmPasswordInputType:'password',
      isShowPwd:false,
      isShowConfirmPwd:false,
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

      // 0 = success
      // 1 = password is empty
      // 2 = confirmPassword is empty
      // 3 = confirmPassword format is fail
      // 4 = password is not equal to confirm password

      //初始化
      this.passwordInputErrorClass = 'input-no-error-style';
      this.passwordErrorMsg = "";
      this.confirmPasswordInputErrorClass = 'input-no-error-style';
      this.confirmPasswordErrorMsg = "";

      if(newErrorCodeList.includes(0)){
         //送出成功
        alert("更改密碼成功")
      }
      //驗證是否為空
      if(newErrorCodeList.includes(1)){
        this.passwordInputErrorClass = 'input-error-style';
        this.passwordErrorMsg = "Please enter your password.";
      }
      if(newErrorCodeList.includes(2)){
        this.confirmPasswordInputErrorClass = "input-error-style";
        this.confirmPasswordErrorMsg = "Please enter your confirm password.";
      }
      //驗證password格式
      if(newErrorCodeList.includes(3)){
        this.passwordInputErrorClass = "input-error-style";
        this.passwordErrorMsg = "Please confirm your password format";
      }
      //驗證密碼是否一致
      if(newErrorCodeList.includes(4)){
        this.confirmPasswordInputErrorClass = "input-error-style";
        this.confirmPasswordErrorMsg = "Your confirm password  is not equal to password";
      }
    }
  },
  methods: {
    resetPassword(){
      let parameter = {
          isShowSiderbar:true,
          isShowTopHeader:true,
          password:this.password,
          confirmPassword:this.confirmPassword
      }
      this.$store.dispatch({type:'memberModule/resetPwd',parameter:parameter})
    },
    showPwd(type, isShow){
      if(type == 'password'){
        this.isShowPwd = isShow;
        if(isShow == true) this.passwordInputType = "text";
        else this.passwordInputType = "password";
      }
      if(type == 'confirmPassword'){
        this.isShowConfirmPwd = isShow;
        if(isShow == true) this.confirmPasswordInputType = "text";
        else this.confirmPasswordInputType = "password";
      }
    },
  },
  
}
</script>
<style scoped>
@import '../../../assets/css/memberCommon.css'; /*引入登入公共樣式*/
.login-btn-area-external_C{
  margin-top: 1.7vh;
}
</style>