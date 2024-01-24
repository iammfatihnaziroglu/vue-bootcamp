<template>
  <div class="container">
    <h3 class="text-center">Todo App</h3>
    <hr class="my-2" />
    <AddSection @add-todo="addNewTodo" />
    <TodoList @delete-todo-item="deleteItem" :myData="todoList" />
    <ResultBar :itemCount="todoList.length" />
  </div>
</template>

<script>
import AddSection from "@/components/AddSection.vue";
import TodoList from "@/components/TodoList.vue";
import ResultBar from "@/components/ResultBar.vue";
export default {
  components: {
    AddSection,
    TodoList,
    ResultBar
  },
  created() {
    setTimeout(() => {
      this.todoList = [
        { id: 1, text: "Bootcamp Vue Ders #2.0" },
        { id: 2, text: "Bootcamp Vue Ders #2.1" },
        { id: 3, text: "Bootcamp Vue Ders #2.2" },
        { id: 4, text: "Bootcamp Vue Ders #2.3" },
        { id: 5, text: "Bootcamp Vue Ders #2.4" },
        { id: 6, text: "Bootcamp Vue Ders #2.5" }
      ];
    }, 2000);
  },
  data() {
    return {
      todoList: []
    };
  },
  methods: {
    testEvent(data) {
      alert(data);
    },
    deleteItem(todoItem) {
      this.todoList = this.todoList.filter(t => t !== todoItem);
    },
    addNewTodo(todo) {
      this.todoList.push({
        id: new Date().getTime(),
        text: todo
      });
    }
  }
};
</script>