<template>
    <div class="container">
      <h3 class="text-center">Todo App</h3>
      <hr class="my-2" />
      <label for="todoText"></label>
      <input @keydown.enter="addNewTodo" type="text" name="" id="todoText" placeholder="Type something..." >
      <ul>
        <li v-for="todoItem in todoList" :key="todoItem.id" class="d-flex justify-content-between align-items-center" >
          <span>  {{ todoItem.text }}  </span>
          <button @click="deleteItem(todoItem)" class="sm red" >Sil</button>
        </li>
      </ul>
      <small class="d-flex justify-content-end mt-1 green" >{{ todoList.length }} adet todo app var. </small>
    </div>
</template>

<script>
  export default{
    data(){
      return{
        todoList: [
          {id: 1, text: "Bootcamp Vue Ders #2.0"},
          {id: 2, text: "Bootcamp Vue Ders #2.1"},
          {id: 3, text: "Bootcamp Vue Ders #2.2"},
          {id: 4, text: "Bootcamp Vue Ders #2.3"},
          {id: 5, text: "Bootcamp Vue Ders #2.4"},
          {id: 6, text: "Bootcamp Vue Ders #2.5"},
          ],
      };
    },
    methods:{
      deleteItem(todoItem) {
        this.todoList = this.todoList.filter((t) => t !== todoItem );
      },
      addNewTodo(event){
      this.todoList.push({
        id: new Date().getTime(),
        text: event.target.value,
      });
      event.target.value = '';
      console.log(event.target.value);
    },
    },
    
  };
</script>