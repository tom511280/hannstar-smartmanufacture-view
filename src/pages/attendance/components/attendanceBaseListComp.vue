<template>
  <div class="attendanceBaseListComp">
    <div class="common-header">
      <h4>Attendance</h4>
      <!-- <div class="viewmore">
        <p>View Detail</p>
        <img src="@/assets/img/bodyhealth/ic-arrow-orange-right.svg" alt="">
      </div> -->
    </div>
    <overViewListComp ref="overViewList"></overViewListComp>
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
.attendanceBaseListComp {
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
</style>