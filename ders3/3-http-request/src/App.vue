<template>
  <div class="container">
    <h3>Alışveriş Listesi</h3>
    <hr />
    <div class="my-2">
      <input type="text" placeholder="Ne alacaksın?" @keydown.enter="onSave" />
    </div>
    <ul>
      <li class="d-flex justify-content-between align-items-center">
        <span>Eleman 1</span>
        <button class="sm red">Sil</button>
      </li>
      <li class="d-flex justify-content-between align-items-center">
        <span>Eleman 2</span>
        <button class="sm red">Sil</button>
      </li>
      <li class="d-flex justify-content-between align-items-center">
        <span>Eleman 3</span>
        <button class="sm red">Sil</button>
      </li>
    </ul>
    <small class="text-red d-flex justify-content-end align-items-center mt-1">5 adet alınacak ürün.</small>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {};
  },
  methods: {
    onSave(e) {
      const saveObject = {
        title: e.target.value,
        create_at: new Date(),
        compeleted: false
      };
      axios.post("http://localhost:3000/items", saveObject).then(save_response => {
        console.log(save_response);
        e.target.value = "";
        e.target.focus(); 
      })
    }
  }
};
</script>