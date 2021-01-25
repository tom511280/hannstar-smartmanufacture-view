<template>
    <div class="groupAndStaffView container-fluid">
        <div class="row">
          <div class="col-12 common-item">
            <div class="common-item-inner groupAndStaffView-header-area">
              <gfHeaderComp ref="gfHeader"></gfHeaderComp>
            </div> 
          </div>
        </div>
        <div class="row">
            <div class="col-9 common-item">
                <div class="common-item-inner groupAndStaffView-content-area-tree">
                    <gfTreeComp ref="gfTree"></gfTreeComp>
                </div>
            </div>
            <div class="col-3 common-item">
                <div class="common-item-inner groupAndStaffView-content-area-info">
                   <gfTableComp ref="groupStaff"></gfTableComp> 
                </div>
            </div>
        </div>
        <gfModalComp></gfModalComp>
    </div>
    <!-- <div class="groupAndStaffView">
        <div class="groupAndStaffView-header-area">
            <gfHeaderComp ref="gfHeader"></gfHeaderComp>
        </div>
        <div class="groupAndStaffView-content-area">
            <div class="groupAndStaffView-content-area-tree">
              <gfTreeComp ref="gfTree"></gfTreeComp>
            </div>
            <div class="groupAndStaffView-content-area-info">
              <gfTableComp ref="groupStaff"></gfTableComp> 
            </div>
        </div>
        <gfModalComp></gfModalComp>
    </div> -->
</template>
<script>
import gfHeaderComp from '@/pages/groupAndStaff/components/gfHeaderComp.vue'
import gfTreeComp from '@/pages/groupAndStaff/components/gfTreeComp.vue'
import gfTableComp from '@/pages/groupAndStaff/components/gfTableComp.vue'
import gfModalComp from '@/pages/groupAndStaff/components/gfModalComp.vue'
export default {
    components: {
        gfHeaderComp,
        gfTreeComp,
        gfTableComp,
        gfModalComp
    },
    computed: {
        statisticsData(){
            return Object.assign({},this.$store.getters['groupAndStaffModule/getState'].statisticsData);
        },
        groupData(){
            return Object.assign({},this.$store.getters['groupAndStaffModule/getState'].groupData);
        },
        groupStaffData(){
            return Object.assign({},this.$store.getters['groupAndStaffModule/getState'].groupStaffData);
        },
    },
    watch: {
        immediate: true,
        deep: true,
        statisticsData: function(statisticsData) {
          window.console.log(statisticsData)
          this.$refs.gfHeader.setDatas(
                statisticsData.allNum,
                statisticsData.maleNum,
                statisticsData.femaleNum,
                statisticsData.bandBindNum,
                statisticsData.bandNotBindNum,
          )
        },
        groupData: function(groupData) {
          window.console.log(groupData)
          this.$refs.gfTree.setTree(
                groupData.groupList,
          )
        },
        groupStaffData: function(groupStaffData) {
          window.console.log(groupStaffData)
          // groupStaffData
          this.$refs.groupStaff.setTable(
                groupStaffData.groupStaffList, 
                groupStaffData.fields,
                groupStaffData.fieldkeys,
                groupStaffData.fieldsWidth
          )
        },
    },
    mounted(){
      //初始化時執行
      this.$store.dispatch({type:'commonModule/init'})
      this.$store.dispatch({type:'groupAndStaffModule/init'})
      //載入統計資料
      this.$store.dispatch({type:'groupAndStaffModule/loadstatisticsData'})
      //載入組織資料
      this.$store.dispatch({type:'groupAndStaffModule/loadGroup'})
      //載入組織人員資料
      this.$store.dispatch({type:'groupAndStaffModule/loadGroupStaff'})
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
</script>
<style lang="scss">
.groupAndStaffView {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}
.groupAndStaffView > .row:nth-child(1) {
  width: 100%;
  height: 15%;
  background-color: #f1f2f3;
}
.groupAndStaffView > .row:nth-child(2) {
  width: 100%;
  height: 80%;
}


.groupAndStaffView-header-area {
    // height: 15%;
    width: 100%;
    background-color: #f1f2f3;
    padding-left: 0vw;
    padding-right: 0vw;
    padding-top: 0vh;
    // padding-bottom: 0vh;
    // margin-bottom: 2%;
}
.groupAndStaffView-content-area {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    // height: 85%;
    width: 100%;
}
.groupAndStaffView-content-area-tree{
    height: 100%;
    width: 16%;
    margin-right: 2%;
    border-radius: 8px;
    background-color: #ffffff;
}
.groupAndStaffView-content-area-info{
    height: 100%;
    width: 82%;
    border-radius: 8px;
    background-color: #ffffff;
}

// .groupAndStaffView-tree-area{
//     height: 100%;
//     width: 16%;
//     margin-right: 2%;
//     border-radius: 8px;
//     background-color: #ffffff;
// }
// .groupAndStaffView-tree-area-header{
//    display: flex;
//    flex-direction: row;
//    justify-content: center;
//    align-items: center;
//    height: 10%;
//    width: 100%;
//    border-bottom: 2px solid #9ba4b4;
//    padding-bottom: 2.5%;
// }
// .groupAndStaffView-tree-area-header > h5 {
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: flex-end;
//   height: 100%;
//   width: 25%;
//   margin-left: 5%;
// }
// .groupAndStaffView-tree-area-header-content {
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-end;
//   align-items: flex-end;
//   height: 100%;
//   width: 70%;
//   padding-right: 9%;
// }
// .groupAndStaffView-tree-area-header-content > p {
//    margin-bottom: 0px;
//    color: #2f87fd;
//    cursor: pointer;
// }
// .groupAndStaffView-tree-area-info{
//    height: 90%;
//    width: 100%;
//    padding-top: 5%;
// }

</style>