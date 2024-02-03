<template>
  <h3>{{ result }}</h3>
  {{ counter }}
</template>
  <script setup>
import { computed, watch } from "vue";
const props = defineProps({ counter: Number });
const emit = defineEmits(["odd-event"]);
// console.log(props.counter);
const result = computed(() => (props.counter % 2 === 0 ? "Even" : "Odd"));

watch(result, result => {
  if (result === "Odd") emit("odd-event", true);
});
</script>