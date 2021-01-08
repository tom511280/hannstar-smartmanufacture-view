<template>
    <div class="groupAndStaffView">
        <div class="groupAndStaffView-header-area">
            asas
        </div>
        <div class="groupAndStaffView-content-area">
            <div class="groupAndStaffView-tree-area">
                <el-tree
                    :data="data"
                    :props="defaultProps"
                    accordion
                    @node-click="handleNodeClick">
                </el-tree>
            </div>
            <div class="groupAndStaffView-info-area">
                111
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
</script>
<style scoped>
.groupAndStaffView {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.groupAndStaffView  > .groupAndStaffView-header-area {
    height: 20%;
    width: 100%;
}
.groupAndStaffView  > .groupAndStaffView-content-area {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 80%;
    width: 100%;
}
.groupAndStaffView  > .groupAndStaffView-content-area >  .groupAndStaffView-tree-area{
    height: 100%;
    width: 20%;
}
.groupAndStaffView  > .groupAndStaffView-content-area >  .groupAndStaffView-info-area{
    height: 100%;
    width: 20%;
}
</style>