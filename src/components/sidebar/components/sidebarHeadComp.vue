<template>
<div class="sidebarHeadComp">
    <div class="sidebarHeadTitle"><h1>{{ currentTime }}</h1></div>
    <div class="sidebarHeadDescribution description">{{currentDay}}</div>
</div>
</template>
<script>
export default {
    data(){
        return {
            currentDay:'',
            currentTime:''
        }
    },
    created: function () {
        setInterval(function () {
            this.getNow()
        }.bind(this), 1000)
    },
    methods: {
        getNow: function() {
            const today = new Date();
            const month = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"][new Date().getMonth()];
            const day = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][new Date().getDay()]
            const date = day + "," + month + " " + this.add0(today.getDate()) + " " + this.add0((today.getFullYear()));
            const time = this.add0(today.getHours()) + ":" + this.add0(today.getMinutes()) + ":" + this.add0(today.getSeconds());

            // const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            // const date = today.toLocaleDateString()
            this.currentDay = date;
            this.currentTime = time;
            
        },
        add0(Completion) {
            return Completion < 10 ? "0"+Completion:Completion;
        }
    }
}
</script>
<style scoped>
.sidebarHeadComp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2vh;
    height: 8.5vh;
    border-bottom:1px #e8e8e8 solid;
}
.sidebarHeadTitle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5vh;
}
.sidebarHeadDescribution {
    display: flex;
    justify-content: center;
    margin-top: 0.7vh;
    margin-bottom: 2vh;
    color: #9ba4b4;
}
</style>