<template>
  <h3>{{ title }} </h3>
  <input type="text" v-model="title" />
  <hr/>
  <button>{{ counter }}</button>
  <br/>
  <br/>
  <button @click="dec">-</button>
  <button @click="reset">Reset</button>
  <button @click="inc">+</button>
  <hr />
  <oddOrEven :counter="counter" @odd-event="alertMe" />

  <hr />
  <h1>User App</h1>
  <input type="text" v-model="state.personal.name" />
  <input type="text" v-model="state.personal.lname" />
  {{ state.personal }}
</template>
<script setup>
import { ref, reactive, watch } from "vue";
//! beforeCreate() created() ve data()
import oddOrEven from "./components/oddOrEven.vue";
import Utils from "./composables/Utils.js";
const { title, counter, inc, dec, reset, alertMe } = Utils();

//! UserApp
const state = reactive({
  personal: {
    name: "Carl",
    lname: null,
  },
  itemList: [],
});
// const itemList = ref([]);
watch(
  () => JSON.parse(JSON.stringify(state.personal)),
  (newPersonal, oldPersonal) => {
    console.log(oldPersonal);
    console.log(newPersonal);
  }
);

console.log("state :>> ", state.personal.name);
</script>