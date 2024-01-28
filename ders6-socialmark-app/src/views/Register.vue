<template>
    <div class="login_register_container">
      <h3 class="text-2xl text-center mb-3">Register</h3>
      <input v-model= "userData.fullname" type="text" placeholder="Full Name" class="input mb-3" />
      <input v-model= "userData.username" type="text" placeholder="User Name" class="input mb-3" />
      <input v-model= "userData.password" type="password" placeholder="Password" class="input mb-3" />
      <button @click= "onSave" class="default-button">Register</button>
      <span class="text-center mt-3 text-sm">
        <router-link :to= "{name: 'HomePage'}" class="text-cancel hover:text-gray">Cancel</router-link>
      </span>
      <span class="text-center mt-3 text-sm">
        Already a Member,
        <router-link :to="{name: 'LoginPage'}" class= "text-red-900 hover:text-black" >Login!</router-link>
      </span>
    </div>
</template>


<script>
export default {
  data(){
    return{
      userData: {
        fullname: null,
        username: null,
        password: null
      },
    };
  },
  methods: {
    onSave(){
      console.log(this.userData);
    }
  }
}
</script>