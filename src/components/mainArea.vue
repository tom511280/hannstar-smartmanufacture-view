<template>
    <div class="mainArea">
        <sidebar v-if="isShowSiderbar"></sidebar>
        <div>
            <topHeader v-if="isShowTopHeader"></topHeader>
            <currentView></currentView>
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


