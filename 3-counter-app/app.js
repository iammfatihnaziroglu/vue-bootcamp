const app = Vue.createApp({
    data(){
        return{
            counter: 0,
            counter2: 0,
        };
    },
    methods: {
       
    },
    computed:{
         getCounterResult(){
            console.log ('Counter1 Çalışmaktadır!')
            return this.counter > 5 ? 'BÜYÜK' : 'KÜÇÜK'
        },
        getCounter2Result(){
            console.log ('Counter2 Çalışmaktadır!')
            return this.counter2 > 5 ? 'BÜYÜK' : 'KÜÇÜK'
        }
    },
    watch:{
        counter(newValue, oldValue){
        console.log("Counter 1", oldValue, "=>", newValue);
        },
        counter2(newValue, oldValue){
            console.log("Counter 2", oldValue, "=>", newValue);
            },
        getCounterResult(newValue, oldValue){
            console.log("Counter 1", oldValue, "=>", newValue);
        },
        getCounter2Result(newValue, oldValue){
            console.log("Counter 2", oldValue, "=>", newValue);  
        }
    }

    // methods:{
    //     inc(){
    //         this.counter++;
    //     },
    //     dec(){
    //         this.counter--;
    //     },
    // },
}).mount("#app");