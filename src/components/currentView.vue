<template>
    <div class="currentView">
        <transition mode="out-in"
                    enter-active-class = "animated fadeIn"
                    leave-active-class = "animated fadeOut"
                >
                    <router-view :key="Math.random()"></router-view>
        </transition>
    </div>
</template>
<style lang="scss" scoped>
.currentView {
    height: 100%;
    width: 100%;
}
</style>

