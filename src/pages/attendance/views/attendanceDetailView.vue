<template>
    <div class="attendanceDetailView container">
        <div class="row">
            <div class="col-12">
                <div class="common-item">11</div>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="common-item">11</div>
            </div>
            <div class="col-4">
                <div class="common-item">11</div>
            </div>
            <div class="col-4">
                <div class="common-item">11</div>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="common-item">11</div>
            </div>
            <div class="col-8">
                <div class="common-item">11</div>
            </div>
        </div>
        <div class="row">
            <div class="col-8">
                <div class="common-item">11</div>
            </div>
            <div class="col-4">
                <div class="common-item">11</div>
            </div>
        </div>
    </div>
</template>
<script>
// import attendancePersonInfoComp from '@/pages/attendance/components/attendancePersonInfoComp.vue'
export default {
    components: {
        // attendancePersonInfoComp,
    },  
}
</script>
<style scoped>
.attendanceDetailView {
    height: 100%;
}
.row:nth-child(n+1):nth-child(-n+3){
    margin-bottom: 1%;
}
.row:nth-child(1) {
    height: 5%;
}
.row:nth-child(2) {
    height: 33%;
}
.row:nth-child(3) {
    height: 28%;
}
.row:nth-child(4) {
    height: 28%;
}
</style>