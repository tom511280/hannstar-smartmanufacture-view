<template>
    <div class="gfHeaderComp">
        <div class="row">
          <div class="col-4 common-item">
            <div class="common-item-inner">
                <div class="item-area-content-description">
                    <h1>2,345</h1>
                    <p>Total Staffs</p>
                </div>
                <div class="item-area-content-line"></div>
                <div class="gfHeaderComp-item-area-content-detail">
                    <div class="detail-item">
                        <div>Man</div>
                        <div>1,000</div>
                        <div>42%</div>
                    </div>
                    <div class="detail-item">
                        <div>Woman </div>
                        <div>1,345</div>
                        <div>58%</div>
                    
                    </div>
                </div>
            </div> 
          </div>
          <div class="col-4 common-item">
            <div class="common-item-inner">
              111
            </div> 
          </div>
          <div class="col-4 common-item">
            <div class="common-item-inner">
              111
            </div> 
          </div>
        </div>
        <!-- <div class="gfHeaderComp-item1">
            <div class="gfHeaderComp-item-area-content-description">
                <h1>2,345</h1>
                <p>Total Staffs</p>
            </div>
            <div class="gfHeaderComp-item-area-content-line"></div>
            <div class="gfHeaderComp-item-area-content-detail">
                <div class="detail-item">
                    <div>Man</div>
                    <div>1,000</div>
                    <div>42%</div>
                </div>
                <div class="detail-item">
                    <div>Woman </div>
                    <div>1,345</div>
                    <div>58%</div>
                </div>
             </div>
            <div class="gfHeaderComp-item-area-img">
                <img src="@/assets/img/groupAndStaff/icon-totalstaffs.svg" alt="">
            </div>
        </div>
        <div class="gfHeaderComp-item2">
            <div class="gfHeaderComp-item2-area-content-description">
                <h1>2,010</h1>
                <p>With watches</p>
            </div>
            <div class="gfHeaderComp-item-area-img">
                <img src="@/assets/img/groupAndStaff/icon-smartwatch-1.svg" alt="">
            </div>
        </div>
        <div class="gfHeaderComp-item3">
            <div class="gfHeaderComp-item2-area-content-description">
                <h1>335</h1>
                <p>Unmatched</p>
            </div>
            <div class="gfHeaderComp-item-area-img">
                <img src="@/assets/img/groupAndStaff/icon-smartwatch-2.svg" alt="">
            </div>
        </div> -->
    </div>
</template>
<script>
export default {
    data(){
        return {
            allNum:0,
            maleNum:0,
            femaleNum:0,
            bandBindNum:0,
            bandNotBindNum:0,
        }
    },
    methods:{
        setDatas(allNum, maleNum, femaleNum, bandBindNum, bandNotBindNum){
            this.allNum = allNum;
            this.maleNum = maleNum;
            this.femaleNum = femaleNum;
            this.bandBindNum = bandBindNum;
            this.bandNotBindNum = bandNotBindNum;
        }
    }
}
</script>
<style scoped>
.row {
    width: 100%;
}
.gfHeaderComp {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}
.common-item {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: 8px;
}

.row > .common-item:nth-child(1) > .common-item-inner {
    margin-left: 0vw;
    background-color: #7c72a9;
}
.row > .common-item:nth-child(2) > .common-item-inner {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #007892;
    margin-left: 2%;
    margin-right: 2%;
}
.row > .common-item:nth-child(3) > .common-item-inner {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #3797a4;
    margin-right: 0vw;
}
.item-area-content-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    width: 11vw;
    padding-left: 2vw;
}
.item-area-content-line {
    height: 60%;
    width: 1px;
    margin-top: 20%;
    margin-bottom: 20%;
    background-color: #ffffff;
    opacity: 0.43;
}



/* .gfHeaderComp-item2-area-content-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    width: vw;
    padding-left: 2vw;
} */
.gfHeaderComp-item-area-content-description > h1, .gfHeaderComp-item2-area-content-description > h1 {
    margin-bottom: 0.5vh;
    font-weight: 500;
    color: #ffffff;
    margin-bottom: 1.5vh;
}
.gfHeaderComp-item-area-content-description > p, .gfHeaderComp-item2-area-content-description > p {
    margin-bottom: 0.5vh;
    color: #ffffff;
}

.gfHeaderComp-item-area-content-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70%;
    width: 47.5%;
    padding-left: 2%;
}
.detail-item {
    display: flex;
    flex-direction: row;
    justify-content:flex-end;
    align-items: center;
    height: 50%;
    width: 100%;
    font-size: 1.7vmin;
}
.detail-item > div {
    color: #ffffff;
    margin-left: 0.25vw;
    margin-right: 0.25vw;
    font-size: 1.7vmin;
}
.detail-item > div:nth-child(3){
    margin-left: 1%;
    opacity: 0.4;
    border-radius: 14px;
    background-color: #000000;
    padding: 1.25vh 0.25vw 1.25vh 0.25vw;
    padding-top: 1.25vh;
    padding-bottom: 1.25vh;
    padding-right: 0.25vw;
    padding-left: 0.25vw;
}
.gfHeaderComp-item-area-img {
    height: 100%;
    width: 7.5vw;
    padding-top: 1vh;
    padding-bottom: 1vh;
    padding-right: 2vw;
    padding-left: 1.5vw;
}
.gfHeaderComp-item-area-img > img{
    height: 100%;
    width: 100%;
}
</style>