<template>
    <div class="login_register_container">
      <h3 class="text-2xl text-center mb-3">Login</h3>
      <input type="text" placeholder="Username" class="input mb-3" />
      <input type="password" placeholder="Password" class="input mb-3" />
      <button class="default-button">Login</button>
      <span class="text-center mt-3 text-sm">
        <router-link :to= "{name: 'HomePage'}" class="text-cancel hover:text-gray">Cancel</router-link>
      </span>
      <span class="text-center mt-3 text-sm">
        Not a Member,
        <router-link :to= "{name: 'RegisterPage'}" class="text-red-900 hover:text-green">Become a Member!</router-link>
      </span>
    </div>
</template>