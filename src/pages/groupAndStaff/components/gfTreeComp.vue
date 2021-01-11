<template>
    <div class="gfTreeComp">
        <div class="gfTreeComp-header">
            <h5 class="gfTreeComp-header-title">Group Structure</h5>
            <div class="gfTreeComp-header-content">
                <p data-bs-toggle="modal" data-bs-target="#gfAddModal">Add</p>
                <div class="common-line"></div>
                <p data-bs-toggle="modal" data-bs-target="#gfEditModal">Edit</p>
                </div>
            </div>
            <div class="gfTreeComp-info">
            <el-tree 
                node-key="id"
                class="tree-line" 
                :indent="0" 
                :data="datas"
                @node-click="handleNodeClick"
                ref="tree"
                :props="defaultProps"
            >
            </el-tree>
        </div>
        <!-- gf add Modal -->
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
        <!-- gf edit Modal -->
        <div class="modal fade" id="gfEditModal" tabindex="-1" aria-labelledby="gfEditModal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5>Edit Group</h5>
                    </div>
                    <div class="modal-body">
                        <div class="modal-body-content">
                            <div class="modal-body-content-sub">
                                <h5>name</h5>
                                <input type="text" v-model="editNodeName" />
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button @click="editNode()" type="button" class="btn button-confirm">Confirm</button>
                        <button id="gfEditModalCBT" type="button" class="btn button-cancel" data-bs-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        datas: [],
        currentD:{},
        currentN:{},
        addNodeName:'',
        editNodeName:'',
        defaultProps: {
          children: 'children',
          label: 'name'
        }
      };
    },
    mounted(){
      //初始化時執行
      this.$store.dispatch({type:'commonModule/init'})
    },
    methods: {
      setTree(datas){
          this.datas = datas;
      },
      addNode(){
        //新增数据
        this.currentD.children.push({ id: 99, name: this.addNodeName, pid: 100, children: []})
        //同时展开节点
        if(!this.currentN.expanded){
          this.currentN.expanded = true
        }
        document.getElementById("gfAddModalCBT").click();
      },
      editNode(){
        //更改數據
        this.currentD.name = this.editNodeName;
        document.getElementById("gfEditModalCBT").click();
        // this.$refs.menu1.$el.click()
      },
      handleNodeClick(d, n) {
        this.currentD = d
        this.currentN = n
        this.editNodeName = d.name
        console.log(n, d)
			// // //判断层级
			// // if(n.level >= 3){
			// // 	this.$message.error("最多只支持三级！")
			// // 	return false;
			// // }
			// //新增数据
			// d.children.push({
			// 	id: ++this.maxexpandId,
			// 	name: '新增节点',
			// 	pid: d.id,
			// 	children: []
			// })
			// //同时展开节点
			// if(!n.expanded){
			// 	n.expanded = true
			// }
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 9,
          label: '三级 1-1-1'
        }]);
      },
    }
  };
</script>
<style lang="scss">
.gfTreeComp {
    height: 100%;
    width: 100%;
}
.gfTreeComp-header {
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   height: 6.5vh;
   width: 100%;
   border-bottom: 2px solid #9ba4b4;
   padding-bottom: 2.5%;
}
.gfTreeComp-header-title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
  width: 25%;
  margin-left: 5%;
  font-size: 1.7vmin;
}
.gfTreeComp-header-content {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
  width: 70%;
  padding-right: 9%;
}
.gfTreeComp-header-content > p {
   margin-bottom:0.75vh ;
   color: #2f87fd;
   cursor: pointer;
   font-size: 1.5vmin;
}
.gfTreeComp-info {
   height: 90%;
   width: 100%;
   padding-top: 5%;
}
.common-line {
  height: 2vh;
  margin-top: 0.2vh;
  margin-bottom: 0.2vh;
  margin-left: 0.6vw;
  margin-right: 0.6vw;
  box-shadow: 0 0 0 0.5px #bbbfca;
}
/*樹型菜單客製*/
.tree-line{
  .el-tree-node {
    position: relative;
    padding-left: 16px; // 缩进量
  }
  .el-tree-node__children {
    padding-left: 16px; // 缩进量
  }

  // 竖线
  .el-tree-node::before {
    content: "";
    height: 100%;
    width: 1px;
    position: absolute;
    left: -3px;
    top: -26px;
    border-width: 1px;
    border-left: 1px dashed #52627C;
  }
  // 当前层最后一个节点的竖线高度固定
  .el-tree-node:last-child::before {
    height: 38px; // 可以自己调节到合适数值
  }

  // 横线
  .el-tree-node::after {
    content: "";
    width: 24px;
    height: 20px;
    position: absolute;
    left: -3px;
    top: 12px;
    border-width: 1px;
    border-top: 1px dashed #52627C;
  }

  // 去掉最顶层的虚线，放最下面样式才不会被上面的覆盖了
  & > .el-tree-node::after {
    border-top: none;
  }
  & > .el-tree-node::before {
    border-left: none;
  }
	
  // 展开关闭的icon
  .el-tree-node__expand-icon{
    font-size: 16px;
    // 叶子节点（无子节点）
    &.is-leaf{
      color: transparent;
      // display: none; // 也可以去掉
    }
  }
}
/* Modal */
#gfAddModal > .modal-dialog > .modal-content {
  width: 60%;
}
#gfEditModal > .modal-dialog > .modal-content {
  width: 60%;
}
</style>