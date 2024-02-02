<template>
  <h3>{{ title }}</h3>
  <input type="text" v-model="title" />
  {{ titleLengthMessage }}
  <p
    v-if="show"
  >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure eum enim, sunt consequuntur accusantium, recusandae voluptatum nostrum repellendus dolore illum distinctio! Quia saepe laborum officia ea tempora odit recusandae dolorem!</p>
  <hr />
  <button @click="toggleIt">Show Details</button>
  <hr />
  <h5>{{ counter }} {{ oddOrEven }}</h5>
  <button @click="counter--">Decrease</button>
  <button @click="counter = 0">Reset</button>
  <button @click="counter++">Enhance</button>
  <hr />
  <input type="text" v-model="searchText" />
  <p v-if="isTyping">Texting Now..</p>
</template>

<script>
import Header from './composables/Header.js'; 
import Toggle from './composables/Toggle.js'; 
import Counter from './composables/Counter.js'; 
import Search from './composables/Search.js'; 

// ref = reactive effect meaning!
export default {

  setup() {

    const {title, titleLengthMessage} = Header();
    const {show, toggleIt} = Toggle();
    const {counter, oddOrEven} = Counter();
    const {searchText, isTyping} = Search();


    return {
      title,
      show,
      toggleIt,
      titleLengthMessage,
      counter,
      oddOrEven,
      searchText,
      isTyping
    };
  }
};
</script>