<script setup>
// import Input from "./components/Forms/Input.vue";
// import Select from "./components/Forms/Select.vue";
// import Label from "./components/Forms/Label.vue";

import * as Form from './components/form-components';

</script>


<template>
  <!-- <div>
    <Label>
      Heading
      <Input />
    </Label>
     <Label> 
      Category
      <Select />
    </Label>
  </div> -->

  <div>
    <Form.Label>
      Heading
      <Form.Input />
    </Form.Label>
     <Form.Label> 
      Category
      <Form.Select />
    </Form.Label>
  </div>
</template>

