<template>
    <div class="gfTableComp">
        <div class="gfTableComp-header-area">
            <h4>Hannstar</h4>
            <button type="button" class="btn button-confirm" data-bs-toggle="modal" data-bs-target="#gfAddStaffModal">Add Staff</button>
            <button type="button" class="btn button-confirm" data-bs-toggle="modal" data-bs-target="#gfImportModal">Bulk Import</button>
            <button type="button" class="btn button-confirm" data-bs-toggle="modal" data-bs-target="#gfPairingModal">Bulk Pairing</button>
        </div>
        <div class="gfTableComp-search-area">
            <input type="text" placeholder="Name/ Watch No." />
            <button type="button" class="btn button-confirm">Search</button>
        </div>
        <div class="gfTableComp-table-area">
            <el-table 
              :data="datasNow"
              style="width: 100%;height:80%;white-space:nowrap;"
              :header-cell-style="tableHeaderColor"
              show-overflow-tooltip
            >
              <!-- <template slot="empty">
                <div>5555</div>
              </template> -->

              <!--loop data-->
              <el-table-column v-for="(field, index) in fields" :key="field" :label="field" :min-width="fieldsWidth[index]" show-overflow-tooltip>
                <template slot-scope="scope">
                  <span v-if="fieldkeys[index] != 'detail'">{{ scope.row[fieldkeys[index]] }}</span>
                  <span v-if="fieldkeys[index] == 'detail'">
                    <div class="gfTableComp-table-area-detail">
                      <p data-bs-toggle="modal" data-bs-target="#gfEditStaffModal">Edit</p>
                      <div class="common-line"></div>
                      <p data-bs-toggle="modal" data-bs-target="#gfDeleteModal">Delete</p>
                      <div class="common-line"></div>
                      <p data-bs-toggle="modal" data-bs-target="#gfDeviceModal">Connect Device</p>
                      <div class="common-line"></div>
                      <p data-bs-toggle="modal" data-bs-target="#gfCardModal">Card</p>
                    </div>
                  </span>
                </template> 
              </el-table-column>
            </el-table>
            <div class="monitorpieTableComp-pagination">
              <el-col>
                <paginationComp
                  :total="total"
                  :pageNow="pageNow"
                  :pageSize="pageSize"
                  :pageSizes="pageSizes"
                  @changeData="changeData"
                >
        </paginationComp>
              </el-col>
            </div>
        </div>      
    </div>
</template>
<script>
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
        paginationComp,
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
    }
  }
}
</script>
<style scoped>
.gfTableComp {
    height: 100%;
    widows: 100%;
    padding-left: 2%;
    padding-right: 2%;
}
.gfTableComp-header-area {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 8%;
    widows: 100%;
    /* margin-left: 2%;
    margin-right: 2%; */
    border-bottom: solid 1px #dddfe5;
}
.gfTableComp-header-area > button {
    margin-left: 1%;
    background-color:#ef8059;
}
.gfTableComp-search-area {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: 8%;
    widows: 100%;
}
.gfTableComp-search-area > button {
    margin-left: 1%;
}
.gfTableComp-table-area {
    height: 90%;
    widows: 100%;   
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
  margin-bottom:0px ;
  color: #2f87fd;
  cursor: pointer;
  font-size: 1.5vmin;
}
.common-line {
  height: 2vh;
  margin-top: 0.2vh;
  margin-bottom: 0.2vh;
  margin-left: 0.6vw;
  margin-right: 0.6vw;
  box-shadow: 0 0 0 0.5px #bbbfca;
}
</style>