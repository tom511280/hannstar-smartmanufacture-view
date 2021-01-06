<template>
    <div class="monitorpieSearchHeaderComp">
        <h4>{{this.title}}</h4>
        <div class="monitorpieSearchHeaderComp-img-external">
            <img class="setting-icon" src="@/assets/img/common/icon-setting.svg" data-bs-toggle="modal" :data-bs-target="settingModalId">
        </div>
    </div>
</template>
<style lang="scss" scoped>
.monitorpieSearchHeaderComp {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    
}
.monitorpieSearchHeaderComp > h4 {
    padding-top: 2vh;
}
.monitorpieSearchHeaderComp > h4 {
    width: 40%;
    height: 100%;
}
.monitorpieSearchHeaderComp > .monitorpieSearchHeaderComp-img-external {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    // align-items: center;
    width: 60%;
    height: 100%;
}
.monitorpieSearchHeaderComp > .monitorpieSearchHeaderComp-img-external > .setting-icon {
    padding: 6px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    background-color: #dddfe5;
    cursor: pointer;
    // width: 15%;
    width: 2.5vw;
    height: 5vh;
}
</style>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        settingModalId: {
            type: String,
            required: true,
        },
    },
}
</script>