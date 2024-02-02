<template>
 <div class="w-screen h-screen bg-gray-400 pt-5">
 <div class="bg-gray-700 rounded-md shadow-md text-white w-1/2 mx-auto p-3">
   <h3 class="text-center text-2xl ">Todo List</h3>
    <AddSection/>
    <TodoList/>

 </div>
</div>
</template>


<script>
import AddSection from './components/addSection.vue';
import TodoList from './components/todoList.vue';
export default {
  components:{ AddSection, TodoList, AddSection },
}
</script>