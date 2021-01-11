<template>
    <div class="gfHeaderComp">
        <div class="gfHeaderComp-item1">
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
            <!-- {{this.bandBindNum}} -->
        </div>
        <div class="gfHeaderComp-item3">
            <!-- {{this.bandNotBindNum}} -->
        </div>
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
.gfHeaderComp {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}
.gfHeaderComp-item1, .gfHeaderComp-item2, .gfHeaderComp-item3 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 32%;
    border-radius: 8px;
}
.gfHeaderComp-item1 {
    background-color: #7c72a9;
}
.gfHeaderComp-item2 {
    background-color: #007892;
    margin-left: 2%;
    margin-right: 2%;
}
.gfHeaderComp-item3 {
    background-color: #3797a4;
}
.gfHeaderComp-item-area-content-description {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 9vw;
}
.gfHeaderComp-item-area-content-description > h1 {
    margin-bottom: 0.5vh;
    font-weight: 500;
    color: #ffffff;
    margin-bottom: 0.5vh;
}
.gfHeaderComp-item-area-content-description > p {
    margin-bottom: 0.5vh;
    color: #ffffff;
}
.gfHeaderComp-item-area-content-line {
    height: 60%;
    width: 1px;
    margin-top: 20%;
    margin-bottom: 20%;
    background-color: #ffffff;
    opacity: 0.43;
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