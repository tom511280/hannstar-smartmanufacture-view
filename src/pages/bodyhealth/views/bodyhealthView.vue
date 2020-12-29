<template>
    <div class="bodyhealthView">
        <div class="heart-rate-monitor"><piechart></piechart></div>
        <div class="sleep-monitor"><piechart></piechart></div>
        <div class="sports-monitor"><piechart></piechart></div>
    </div>
</template>
<script>
import piechart from '@/components/piechart.vue'

export default {
    components: {
        piechart,
    },
}
</script>
<style scoped>
.bodyhealthView {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    align-items: center;
    background-color: #f1f2f3;
    height: 94.5vh;
    margin-left: 16vw;
}
.bodyhealthView > .heart-rate-monitor {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 28vw;
}
.bodyhealthView > .sleep-monitor {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 28vw;
}
.bodyhealthView> .sports-monitor {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 28vw;
}
</style>