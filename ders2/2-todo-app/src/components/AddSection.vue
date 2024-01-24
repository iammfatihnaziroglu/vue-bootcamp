<template>
  <label for="todoText"></label>
  <input
    v-model="todoText"
    @keydown.enter="addNewTodo"
    type="text"
    name
    id="todoText"
    placeholder="Type something..."
  />
</template>

<script>
export default {
  data() {
    return {
      todoText: null
    };
  },
  methods: {
    addNewTodo() {
      this.$emit("add-todo", this.todoText);
      this.todoText = null;
    }
  }
};
</script>