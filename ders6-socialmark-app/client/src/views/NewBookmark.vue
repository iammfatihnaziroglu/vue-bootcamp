<template>
  <div class="login_register_container">
    <h3 class="text-2xl text-center mb-3">Add New</h3>
    <input ref="title" v-model="userData.title" type="text" placeholder="Title" class="input mb-3" />
    <input v-model="userData.url" type="text" placeholder="URL" class="input mb-3" />
    <select v-model="userData.categoryId" class="input mb-3">
      <option disabled value selected>Category</option>
      <option
        v-for="category in categoryList"
        :key="category.id"
        :value="category.id"
      >{{ category.name }}</option>
    </select>
    <textarea
      v-model="userData.description"
      placeholder="Description"
      class="input mb-3"
      cols="30"
      rows="10"
    ></textarea>
    <div class="flex items-center justify-end gap-x-1">
      <button @click="onSave" class="default-button">Save</button>
      <router-link :to="{ name: 'HomePage'}" class="secondary-button">Cancel</router-link>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      categoryList: [],
      userData: {
        title: null,
        url: null,
        categoryId: null,
        description: null,
        createdAt: null
      }
    };
  },
  mounted() {
    this.$appAxios.get("/categories").then(category_response => {
      //console.log(" category_response ==>", category_response );
      this.categoryList = category_response?.data || [];
    });

    // setTimeout(() => {
    //   console.log(this.$.title);
    // }, 1000);

    //  ref ile elemente erişip etki edebiliriz.
    console.dir(this.$refs.title);

    //  focus özelliği
    this.$refs.title.focus();
  },

  methods: {
    onSave() {
      console.log(this.userData);
      console.log(this._getCurrentUser);
      const saveData = {
        ...this.userData,
        userId: this._getCurrentUser?.id,
        createdAt: new Date()
      };

      this.$appAxios.post("/bookmarks", saveData).then(save_bookmark_response => {
        console.log("save_bookmark_response ==>", save_bookmark_response);
        Object.keys(this.userData)?.forEach(field => (this.userData[field] = null));
        this.$router.push({ name: "HomePage" });
      });
    }
  },
  computed: {
    ...mapGetters(["_getCurrentUser"])
  }
};
</script>