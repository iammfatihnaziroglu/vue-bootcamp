const app = Vue.createApp({
    data(){
        return{
            showBorder: false,
            redBG: false,
            boxClass:"border green",
            bgColor:"cyan",
        };
    },
    computed:{
        boxClasses(){
            return {border : this.showBorder, red: this.redBG}
        }
    }
});
app.mount("#app");