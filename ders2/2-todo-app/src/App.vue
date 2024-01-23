<template>
    <div class="container">
      <h3 class="text-center">Todo App</h3>
      <hr class="my-2" />
      <label for="todoText"></label>
      <input type="text" name="" id="todoText" placeholder="Type something..." >
      <ul>
        <li v-for="i in 5" :key="i" class="d-flex justify-content-between align-items-center" >
          <span>Todo Item #{{ i }}  </span>
          <button class="sm red" >Sil</button>
        </li>
      </ul>
    </div>
</template>