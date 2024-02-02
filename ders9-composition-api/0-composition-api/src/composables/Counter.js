import { ref, computed, watch } from "vue";

export default function(){
    const counter = ref(0);
    const oddOrEven = computed(() => {
      return counter.value % 2 === 0 ? "Even Number" : "Odd Number";
    });

    watch([counter, oddOrEven], ([newC, newO], [oldC, oldO]) => {
      console.log(oldC, "==>", newC);
      console.log(oldO, "==>", newO);
    });

    return {
        counter,
        oddOrEven
    }
}