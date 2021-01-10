<template>
    <div class="previousStepComp">
        <img @click="goPreviousStep()" src="@/assets/img/previousstep/icon-arrow-left.svg" class="icon_arrow_left">
    </div>
</template>
<script>
export default {
    methods:    {
        goPreviousStep(){
            this.$parent.goPreviousStep();
        }
    }
}
</script>
<style scoped>
.previousStepComp {
    display: flex;
    flex-direction:row;
    align-items: center;
    height: 4.5vh;
    background-color: white;
    padding-left: 1vw;
}
.previousStepComp > img {
    height: 55%;
    cursor: pointer;
    /* width: 5%; */
}
</style>