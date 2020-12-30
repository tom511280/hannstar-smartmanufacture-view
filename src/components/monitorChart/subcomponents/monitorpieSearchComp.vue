<template>
    <div class="monitorpieSearchComp">
        <!-- <div class="monitorpieSearchComp-title">
            <h4>Heart Rate Monitor</h4>
            <div class="monitorpieSearchComp-title-img-external">
                <img src="@/assets/img/icon-setting.png" srcset="@/assets/img/icon-setting@2x.png 2x,@/assets/img/icon-setting@3x.png 3x" class="common-icon">
            </div>
        </div> -->
        <div class="monitorpieSearchComp_content">
            <select class="monitorpieSearchComp-select" id="cars" name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
            </select>
            <select class="monitorpieSearchComp-select" id="cars" name="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="fiat">Fiat</option>
                <option value="audi">Audi</option>
            </select>
            <button class="monitorpieSearchComp-btn" type="button" @click="login()">
                    <p class="monitorpieSearchComp-btn-text fontbase">Search</p>
            </button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.monitorpieSearchComp {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
}
// .monitorpieSearchComp > .monitorpieSearchComp-title {
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-start;
//     align-items: center;
//     width: 100%;
// }
// .monitorpieSearchComp > .monitorpieSearchComp-title > .monitorpieSearchComp-title-img-external{
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-end;
//     align-items: center;
//     width: 100%;
// }
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
    background-color: #ffffff;
    height: 3.5vh;
    width: 55vw;
    margin-right: 1vw;
    font-size: 15px;
}
.monitorpieSearchComp-btn {
  width: 100%;
  height: 3.5vh;
  border-radius: 6px;
  background-color: #394867;
  cursor: pointer;
}
.monitorpieSearchComp-btn > .monitorpieSearchComp-btn-text {
  font-family: SFProText;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin-top: 0px;
  margin-bottom: 0px;
}

// .monitorpieSearchComp-btn {
//     padding: 0.8vh 1vw;
//     border-radius: 6px;
//     background-color: #394867;
// }


</style>