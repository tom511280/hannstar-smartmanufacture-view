<template>
  <div class="monitorpieListComp">
    <table class="table">
      <thead>
        <tr>
          <th  v-for="(field,index) in fields" :key="field" :style="{ width: fieldsWidth[index] + '%' }">{{ field }}</th>
        </tr>
      </thead>
      <tbody v-if="datas.length > 0">
        <tr v-for="(dataItem, index) in datas.slice(0,6)" :key="dataItem.value" :value="dataItem.value" :class="{ wtdclass: (index%2 == 1), gtdclass: (index%2 == 0) }">
          <td v-for="fieldkey in fieldkeys" :key="fieldkey" >{{dataItem[fieldkey]}}</td>
        </tr>
      </tbody>
      <tbody class="nodata-area-tbody" v-if="datas.length < 1">
        <tr>
          <td :colspan="fields.length" class="tdclass-nodatatdclass">
            <div class="nodata-area-div">
              <img class="nodata-area-img" src="@/assets/img/common/img-nodata.svg" alt="">
              <p>No data</p>
            </div>
          </td>
        </tr>
      </tbody>  
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fieldkeys:[],
      fields:[],
      datas:[],
      fieldsWidth:[],
      wtdclass:'tdclass wtdclass',
      gtdclass:'tdclass gtdclass'
    }
  },
  methods: {
    drawTable(fields, fieldkeys, datas, fieldsWidth) {
      this.fieldkeys = fieldkeys;
      this.fields = fields;
      this.datas = datas;
      this.fieldsWidth = fieldsWidth;
    }
  }
}
</script>
<style lang="scss" scoped>
.monitorpieListComp {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: right;
  width: 100%;
  height: 100%;
}
table > thead > tr {
  background-color: #dddfe5;
}
th, td {
  font-family: Roboto;
  // font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  color: #707b91;
  white-space:nowrap; 
  text-align: left;
}
.nodata-area-div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  height: 15vh;
  background-color: white;
  color: #707b91;
}
.tdclass-nodatatdclass {
  border-style:none;
  border-color: white;
}
.tdclass {
  border-style:none;
  border-color: white;
}
.wtdclass {
  background-color: #f1f2f3;
}
.gtdclass {
  background-color: white;
}
</style>