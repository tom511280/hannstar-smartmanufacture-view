<template>
<div class="topHeaderComp-external">
    <div class="topHeaderComp">
        <img src="https://picsum.photos/300/200" alt="">
        <div class="topHeaderComp-info">
            <div class="topHeaderComp-title">welcome</div>
            <div class="topHeaderComp-membername">tom wu</div>
        </div>
    </div>
</div>
</template>
<script>
</script>
<style scoped>
.topHeaderComp {
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
.topHeaderComp > img {
    width: 2vw;
    height: 3.7vh;
    margin-right: 1vw;
    border-radius: 50%;
}
.topHeaderComp > .topHeaderComp-info {
    margin-right: 0.5vw;
}
.topHeaderComp > .topHeaderComp-info > .topHeaderComp-title {
    font-family: Roboto;
    font-size: 1.3vmin;
    text-align: right;
    line-height: normal;
    color: #bbbfca;
}
.topHeaderComp > .topHeaderComp-info > .topHeaderComp-membername {
    font-family: Roboto;
    font-size: 1.3vmin;
    line-height: normal;
    text-align: right;
    color: #ffffff;

}
</style>