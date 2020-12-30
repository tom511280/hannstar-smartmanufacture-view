<template>
<div class="topHeader-external">
    <div class="topHeader">
        <img src="https://picsum.photos/300/200" alt="">
        <div class="topHeader-info">
            <div class="topHeader-title">welcome</div>
            <div class="topHeader-membername">tom wu</div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.topHeader-external {
    /* display: flex;
    justify-content: flex-end; */
}
.topHeader {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    height: 5.5vh;
    background-color: #394867;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    z-index:998
}
.topHeader > img {
    width: 2vw;
    height: 3.7vh;
    margin-right: 1vw;
}
.topHeader > .topHeader-info {
    margin-right: 0.5vw;
}
.topHeader > .topHeader-info > .topHeader-title {
    font-family: Roboto;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: right;
    color: #bbbfca;
}
.topHeader > .topHeader-info > .topHeader-membername {
    font-family: Roboto;
    font-size: 13px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: right;
    color: #ffffff;

}
</style>