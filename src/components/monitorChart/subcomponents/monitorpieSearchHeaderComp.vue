<template>
    <div class="monitorpieSearchHeaderComp">
        <h4>Heart Rate Monitor</h4>
        <div class="monitorpieSearchHeaderComp-img-external">
            <img class="setting-icon" src="@/assets/img/icon-setting.png" srcset="@/assets/img/icon-setting@2x.png 2x,@/assets/img/icon-setting@3x.png 3x">
        </div>
    </div>
</template>
<style lang="scss" scoped>
h4 {
    padding-top: 2vh;
}
.monitorpieSearchHeaderComp {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
}
.monitorpieSearchHeaderComp > .monitorpieSearchHeaderComp-img-external{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
}
.setting-icon {
    padding: 6px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    background-color: #dddfe5;
    cursor: pointer;
}
</style>