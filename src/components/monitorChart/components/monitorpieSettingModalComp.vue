<template>
    <div class="monitorpieSettingModalComp">
        <!-- heart rate Modal -->
        <div class="modal fade" id="heartRateSettingModal" tabindex="-1" aria-labelledby="heartRateSettingModal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Set up standard heart rate</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-body-content">
                            <div class="modal-body-content-sub">
                                <h5>Maximum</h5>
                                <select class="monitorpieSearchComp-select" id="timeSelect" name="timeSelect">
                                    <!-- <option v-for="timeItem in timeSelects" :key="timeItem.value" :value="timeItem.value">{{ timeItem.text }}</option> -->
                                </select>
                            </div>
                            <div class="modal-body-content-sub">
                                <h5>Minimum</h5>
                                <select class="monitorpieSearchComp-select" id="timeSelect" name="timeSelect">
                                    <!-- <option v-for="timeItem in timeSelects" :key="timeItem.value" :value="timeItem.value">{{ timeItem.text }}</option> -->
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Confirm</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
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
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Confirm</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
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
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary">Confirm</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
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
        }
    }
}
</script>
<style scoped>
.modal-dialog {
  margin-top: 0;
  margin-bottom: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.modal-body-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.modal-body-content-sub {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
/* .modal.fade .modal-dialog {
  transform: translate(0, -100%);
}

.modal.in .modal-dialog {
  transform: translate(0, 0);
} */
</style>