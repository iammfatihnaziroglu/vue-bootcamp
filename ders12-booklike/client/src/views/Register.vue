<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Register</h3>
    <input v-model="userData.fullname" type="text" placeholder="Full Name" class="input mb-3" />
    <input v-model="userData.username" type="text" placeholder="User Name" class="input mb-3" />
    <input v-model="userData.password" type="password" placeholder="Password" class="input mb-3" />
    <button @click="onSave" class="default-button">Register</button>
    <span class="text-center mt-3 text-sm">
      <router-link :to="{name: 'HomePage'}" class="text-cancel hover:text-gray">Cancel</router-link>
    </span>
    <span class="text-center mt-3 text-sm">
      Already a Member,
      <router-link :to="{name: 'LoginPage'}" class="text-red-900 hover:text-black">Login!</router-link>
    </span>
  </div>
</template>


<script>
import CryptoJs from "crypto-js";

export default {
  data() {
    return {
      userData: {
        fullname: null,
        username: null,
        password: null
      }
    };
  },
  methods: {
    onSave() {
      const password = CryptoJs.HmacSHA1(this.userData.password, this.$store.getters._saltKey).toString();
      this.$appAxios.post("/users", { ...this.userData, password }).then(registered_user_response => {
        console.log("registered_user_response =>>", registered_user_response);
        this.$router.push({ name: "HomePage" });
      });
      // const decryptedPassword = CryptoJs.AES.decrypt(cryptedPassword, key).toString(CryptoJs.enc.Utf8);
      // console.log("decryptedPassword ==>", decryptedPassword);
      //console.log(this.userData);
    }
  }
};
</script>