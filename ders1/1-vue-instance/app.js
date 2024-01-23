const app = Vue.createApp({
    data(){
        return{
            title: "Vue.js Bootcamp 1.Gün",
            content: "Lorem ipsum dolor sit amet...",
            github:{
                target:"_blank",
                title:"Github Profilimi Ziyaret Etmek İçin Tıklayınız!",
                url:"https://github.com/iammfatihnaziroglu",
                alt:"m.fatih github profili",
            },
            owner:"SÜPER BİR BİREY! HAYRANLIK DUYULASI! YÜCE SEZAR!",
            coords:{
                x: 45,
                y: 67,
            }
            
        }
    },
    methods: {
        changeTitle(pTitle){
        this.title = pTitle;
        },
        updateCoords(message, event){
        console.log(message, event.x, event.y);
        this.coords = {
            x: event.x,
            y: event.y,
        }
        }
    },
    
}).mount("#app");

// function changeTitle(){

// }