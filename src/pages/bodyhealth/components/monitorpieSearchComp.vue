<template>
    <div class="monitorpieSearchComp">
        <!-- <div class="monitorpieSearchComp-title">
            <h4>Heart Rate Monitor</h4>
            <div class="monitorpieSearchComp-title-img-external">
                <img src="@/assets/img/icon-setting.png" srcset="@/assets/img/icon-setting@2x.png 2x,@/assets/img/icon-setting@3x.png 3x" class="common-icon">
            </div>
        </div> -->
        <div class="monitorpieSearchComp_content">
            <select class="monitorpieSearchComp-select" id="timeSelect" name="timeSelect">
                <option v-for="timeItem in timeSelects" :key="timeItem.value" :value="timeItem.value">{{ timeItem.text }}</option>
            </select>
            <select class="monitorpieSearchComp-select" id="groupSelect" name="groupSelect">
                <option v-for="groupItem in groupSelects" :key="groupItem.value" :value="groupItem.value">{{ groupItem.text }}</option>
            </select>
            <!-- <button class="monitorpieSearchComp-btn" type="button">
                    <p class="monitorpieSearchComp-btn-text fontbase">Search</p>
            </button> -->
            <button type="button" class="btn button-confirm">Search</button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        timeSelects: {
            type: Array,
            required: true,
        },
        groupSelects: {
            type: Array,
            required: true,
        },
    },
}
</script>
<style lang="scss" scoped>
.monitorpieSearchComp {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
}
.monitorpieSearchComp_content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 6vh;
    width: 100%;
}
.monitorpieSearchComp-select {
    border-radius: 8px;
    height: 3.5vh;
    width: 15vw;
    margin-right: 1vw;
    // font-size: 15px;
}
// .monitorpieSearchComp-btn {
//   width: 100%;
//   height: 3.5vh;
//   border-radius: 6px;
//   background-color: #394867;
//   color: #ffffff;
//   cursor: pointer;
// }
</style>