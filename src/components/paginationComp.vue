<template>
    <div class="paginationComp">
        <!--p1客製化每頁顯示頁數-->
        <div class="paginationComp-area-p1">
            <el-pagination
                style="width: 100%;height:80%;margin: 15px 0px"
                background
                layout="slot"
                :page-size="pageSize"
                :page-sizes="pageSizes"
            >
                <div class="paginationComp-area-p1-sub">
                    <p>View</p>
                    <select v-model="pageSize">
                        <option v-for="pageSize in pageSizes" :key="pageSize" :value="pageSize">{{ pageSize }}</option>
                    </select>
                    <p>items per page</p>
                </div>
            </el-pagination>
        </div>
        <!--p2原本paginatio最後加上pages字樣-->
        <div class="paginationComp-area-p2">
            <el-pagination
                style="width: 100%;height:80%;margin: 15px 0px"
                prev-text="prev"
                next-text="next"
                background
                layout="prev, pager, next, jumper, slot"
                :page-size="pageSize"
                :total="total"
                :current-page="pageNow"
                @current-change="findPage"
                @size-change="findSize"
            >
                <span>pages</span>
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pageNow:1
        }
    },
    props: {
        total: {type: Number, required: true,},
        pageSize: {type: Number, required: true,},
        pageSizes: {type: Array, required: true,}
    },
    methods: {
        findPage(page) {
            // 用来处理分页相关方法
            window.console.log("当前页数: " + page);
            this.pageNow = page;
            this.$emit('changeData', this.pageNow)
        },
        findSize(size) {
            // 用来处理每页显示记录发生变化的方法
            window.console.log("当前页面记录条数: " + size);
            this.pageSize = size;
            this.$emit('changeData', this.pageNow)
        },
    }
}
</script>
<style scoped>
/*paginatio*/
.number, .btn-prev, .btn-next {
  font-weight: 500;
  color: #394867 !important;
  border-radius: 8px !important;
}
.number.active {
  background-color: #394867 !important;
  border-radius: 8px;
  border: solid 1px #384766;
  color: #ffffff !important;
}
.number:hover {
  color: white !important;
}
.paginationComp {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}
.paginationComp-area-p1 {
  width: 30%; 
}
.paginationComp-area-p2 {
  width: 70%; 
}
.paginationComp-area-p1-sub {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: #707b91;
}
.paginationComp-area-p1-sub > p{
  margin-right: 0.25vw;
}
.paginationComp-area-p1-sub > select {
  background: url("../assets/img/common/ic-arrow-orange-down.svg") no-repeat scroll right center transparent;
  background-position-x: 90%;
  width: 2.5vw;
  margin-right: 0.25vw;
  color: #ef8059;
  border:none
}
.el-pagination__jump {
  font-weight: 500 !important;
  color: #384766 !important;
}
.el-input.el-pagination__editor.is-in-pagination > .el-input__inner {
  border-radius: 6px;
  border: solid 1px #e8e8e8;
  background-color: #ffffff !important;
  width: 2vw;
}
/* .el-pagination button:disabled {
    color: #C0C4CC !important;
    background-color: #FFF !important;
    cursor: not-allowed !important;
} */
</style>
