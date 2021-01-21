<template>
  <div class="attendanceStayDetailsComp">
    <div class="common-header">
      <h4>Stay Details</h4>
      <div class="viewmore">
        <p>View Detail</p>
        <img src="@/assets/img/bodyhealth/ic-arrow-orange-right.svg" alt="">
      </div>
      <!-- <div class="select-area">
        <select id="timeSelect" name="timeSelect">
        <option>Attend</option>
        <option>Attend</option>
        <option>Attend</option>
        <option>Attend</option>
      </select>
      </div> -->
    </div>
    <div class="common-content">
      <div class="common-content-item" v-for="dataItem in datas" :key="dataItem.room">
        <div class="common-line"></div>
        <div class="common-content-item-content">
          <h5>{{dataItem.localte}}</h5>
          <p class="description">Duration {{dataItem.duration}} mins</p>
        </div> 
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      datas:[
        {
          localte:"瀚廚A",
          duration:"4 mins"
        },
        {
          localte:"瀚廚B",
          duration:"8 mins"
        }
      ]
    }
  },
  methods: {
    setData(datas) {
      this.datas = datas;
    }
  }
}
</script>
<style scoped>
.attendanceStayDetailsComp {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: right;
  width: 100%;
  height: 100%;
}
.common-header > h4 {
  margin-right: 1.5vw;
}
.common-header {
  margin-bottom: 1.5vh;
  border-bottom: none;
  height: 10%;
}
.common-content {
  height: 80%;
  width: 100%;
  /* padding-left: 0.5vw;
  padding-right: 0.5vw; */
}
.select-area {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center; 
  width: 100%;
}
.common-content-item {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center; 
  width: 100%;
  height: 30%;
  border-radius: 4px;
  background-color: #f1f2f3;
  margin-bottom: 1vh;
  padding-top: 0.5vh;
  padding-bottom: 0.5vh;
  /* padding-left: 0.5vw; */
  padding-right: 0.5vw;
}
.common-content-item > .common-line {
  margin-left: 0vw;
  box-shadow: 0 0 0 1px #007892;
}
.common-content-item-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.common-content-item-content > h5 {
  margin-bottom: 1vh;
}



</style>