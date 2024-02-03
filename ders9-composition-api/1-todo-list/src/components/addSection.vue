<template>
    <section class="flex justify-center content-center mt-2 w-100">
    <input @keydown.enter="newItem" class="w-full bg-gray-600 rounded-md px-2 p-1" type="text" placeholder="What is that ?" >
  </section>
</template>


<script>
export default {
   props:{
    AddTodo: Function,
   },
   setup(props ){
    const newItem = (event) => {
      props. AddTodo(event.target.value);
      event.target.value = "";
    };
    return{
      newItem
    }
   }
}
</script>