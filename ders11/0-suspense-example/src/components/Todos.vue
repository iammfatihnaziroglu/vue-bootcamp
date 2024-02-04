<script setup>
import { ref } from "vue";

const todoList = ref([]);
//const isLoad = ref(false);

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    todoList.value = json;
   // isLoad.value = true;
  });
</script>


<template>
  <h3>Todos</h3>
  <ul>
    <li v-for="todo in todoList" :key="todo.id ">{{ todo.title }}</li>
  </ul>
  <!-- <h3 v-else>Loading...</h3> -->
</template>

