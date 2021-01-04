<template>
    <div class="mainArea">
        <sidebar v-if="isShowSiderbar"></sidebar>
        <div>
            <topHeader v-if="isShowTopHeader"></topHeader>
            <div :class="{ 'currentView-contain-topHeader': isShowSiderbar, 'currentView-nocontain-topHeader': !isShowSiderbar }">
              <currentView></currentView>
            </div>
        </div>
    </div>
</template>
<script>
import sidebar from '@/components/sidebar.vue'
import topHeader from '@/components/topHeader.vue'
import currentView from '@/components/currentView.vue'

export default {
    components: {
        sidebar,
        topHeader,
        currentView,
    },
    computed: {
      isShowSiderbar(){
        return this.$store.getters['commonModule/getState'].isShowSiderbar;
      },
      isShowTopHeader(){
        return this.$store.getters['commonModule/getState'].isShowTopHeader;
      },
    },
}
</script>
<style lang="scss" scoped>
.mainArea {
  overflow: hidden;
}
.currentView-contain-topHeader{
    margin-top: 5.5vh;
    height: 94.5vh;
    margin-left: 16vw;
    padding-top: 2vh;
    padding-bottom: 2vh;
    padding-left: 1vw;
    padding-right: 1vw;
    background-color: #f1f2f3;
} 
.currentView-nocontain-topHeader {
    margin-top: 0px;
    height: 100vh;
}
</style>


