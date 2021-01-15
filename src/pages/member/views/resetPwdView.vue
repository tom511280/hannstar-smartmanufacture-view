<template>
  <div class="sendResetpwdEmailView" @keyup.enter="resetPassword()">
    <div class="loginBg">
        <div class="loginLeft">
          <img src="@/assets/img/login/img-login.png" srcset="@/assets/img/login/img-login@2x.png 2x,@/assets/img/login/img-login@3x.png 3x">
        </div>
        <div class="loginRright">
            <div class="loginTitle"><h2>Reset your password</h2></div>
            <div class="loginDescribution description">You can log in with your password soon</div>
            <passwordComp v-model="password" :passwordInputErrorClass="passwordInputErrorClass" :passwordPlaceholder="passwordPlaceholder"></passwordComp>
            <div>
                <p class="errortext input-no-error-style">{{passwordErrorMsg}}</p>
            </div>
            <passwordComp v-model="confirmPassword" :passwordInputErrorClass="confirmPasswordInputErrorClass" :passwordPlaceholder="confirmPasswordPlaceholder"></passwordComp>
            <div>
                <p class="errortext input-no-error-style">{{confirmPasswordErrorMsg}}</p>
            </div>
            <button type="button" class="btn button-confirm login-btn-area login-btn-area_C" @click="resetPassword()">Reset password</button>
        </div>
    </div>
  </div>
</template>
<script>
import passwordComp from '@/components/inputBox/components/passwordComp.vue'
export default {
  data() {
    return {
      password:'',
      passwordErrorMsg:'',
      passwordErrorMsgClass:'',
      passwordInputErrorClass:'',
      passwordInputType:'password',
      passwordPlaceholder:'Password',
      confirmPassword:'',
      confirmPasswordErrorMsg:'',
      confirmPasswordErrorMsgClass:'',
      confirmPasswordInputErrorClass:'',
      confirmPasswordInputType:'password',
      confirmPasswordPlaceholder:'Confirm password',
      isShowPwd:false,
      isShowConfirmPwd:false,
    }
  },
  components: {
        passwordComp
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
  },
  
}
</script>
<style scoped>
@import '../../../assets/css/memberCommon.css'; /*引入登入公共樣式*/
.login-btn-area_C{
  margin-top: 1.7vh;
}
</style>