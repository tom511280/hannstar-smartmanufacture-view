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
      <div class="monitorpieTableComp-pagination">
      <el-col>
        <div>
          <!-- 分页组件 -->
          <!--:page-sizes="[2,4,6,8,10]" -->
          <el-pagination
            style="width: 100%;height:80%;margin: 15px 0px"
            prev-text="prev"
            next-text="next"
            background
            layout="sizes, prev, pager, next, jumper, slot"
            :page-size="pageSize"
            :total="total"
            :current-page="pageNow"
            @current-change="findPage"
            @size-change="findSize"
          >
          <span>pages</span>
          </el-pagination>
        </div>
      </el-col>
      </div>
  </div>
</template>
<script>
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
      datas: [],
      datasNow: [],
    };
  },
  methods: {
    setTable(datas, Allfields, Allfieldkeys){
      this.datas = datas;
      this.Allfields = Allfields;
      this.Allfieldkeys = Allfieldkeys;
      this.pageNow =  1;
      this.pageSize =  10;
      this.total =  this.datas.length
      // this.total =  Math.ceil(this.datas.length / this.pageSize);
      this.changeData();
    },
    changeData(){
      this.datasNow = this.datas.slice((this.pageNow-1)*this.pageSize,this.pageNow*this.pageSize);
    },
    findPage(page) {
      // 用来处理分页相关方法
      window.console.log("当前页数: " + page);
      this.pageNow = page;
      this.changeData();
    },
    findSize(size) {
      // 用来处理每页显示记录发生变化的方法
      window.console.log("当前页面记录条数: " + size);
      this.pageSize = size;
      this.changeData();
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
.monitorpieTableComp-pagination {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}


.number, .btn-prev, .btn-next {
  border-radius: 8px !important;
}

.number.active {
  background-color: #394867 !important;
  border-radius: 8px;
  border: solid 1px #384766;
}
.number:hover {
  color: white !important;
}
</style>
