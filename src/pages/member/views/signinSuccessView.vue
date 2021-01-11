<template>
  <div class="loginView">
    <div class="loginBg">
        <div class="loginLeft">
          <img src="@/assets/img/login/img-login.png" srcset="@/assets/img/login/img-login@2x.png 2x,@/assets/img/login/img-login@3x.png 3x">
        </div>
        <div class="loginRright loginRright_C">
            <img class="icon_large_success" src="@/assets/img/login/icon-large-success.svg">
            <div class="loginTitle"><h2>Welcome</h2></div>
            <div class="loginDescribution description loginDescribution_C_F">You’ll receive a confirmation letter.</div>
            <div class="loginDescribution description loginDescribution_C_S">Check out your mailbox.</div>

            <!-- <div class="loginTitle fontbase">Welcome</div>
            <div class="loginDescribution loginDescribution_C_F fontbase">You’ll receive a confirmation letter.</div>
            <div class="loginDescribution loginDescribution_C_S fontbase">Check out your mailbox.</div> -->
            <button type="button" class="btn button-confirm login-btn-area login-btn-area_C" @click="exploreAround()">Explore Around</button>
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
        isShowTopHeader:false,
        isContainerBase:false,
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
.login-btn-area_C {
  margin-bottom: 2vh;
}
.loginDescribution_C_F {
  margin-bottom: 0.5vh;
}
.loginDescribution_C_S {
  margin-top: 0.5vh;
}
</style>