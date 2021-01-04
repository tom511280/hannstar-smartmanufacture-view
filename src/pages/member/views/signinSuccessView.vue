<template>
  <div class="loginView">
    <div class="loginBg">
        <div class="loginLeft">
          <img src="@/assets/img/img-login.png" srcset="@/assets/img/img-login@2x.png 2x,@/assets/img/img-login@3x.png 3x">
        </div>
        <div class="loginRright loginRright_C">
            <img class="icon_large_success" src="@/assets/img/icon-large-success.png" srcset="@/assets/img/icon-large-success@2x.png 2x,@/assets/img/icon-large-success@3x.png 3x">
            <div class="loginTitle fontbase">Welcome</div>
            <div class="loginDescribution loginDescribution_C_F fontbase">You’ll receive a confirmation letter.</div>
            <div class="loginDescribution loginDescribution_C_S fontbase">Check out your mailbox.</div>
            <div class="login-btn-area-external login-btn-area-external_C">
                <button class="login-btn btn" type="button" @click="exploreAround()">
                    <p class="login-btn-text fontbase">Explore Around</p>
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
  created(){
      //初始化時執行
      let parameter = {
        isShowSiderbar:false,
        isShowTopHeader:false
      }
      this.$store.dispatch({type:'commonModule/init',parameter:parameter})
  },
  methods: {
    exploreAround(){
      this.$router.push({ path: '/overviewView'});
    }
  },
}
</script>
<style scoped>
@import '../../../assets/css/memberCommon.css'; /*引入登入公共樣式*/
.loginRright_C {
  margin-top: 0vh;
  
}
.icon_large_success {
  display: flex;
  align-items:center;
  margin-top: 3vh;
  margin-bottom: 2vh;
}
.login-btn-area-external_C {
  margin-bottom: 2vh;
}
.loginDescribution_C_F {
  margin-bottom: 0vh;
}
.loginDescribution_C_S {
  margin-top: 0vh;
}
</style>