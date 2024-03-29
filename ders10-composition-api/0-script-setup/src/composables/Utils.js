import { ref, onMounted } from "vue";
export default function () {
  const title = ref("Başlık");
  const counter = ref(0);
  const inc = () => {
    counter.value++;
  };
  const reset = () => {
    counter.value = 0;
  };
  const dec = () => {
    counter.value--;
  };
  const alertMe = (info) => {
    console.log(info);
  };

  onMounted(() => {
    console.log("Mounted esnasında yapılabilecekler burada...");
  });

  return { title, counter, inc, dec, reset, alertMe };
}