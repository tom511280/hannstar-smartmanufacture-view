<template>
    <div class="datepickerComp">
        <div class="inputbox-area-external">
                <!-- <input type="text" class="common-inputBox"> -->
                <datepicker 
                :input-class="dateInputClass" 
                :calendar-class="calendarClass"
                :format="dateformat"
                >
                </datepicker>
                <img class="common-icon" src="@/assets/img/common/icon-arrow-left.svg">
            </div>
    </div>
</template>
<script>
import datepicker from 'vuejs-datepicker';

export default {
    data() {
        return {
            dateInputClass:"common-inputBox datepicker-inputBox",
            calendarClass:"calendar-area",
            dateformat:"yyyy-MM-dd",
        }
    },
    components: {
        datepicker
    }
}
</script>
<style>
.calendar-area {
  margin-top: 1vmin;
  margin-left: 0.1vmin;
  padding-top: 1.5vmin;
}
.inputbox-area-external {
  width: 10vw;
  margin-right: 1vw;
}
.datepicker-inputBox {
    width: 7.75vw;
    border-width: 0px !important;
    border-style: none !important;
    outline: none !important;
    cursor: text !important;
}

</style>
