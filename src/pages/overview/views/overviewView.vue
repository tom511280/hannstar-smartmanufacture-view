<template>
    <div class="overview">
        <!-- i am overview -->
    </div>
</template>
<script>
export default {
    mounted(){
      //初始化時執行
      let parameter = {
            isShowSiderbar:true,
            isShowTopHeader:true
      }
      this.$store.dispatch({type:'commonModule/init',parameter:parameter})
  },
}
</script>
<style scoped>
.overview {
    background-color: #dddfe5;
    height: 94.5vh;
    /* widows: 100vh; */
}
</style>