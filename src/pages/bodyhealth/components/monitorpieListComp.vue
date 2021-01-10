<template>
  <div class="monitorpieListComp">
    <table class="table table-striped">
      <thead>
        <tr>
          <th v-for="field in fields" :key="field">{{ field }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dataItem in datas.slice(0,6)" :key="dataItem.value" :value="dataItem.value">
          <th v-for="fieldkey in fieldkeys" :key="fieldkey" >{{dataItem[fieldkey]}}</th>
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
      datas:[]
    }
  },
  methods: {
    drawTable(fields, fieldkeys, datas) {
      this.fieldkeys = fieldkeys;
      this.fields = fields;
      this.datas = datas;
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
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.3px;
  color: #707b91;
  white-space:nowrap; 
  text-align: left;
}
</style>