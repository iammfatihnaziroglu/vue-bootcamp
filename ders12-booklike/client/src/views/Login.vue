<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Login</h3>
    {{ }}
    <input v-model="userData.username" type="text" placeholder="Username" class="input mb-3" />
    <input v-model="userData.password" type="password" placeholder="Password" class="input mb-3" />
    <button @click="onSubmit" class="default-button">Login</button>
    <span class="text-center mt-3 text-sm">
      <router-link :to="{name: 'HomePage'}" class="text-cancel hover:text-gray">Cancel</router-link>
    </span>
    <span class="text-center mt-3 text-sm">
      Not a Member,
      <router-link
        :to="{name: 'RegisterPage'}"
        class="text-red-900 hover:text-green"
      >Become a Member!</router-link>
    </span>
  </div>
</template>


<script>
import CryptoJs from "crypto-js";
export default {
  data() {
    return {
      userData: {
        username: null,
        password: null
      }
    };
  },
  methods: {
    onSubmit() {
      const password = CryptoJs.HmacSHA1(this.userData.password, this.$store.getters._saltKey).toString();
      this.$appAxios
        .get(`/users?username=${this.userData.username}&password=${password}`)
        .then(login_response => {
          if (login_response?.data?.length > 0) {
            this.$store.commit("setUser", login_response?.data[0]);
            this.$router.push({ name: "HomePage" });
          } else {
            alert("User Not Found!");
          }
          console.log(login_response);
        })
        .catch(e => console.log(e));
      //.finally(()=> this.loader = false)
    }
  }
};
</script>