<template>
  <div class="form-area card border p-2">
    <div class="mb-3">
      <label for="title" class="form-label">Heading</label>
      <input
        type="text"
        v-model="userData.title"
        class="form-control"
        id="title"
        placeholder="m.fatih..."
      />
    </div>
    <div class="mb-3">
      <label for="url" class="form-label">URL</label>
      <input
        type="text"
        v-model="userData.url"
        class="form-control"
        id="url"
        placeholder="https://..."
      />
    </div>
    <div class="mb-3">
      <label for="description" class="form-label">Description</label>
      <textarea
        class="form-control"
        v-model="userData.description"
        placeholder="This description is...."
        id="description"
        rows="3"
      ></textarea>
    </div>

    <div class="d-flex justify-content-end align-items-center">
      <button class="btn btn-sm btn-primary me-1" @click="onSave">Save</button>
      <button class="btn btn-sm btn-secondary" @click="$router.push({ name: 'HomePage' })">Cancel</button>
    </div>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      userData: {
        title: null,
        url: null,
        description: null
      }
    };
  },
  methods: {
    onSave() {
      console.log(this.userData);
      this.$appAxios.post("/bookmarks", this.userData).then(save_response => {
        console.log("save_response", save_response);
        this.resetData();
        this.$router.push("/");
      });
    },
    resetData() {
      Object.keys(this.userData).forEach(key => (this.userData[key] = null));
    }
  }
};
</script>