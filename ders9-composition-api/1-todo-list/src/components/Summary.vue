<template>
  <div>
    <div class="text-green-500"> There are {{completed}} completed missions.</div>
    <div class="text-red-500">There are {{uncompleted}} uncompleted missions. </div>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    todoList: Array
  },
  setup(props) {
    const completed = computed(() => props.todoList.filter(i => i.completed).length);
    const uncompleted = computed(() => props.todoList.filter(i =>!i.completed).length);
    return{
      completed,
      uncompleted
    }
  }
};
</script>