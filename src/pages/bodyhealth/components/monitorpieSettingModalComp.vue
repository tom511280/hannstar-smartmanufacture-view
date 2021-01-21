<template>
    <div class="monitorpieSettingModalComp">
        <!-- heart rate Modal -->
        <div class="modal fade" id="heartRateSettingModal" tabindex="-1" aria-labelledby="heartRateSettingModal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Set up standard heart rate</h5>
                        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                    </div>
                    <div class="modal-body">
                        <div class="modal-body-content">
                            <div class="modal-body-content-sub">
                                <h5>Maximum</h5>
                                <select v-model="heartRateMaxSelected" class="monitorpieSettingModalComp-select">
                                    <option v-for="heartRateMaxSelect in heartRateMaxSelects" :key="heartRateMaxSelect.value" :value="heartRateMaxSelect.value">{{ heartRateMaxSelect.text }}</option>
                                </select>
                                <h5>bpm</h5>
                            </div>
                            <div class="modal-body-content-sub">
                                <h5>Minimum</h5>
                                <select v-model="heartRateMinSelected" class="monitorpieSettingModalComp-select">
                                    <option v-for="heartRateMinSelect in heartRateMinSelects" :key="heartRateMinSelect.value" :value="heartRateMinSelect.value">{{ heartRateMinSelect.text }}</option>
                                </select>
                                <h5>bpm</h5>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button @click="updateHeartRateSetting()" type="button" class="btn button-confirm">Search</button>
                        <button type="button" class="btn button-cancel" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- sleep Modal -->
        <div class="modal fade" id="sleepSettingModal" tabindex="-1" aria-labelledby="sleepSettingModal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Set up standard sleeptime</h5>
                        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                    </div>
                    <div class="modal-body">
                        <div class="modal-body-content">
                            <div class="modal-body-content-sub">
                                <h5>Maximum</h5>
                                <select v-model="sleepMaxSelected" class="monitorpieSettingModalComp-select">
                                    <option v-for="sleepMaxSelect in sleepMaxSelects" :key="sleepMaxSelect.value" :value="sleepMaxSelect.value">{{ sleepMaxSelect.text }}</option>
                                </select>
                                <h5>hrs</h5>
                            </div>
                            <div class="modal-body-content-sub">
                                <h5>Minimum</h5>
                                <select v-model="sleepMinSelected" class="monitorpieSettingModalComp-select">
                                    <option v-for="sleepMinSelect in sleepMinSelects" :key="sleepMinSelect.value" :value="sleepMinSelect.value">{{ sleepMinSelect.text }}</option>
                                </select>
                                <h5>hrs</h5>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button @click="updateSleepSetting()" type="button" class="btn button-confirm">Search</button>
                        <button type="button" class="btn button-cancel" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- sports Modal -->
        <div class="modal fade" id="sportsSettingModal" tabindex="-1" aria-labelledby="sportsSettingModal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Set up standard momentum</h5>
                        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                    </div>
                    <div class="modal-body sports-modal-body">
                        <div class="modal-body-content">
                            <div class="modal-body-content-sub">
                                <h5>Minimum</h5>
                                <select v-model="sportsMinSelected" class="monitorpieSettingModalComp-select">
                                    <option v-for="sportsMinSelect in sportsMinSelects" :key="sportsMinSelect.value" :value="sportsMinSelect.value">{{ sportsMinSelect.text }}</option>
                                </select>
                                <h5>steps</h5>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button @click="updateSportsSetting()" type="button" class="btn button-confirm">Search</button>
                        <button type="button" class="btn button-cancel" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            heartRateMaxSelects:[],
            heartRateMinSelects:[],
            sleepMaxSelects:[],
            sleepMinSelects:[],
            sportsMinSelects:[],
            heartRateMaxSelected:0,
            heartRateMinSelected:0,
            sleepMaxSelected:0,
            sleepMinSelected:0,
            sportsMinSelected:0,
        }
    },
    computed: {
        heartRateData(){
            return Object.assign({},this.$store.getters['bodyhealthModule/getState'].heartRate);
        },
        sleepData(){
            return Object.assign({},this.$store.getters['bodyhealthModule/getState'].sleep);
        },
        sportsData(){
            return Object.assign({},this.$store.getters['bodyhealthModule/getState'].sports);
        },
    },
    watch: {
        immediate: true,
        deep: true,
        heartRateData: function(heartRate) {
            this.heartRateMaxSelected = heartRate.setting.heartRateMaxValue;
            this.heartRateMinSelected = heartRate.setting.heartRateMinValue;
        },
        sleepData: function(sleep) {
            this.sleepMaxSelected = sleep.setting.sleepMaxValue;
            this.sleepMinSelected = sleep.setting.sleepMinValue;
        },
        sportsData: function(sports) {
            this.sportsMinSelected = sports.setting.sportsMinValue;
        }
    },
    methods: {
        setHeartRateModal(heartRateMaxSelects, heartRateMinSelects){
            this.heartRateMaxSelects = heartRateMaxSelects;
            this.heartRateMinSelects = heartRateMinSelects;
        },
        setSleepModal(sleepMaxSelects, sleepMinSelects){
            this.sleepMaxSelects = sleepMaxSelects;
            this.sleepMinSelects = sleepMinSelects;
        },
        setSportsModal(sportsMinSelects){
            this.sportsMinSelects = sportsMinSelects;
        },
        updateHeartRateSetting(){
            let parameter = {};
            parameter.heartRateMaxValue = this.heartRateMaxSelected;
            parameter.heartRateMinValue = this.heartRateMinSelected;
            this.$store.dispatch({type:'bodyhealthModule/updateHeartrateSetting', parameter:parameter})
        },
        updateSleepSetting(){
            let parameter = {};
            parameter.sleepMaxValue = this.sleepMaxSelected;
            parameter.sleepMaxValue = this.sleepMinSelected;
            this.$store.dispatch({type:'bodyhealthModule/updateSleepSetting', parameter:parameter})
        },
        updateSportsSetting(){
            let parameter = {};
            parameter.sportsMinValue = this.sportsMinSelected;
            this.$store.dispatch({type:'bodyhealthModule/updateSportsSetting', parameter:parameter})
        },
    }
}
</script>
<style scoped>
.modal-content {
  height: 25vh;
  width: 20vw;
}
.modal-body-content-sub > h5 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 30%;
    height: 100%;
    padding-left: 0vw;
}
.modal-body-content-sub > h5:last-child {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 100%;
}
.modal-body-content-sub > select {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 45%;
    height: 100%;
}

</style>