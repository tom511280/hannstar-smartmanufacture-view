<template>
    <div class="mainArea">
        <sidebarComp v-if="isShowSiderbar"></sidebarComp>
        <div>
            <topHeaderComp v-if="isShowTopHeader"></topHeaderComp>
            <div :class="{ 
              'currentView-contain-topHeader': isShowSiderbar, 
              'currentView-nocontain-topHeader': !isShowSiderbar,
              'currentView-contaner-base' : isContainerBase }">
              <currentView></currentView>
            </div>
        </div>
    </div>
</template>
<script>
import sidebarComp from '@/components/sidebar/components/sidebarComp.vue'
import topHeaderComp from '@/components/topHeaderComp.vue'
import currentView from '@/components/currentView.vue'

export default {
    components: {
        sidebarComp,
        topHeaderComp,
        currentView,
    },
    computed: {
      isContainerBase(){
        return this.$store.getters['commonModule/getState'].isContainerBase;
      },
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
.currentView-contaner-base{
  padding-top: 2vh;
  padding-bottom: 2vh;
  padding-left: 1vw;
  padding-right: 1vw;
}
.currentView-contain-topHeader{
    margin-top: 5.5vh;
    height: 94.5vh;
    margin-left: 16vw;
    background-color: #f1f2f3;;
} 
.currentView-nocontain-topHeader {
    margin-top: 0px;
    height: 100vh;
}
</style>


