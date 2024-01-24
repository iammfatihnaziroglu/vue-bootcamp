<template>
  <ul>
    <!-- <li v-for="todoItem in todoList" :key="todoItem.id" class="d-flex justify-content-between align-items-center" >
      <span>  {{ todoItem.text }}  </span>
      <button @click="deleteItem(todoItem)" class="sm red" >Sil</button>
    </li>-->
    <TodoListItem
      @delete-todo-item="$emit('delete-todo-item', $event)"
      v-for="todoItem in myData"
      :key="todoItem.id"
      :item="todoItem"
    />
  </ul>
</template>

<script>
import TodoListItem from "@/components/TodoListItem.vue";
export default {
  props: ["myData"],
  // props:{
  //   myData: {
  //     type: String,
  //     required: false,
  //     default: "",
  //   },
  // },
  //  data(){
  //      return{
  //          myData: "",
  //      }
  //  },
  components: {
    TodoListItem
  }
};
</script>