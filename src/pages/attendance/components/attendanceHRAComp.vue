<template>
  <div class="attendanceHRAComp">
    <div class="common-header">
      <h4>Heart Rate Analysis</h4>
      <!-- <div class="viewmore">
        <p>View Detail</p>
        <img src="@/assets/img/bodyhealth/ic-arrow-orange-right.svg" alt="">
      </div> -->
      <div class="select-area">
        <select id="timeSelect" name="timeSelect">
        <option>Lately 24 hours</option>
        <option>Lately 12 hours</option>
        <option>Lately 6 hours</option>
        <option>Lately 1 hours</option>
      </select>
      </div>    
    </div>
    <div class="common-content">
      <overViewListComp ref="overViewList"></overViewListComp>
    </div>  
  </div>
</template>
<script>
import overViewListComp from '@/components/overViewListComp.vue'
export default {
  components: {
    overViewListComp
  },
  methods: {
    drawTable(fields, fieldkeys, datas) {
        this.$refs.overViewList.drawTable(
            fields,
            fieldkeys,
            datas, 
        )
    }
  }
}
</script>
<style scoped>
.attendanceHRAComp {
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
  height: 85%;
  width: 100%;
}
.select-area {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center; 
  width: 100%;
}
#timeSelect {
  width: 8vw;
}
</style>