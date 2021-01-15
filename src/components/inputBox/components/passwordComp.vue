<template>
    <div class="passwordComp">
        <div class="inputbox-area-external" :class="[this.passwordInputErrorClass]">
                <img class="common-icon" src="@/assets/img/login/icons-lock.svg">
                <div class="common-line"></div>
                <input :type="passwordInputType" class="passwordComp-inputBox common-inputBox" :value="value" @input="$emit('input', $event.target.value)" name="password" :placeholder="this.passwordPlaceholder">
                <div class="common-right-icon-external" @mousedown="showPwd(true)" @mouseup="showPwd(false)">
                    <img v-if="isShowPwd" class="common-icon" src="@/assets/img/login/icons-eye.svg">
                    <img v-if="!isShowPwd" class="common-icon" src="@/assets/img/login/icons-eye-hide.svg">
                </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isShowPwd: false,
            passwordInputType: "password",
        }
    },
    props: ["value","passwordInputErrorClass","passwordPlaceholder"],
    methods: {
        showPwd(isShow){
            this.isShowPwd = isShow;
            if(isShow == true) this.passwordInputType = "text";
            else this.passwordInputType = "password";
        },
    },
}
</script>
<style scoped>
.passwordComp {
    height: 100%;
    width: 100%;
}
.common-inputBox {
    width: 20vw;
}
.common-right-icon-external > .common-icon{
  width: 1vw;
  height: 1vw;
}
.common-right-icon-external {
  display: flex;
  flex: 1;
  text-align: right;
}
</style>