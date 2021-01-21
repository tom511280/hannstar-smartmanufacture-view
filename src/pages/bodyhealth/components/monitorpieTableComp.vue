<template>
  <div class="monitorpieTableComp">
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
        <el-table-column v-for="(field, index) in Allfields" :key="field" :label="field" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{ scope.row[Allfieldkeys[index]] }}</span>
          </template>
        </el-table-column>
      </el-table>
      <div>
          <paginationComp
            :total="total"
            :pageNow="pageNow"
            :pageSize="pageSize"
            :pageSizes="pageSizes"
            @changeData="changeData"
          >
          </paginationComp>
      </div>
  </div>
</template>
<script>
import paginationComp from '@/components/paginationComp.vue'
export default {
  data() {
    return {
      treeSid:'',
      parkOptionsSelected:'ALL',
      parkOptions: [],
      treeTypeOptionsSelected:'ALL',
      treeTypeOptions: [],
      managementUnitSelected:'ALL',
      managementUnitOptions: [],
      Allfields:[],
      Allfieldkeys:[],
      total: 0, // 总页数, 从后台查询获取
      pageNow: 1, // 当前页数, 默认为1
      pageSize: 10, // 当前页显示的数据条数, 默认为4
      pageSizes: [10,20,30,40],
      datas: [],
      datasNow: [], 
    };
  },
  components: {
        paginationComp,
  },
  methods: {
    setTable(datas, Allfields, Allfieldkeys){
      this.datas = datas;
      this.Allfields = Allfields;
      this.Allfieldkeys = Allfieldkeys;
      // this.$refs.paginationComp.setPagination(this.pageSizes);
      this.pageNow =  1;
      this.pageSize =  10;
      this.total =  this.datas.length
      // this.total =  Math.ceil(this.datas.length / this.pageSize);
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
};
</script>
<style>
.monitorpieTableComp {
  width: 100%;
  height: 100%;
}
.monitorpieTableComp-table-header {
 background-color: red !important;
}
</style>
