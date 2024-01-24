<template>
  <!-- <small class="d-flex justify-content-end mt-1 green" >{{ todoList.length }} adet todo app var. </small> -->
  <small class="d-flex justify-content-end mt-1 green">{{ itemCount }} adet todo app var.</small>
</template>

<script>
export default {
  props: ["itemCount"]
};
</script>