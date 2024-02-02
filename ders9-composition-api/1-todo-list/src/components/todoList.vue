<template>
  <section class="mt-4">
    <TodoListItem/>
    <Summary/>
  </section>
</template>

<script>
import TodoListItem from "./todoListItem.vue";
import Summary from "./Summary.vue";
export default {
  components: { TodoListItem, Summary }
};
</script>