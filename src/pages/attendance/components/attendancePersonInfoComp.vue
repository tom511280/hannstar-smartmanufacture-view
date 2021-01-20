<template>
    <div class="attendancePersonInfoComp">
        <div class="attendancePersonInfoComp-item first-item">
            <h3>Deborah Clarke</h3>
        </div>
        <div class="common-line"></div>
        <div class="attendancePersonInfoComp-item">
            <h3>Woman</h3>
            <div class="description">{{gender}}</div>
        </div>
        <div class="common-line"></div>
        <div class="attendancePersonInfoComp-item">
            <h3>SG004</h3>
            <div class="description">{{groupName}}</div>
        </div>
        <div class="common-line"></div>
        <div class="attendancePersonInfoComp-item">
            <h3>Metting Room</h3>
            <div class="description">{{location}}</div>
        </div>
        <div class="common-line"></div>
        <div class="attendancePersonInfoComp-item">
            <h3>Device</h3>
            <div class="description">{{deviceType}}</div>
        </div>
        <div class="common-line"></div>
        <div class="attendancePersonInfoComp-item">
            <h3>Series NO.</h3>
            <div class="description">{{serialNo}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            employeeName: null,
            gender: null,
            groupName: null,
            location: null,
            deviceType: null,
            serialNo: null, 
        }
    },
    methods: {
        setData(employeeData) {
            this.employeeName = employeeData.employeeName;
            if(employeeData.gender == 0) this.gender = "女"
            if(employeeData.gender == 1) this.gender = "男"
            this.groupName = employeeData.groupName;
            this.location = employeeData.location;
            this.deviceType = employeeData.deviceType;
            this.serialNo = employeeData.serialNo;
        }
    }
}
</script>
<style scoped>
.attendancePersonInfoComp {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
}
.attendancePersonInfoComp-item {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 12.5%;
    margin-right: 2%;
    margin-left: 2%;
}
.attendancePersonInfoComp-item.first-item {
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 0%;
}

.attendancePersonInfoComp-item > h3{
    display: flex;
    justify-content: center;
    color: #5bbf66;
}
.attendancePersonInfoComp-item.first-item > h3 {
    color: #394867;
}
.attendancePersonInfoComp-item > .description{
    display: flex;
    justify-content: center;
    color: #9ba4b4;
}
.common-line {
    height: 100%;
}
</style>