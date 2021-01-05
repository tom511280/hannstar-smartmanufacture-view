<template>
  <div class="monitorpieTableComp">
      <el-table :data="parkDataList">
        <el-table-column label="編號" width="150">
          <template slot-scope="scope">
            <span style="">{{ scope.row.treeSid }}</span>
          </template>
        </el-table-column>
        <el-table-column label="樹種" width="100">
          <template slot-scope="scope">
            <span style="">{{ scope.row.treeType }}</span>
          </template>
        </el-table-column>
        <el-table-column label="學名" width="180">
          <template slot-scope="scope">
            <span style="">{{ scope.row.scientificName }}</span>
          </template>
        </el-table-column>
        <!-- <el-table-column label="樹齡(年)" width="100">
          <template slot-scope="scope">
            <span style="">{{ scope.row.age }}</span>
          </template>
        </el-table-column>
        <el-table-column label="樹高(公尺)" width="100">
          <template slot-scope="scope">
            <span style="">{{ scope.row.treeHeight }}</span>
          </template>
        </el-table-column>
        <el-table-column label="管理單位" width="180">
          <template slot-scope="scope">
            <span style="">{{ scope.row.managementUnit }}</span>
          </template>
        </el-table-column>
        <el-table-column label="公園" width="180">
          <template slot-scope="scope">
            <span style="">{{ scope.row.parkName }}</span>
          </template>
        </el-table-column>
        <el-table-column label="位置" width="100">
          <template slot-scope="scope">
            <b-button size="sm" v-b-modal.modal-lg @click="setCurrentMapUrl(scope.row.longitude, scope.row.latitude)">打開</b-button>
          </template>
        </el-table-column> -->
      </el-table>
      <div class="overflow-auto">
      <el-col :span="12" :offset="8">
        <div>
          <!-- 分页组件 -->
          <!--:page-sizes="[2,4,6,8,10]" -->
          <el-pagination
            style="margin: 15px 0px"
            prev-text="prev"
            next-text="next"
            background
            layout="prev, pager, next, sizes, jumper, total"
            :page-size="pageSize"
            :total="total"
            :current-page="pageNow"
            @current-change="findPage"
            @size-change="findSize"
          >
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
      total: 0, // 总页数, 从后台查询获取
      pageNow: 1, // 当前页数, 默认为1
      pageSize: 10, // 当前页显示的数据条数, 默认为4
      parkDataList: [],
      currentMapUrl:''
    };
  },
  methods: {
    findPage(page) {
      // 用来处理分页相关方法
      window.console.log("当前页数: " + page);
      this.pageNow = page;
      this.findAllTableDataByPage('findPage');
    },
    findSize(size) {
      // 用来处理每页显示记录发生变化的方法
      window.console.log("当前页面记录条数: " + size);
      this.pageSize = size;
      this.findAllTableDataByPage();
    },
  }
};
</script>
