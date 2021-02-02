<template>
    <div class="attendancePersonInfoComp">
        <div class="attendancePersonInfoComp-item first-item">
            <h3>Deborah Clarke</h3>
        </div>
        <div class="common-line"></div>
        <div class="attendancePersonInfoComp-item">
            <h3>{{gender}}</h3>
            <div class="description">Gender</div>
        </div>
        <div class="common-line"></div>
        <div class="attendancePersonInfoComp-item">
            <h3>{{groupName}}</h3>
            <div class="description">Group</div>
        </div>
        <div class="common-line"></div>
        <div class="attendancePersonInfoComp-item">
            <h3>{{location}}</h3>
            <div class="description">Meeting Room</div>
        </div>
        <div class="common-line"></div>
        <div class="attendancePersonInfoComp-item">
            <h3>{{deviceType}}</h3>
            <div class="description">Device</div>
        </div>
        <div class="common-line"></div>
        <div class="attendancePersonInfoComp-item">
            <h3>{{serialNo}}</h3>
            <div class="description">Series NO.</div>
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
            if(employeeData.gender == 0) this.gender = "Female"
            if(employeeData.gender == 1) this.gender = "Male"
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
    background-color: #e8e8e8;
}
</style>