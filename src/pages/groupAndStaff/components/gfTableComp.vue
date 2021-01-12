<template>
    <div class="gfTableComp">
        <div class="gfTableComp-header-area">
            <h4>Hannstar</h4>
            <button type="button" class="btn button-confirm">Add Staff</button>
            <button type="button" class="btn button-confirm">Bulk Import</button>
            <button type="button" class="btn button-confirm">Bulk Pairing</button>
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
              height="80%"
            >
              <!--loop data-->
              <el-table-column v-for="(field, index) in fields" :key="field" :label="field" :width="fieldsWidth[index]" show-overflow-tooltip>
                <template slot-scope="scope">
                  <span v-if="fieldkeys[index] != 'detail'">{{ scope.row[fieldkeys[index]] }}</span>
                  <span v-if="fieldkeys[index] == 'detail'">
                    <div class="gfTableComp-table-area-detail">
                      <p data-bs-toggle="modal" data-bs-target="#gfAddModal">Edit</p>
                      <div class="common-line"></div>
                      <p data-bs-toggle="modal" data-bs-target="#gfEditModal">Delete</p>
                      <div class="common-line"></div>
                      <p data-bs-toggle="modal" data-bs-target="#gfEditModal">Connect Device</p>
                      <div class="common-line"></div>
                      <p data-bs-toggle="modal" data-bs-target="#gfEditModal">Card</p>
                    </div>
                  </span>
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
                    layout="sizes, prev, pager, next, jumper"
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
        <!-- gfTableComp Delete Modal -->
        <div class="modal fade" id="gfAddModal" tabindex="-1" aria-labelledby="gfEditModal" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5>Add Group</h5>
                    </div>
                    <div class="modal-body">
                        <div class="modal-body-content">
                            <div class="modal-body-content-sub">
                                <h5>name</h5>
                                <input type="text" v-model="addNodeName" />
                                <br>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button @click="addNode()" type="button" class="btn button-confirm">Confirm</button>
                        <button id="gfAddModalCBT" type="button" class="btn button-cancel" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
              </div>
        </div>
        <!-- gfTableComp Delete Modal -->
        <div class="modal fade" id="gfAddModal" tabindex="-1" aria-labelledby="gfEditModal" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5>Add Group</h5>
                    </div>
                    <div class="modal-body">
                        <div class="modal-body-content">
                            <div class="modal-body-content-sub">
                                <h5>name</h5>
                                <input type="text" v-model="addNodeName" />
                                <br>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button @click="addNode()" type="button" class="btn button-confirm">Confirm</button>
                        <button id="gfAddModalCBT" type="button" class="btn button-cancel" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
              </div>
        </div>
        <!-- gfTableComp Connect Device Modal -->
        <div class="modal fade" id="gfAddModal" tabindex="-1" aria-labelledby="gfEditModal" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5>Add Group</h5>
                    </div>
                    <div class="modal-body">
                        <div class="modal-body-content">
                            <div class="modal-body-content-sub">
                                <h5>name</h5>
                                <input type="text" v-model="addNodeName" />
                                <br>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button @click="addNode()" type="button" class="btn button-confirm">Confirm</button>
                        <button id="gfAddModalCBT" type="button" class="btn button-cancel" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
              </div>
        </div>
        <!-- gfTableComp Card Modal -->
        <div class="modal fade" id="gfAddModal" tabindex="-1" aria-labelledby="gfEditModal" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5>Add Group</h5>
                    </div>
                    <div class="modal-body">
                        <div class="modal-body-content">
                            <div class="modal-body-content-sub">
                                <h5>name</h5>
                                <input type="text" v-model="addNodeName" />
                                <br>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button @click="addNode()" type="button" class="btn button-confirm">Confirm</button>
                        <button id="gfAddModalCBT" type="button" class="btn button-cancel" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
              </div>
        </div>
        <!-- gfTableComp add Modal -->
        <div class="modal fade" id="gfAddModal" tabindex="-1" aria-labelledby="gfEditModal" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5>Add Group</h5>
                    </div>
                    <div class="modal-body">
                        <div class="modal-body-content">
                            <div class="modal-body-content-sub">
                                <h5>name</h5>
                                <input type="text" v-model="addNodeName" />
                                <br>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button @click="addNode()" type="button" class="btn button-confirm">Confirm</button>
                        <button id="gfAddModalCBT" type="button" class="btn button-cancel" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
              </div>
        </div>
        <!-- gfTableComp import Modal -->
        <div class="modal fade" id="gfAddModal" tabindex="-1" aria-labelledby="gfEditModal" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5>Add Group</h5>
                    </div>
                    <div class="modal-body">
                        <div class="modal-body-content">
                            <div class="modal-body-content-sub">
                                <h5>name</h5>
                                <input type="text" v-model="addNodeName" />
                                <br>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button @click="addNode()" type="button" class="btn button-confirm">Confirm</button>
                        <button id="gfAddModalCBT" type="button" class="btn button-cancel" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
              </div>
        </div>
        <!-- gfTableComp Pairing Modal -->
        <div class="modal fade" id="gfAddModal" tabindex="-1" aria-labelledby="gfEditModal" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5>Add Group</h5>
                    </div>
                    <div class="modal-body">
                        <div class="modal-body-content">
                            <div class="modal-body-content-sub">
                                <h5>name</h5>
                                <input type="text" v-model="addNodeName" />
                                <br>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button @click="addNode()" type="button" class="btn button-confirm">Confirm</button>
                        <button id="gfAddModalCBT" type="button" class="btn button-cancel" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
              </div>
        </div>               
    </div>
</template>
<script>
export default {
  data(){
    return {
      fields:[],
      fieldkeys:[],
      fieldsWidth:[],
      total: 0, // 总页数, 从后台查询获取
      pageNow: 1, // 当前页数, 默认为1
      pageSize: 10, // 当前页显示的数据条数, 默认为4
      datas: [],
      datasNow: [],
    }
  },
  methods: {
    setTable(datas, fields, fieldkeys, fieldsWidth){
      window.console.log("setTable: " + fieldsWidth);
      this.datas = datas;
      this.fields = fields;
      this.fieldkeys = fieldkeys;
      this.fieldsWidth = fieldsWidth;
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