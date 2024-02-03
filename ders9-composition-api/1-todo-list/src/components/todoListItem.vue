<template>
    <div class="flex justify-between items-center bg-gray-600 rounded-md px-2 p-1 mt-2">
    <label :for="`todo_${todo.id}_completed`">
      <input v-model="todo.completed" type="checkbox" :id="`todo_${todo.id}_completed`" class="mr-2">
      <span class="text-lg">{{todo.title}}</span>
    </label>
    <button @click="deleteItem" class="bg-red-800 rounded-md px-2 active:bg-red-900">Delete</button>
  </div> 
</template>


<script>
export default {
    props: {
        todo: Object
    },
    setup(props, {emit}){
      const deleteItem = () => {
        emit("delete-event", props.todo)
      }
      return{
        deleteItem
      }
    }
}
</script>