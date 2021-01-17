<template>
    <div class="attendanceDetailView container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="common-item">
                    <div class="common-item-inner">
                        我是內容
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="common-item">
                    <div class="common-item-inner">
                        我是內容
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="common-item">
                    <div class="common-item-inner">
                        我是內容
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="common-item">
                    <div class="common-item-inner">
                        我是內容
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="common-item">
                    <div class="common-item-inner">
                        我是內容
                    </div>
                </div>
            </div>
            <div class="col-8">
                <div class="common-item">
                    <div class="common-item-inner">
                        我是內容
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-8">
                <div class="common-item">
                    <div class="common-item-inner">
                        我是內容
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="common-item">
                    <div class="common-item-inner">
                        我是內容
                    </div>
                </div>
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
    width: 100%;
}
.row:nth-child(n+1):nth-child(-n+3){
    margin-bottom: 1.5%;
}
.row:nth-child(1) {
    height: 5%;
}
.row:nth-child(2) {
    height: 32%;
}
.row:nth-child(3) {
    height: 27.5%;
}
.row:nth-child(4) {
    height: 27.5%;
}
</style>