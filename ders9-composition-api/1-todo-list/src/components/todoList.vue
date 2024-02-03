<template>
  <section class="mt-4">
    <TodoListItem @delete-event="$emit(`delete-event`, $event)" v-for="todoItem in todoList" :key="todoItem.id" :todo="todoItem" />
    <Summary :todoList="todoList" />
    <small>There are {{todoLength}} number of items </small>
  </section>
</template>

<script>
import TodoListItem from "./todoListItem.vue";
import Summary from "./Summary.vue";
import {computed} from 'vue';
export default {
  components: { TodoListItem, Summary },
  props:{
        todoList: Array,
    },
    setup(props){
        props.todoList
        const todoLength = computed (() => props.todoList.length);
        return {
            todoLength
        }
    }
};
</script>