<template>
  <app-header/>
  <div class="container">
    <h3>Hi Stranger</h3>
    <p>This is a Vue!</p>
  </div>
  <CounterItem/> 
  <counterItem/>
</template>

<script>
import mfatih from '@/components/CounterItem.vue';
export default{
  components:{
    CounterItem: mfatih,
  },
};
</script>

<style>


</style>
