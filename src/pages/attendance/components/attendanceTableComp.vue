<template>
    <div class="attendanceTableComp">
        <div class="common-header">
            <p>Date</p>
            <datepickerComp></datepickerComp>
            <p>to</p>
            <datepickerComp></datepickerComp>
        </div>
        <div class="common-header">
            <select>
                <!-- <option v-for="heartRateMaxSelect in heartRateMaxSelects" :key="heartRateMaxSelect.value" :value="heartRateMaxSelect.value">{{ heartRateMaxSelect.text }}</option> -->
                <option>test</option>
            </select>
            <input type="text" placeholder="Name" />
            <button type="button" class="btn button-confirm">Search</button>
        </div>
        <div class="common-content">
             <el-table 
        :data="datasNow"
        style="width: 100%;height:80%;white-space:nowrap;"
        :header-cell-style="tableHeaderColor"
        show-overflow-tooltip
        height="80%"
      >
        <template slot="empty">
          <div class="nodata-area-div">
              <img class="nodata-area-img" src="@/assets/img/common/img-nodata.svg" alt="">
              <p>No data</p>
          </div>
        </template>
        <!--loop data-->
        <el-table-column v-for="(field, index) in fields" :key="field" :label="field" show-overflow-tooltip>
          <template slot-scope="scope">
            <span v-if="fieldkeys[index] != 'detail'">{{ scope.row[fieldkeys[index]] }}</span>
            <span v-if="fieldkeys[index] == 'detail'">
                <div class="gfTableComp-table-area-detail">
                    <p @click="goAttendanceDetailView()" data-bs-toggle="modal" data-bs-target="#gfEditStaffModal">Detail</p>
                </div>
            </span>
          </template>
        </el-table-column>
      </el-table>
      <paginationComp
          :total="total"
          :pageNow="pageNow"
          :pageSize="pageSize"
          :pageSizes="pageSizes"
          @changeData="changeData"
        >
        </paginationComp>
      <div>
      <!-- <el-col> -->
        
      <!-- </el-col> -->
      </div>
        </div>
    </div>
</template>
<script>
import datepickerComp from '@/components/inputBox/components/datepickerComp.vue'
import paginationComp from '@/components/paginationComp.vue'
export default {
    data(){
        return {
            fields:[],
            fieldkeys:[],
            fieldsWidth:[],
            total: 0, // 总页数, 从后台查询获取
            pageNow: 1, // 当前页数, 默认为1
            pageSize: 10, // 当前页显示的数据条数, 默认为4
            pageSizes: [10,20,30,40],
            datas: [],
            datasNow: [],
        }
    },
    components: {
        datepickerComp,
        paginationComp
    },
    methods: {
        setTable(datas, fields, fieldkeys, fieldsWidth){
            window.console.log("setTable: " + fieldsWidth);
            this.datas = datas;
            this.fields = fields;
            this.fieldkeys = fieldkeys;
            this.fieldsWidth = fieldsWidth;
            this.pageNow =  1;
            this.pageSize =  10;
            this.total =  this.datas.length
            this.changeData(this.pageNow);
        },
        changeData(pageNow){
            this.pageNow = pageNow;
            this.datasNow = this.datas.slice((this.pageNow-1)*this.pageSize,this.pageNow*this.pageSize);
        },
        // 修改table header的背景色
        tableHeaderColor({ row, column, rowIndex, columnIndex }) {
            if (rowIndex === 0) {
                return 'background-color: #dddfe5;color: #394867;font-weight: 500;font-size: 16px;'
            }
        },
        goAttendanceDetailView(){
            this.$router.push({ path: '/attendance/attendanceDetailView'});
        }
    }
}
</script>
<style scoped>
.common-header {
    height: 7vh;
}
.common-header > select {
    width: 6vw;
}
.common-header > p, 
.common-header > input[type="text"], 
.common-header > select{
    margin-right: 1vw;
}
.common-content {
    height: 70vh;
}
.gfTableComp-table-area-detail {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
}
.gfTableComp-table-area-detail > p{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom:0px ;
  color: #2f87fd;
  cursor: pointer;
  font-size: 1.5vmin;
  height: 2vh;
  /* line-height:0px */
}
</style>