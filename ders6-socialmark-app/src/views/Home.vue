<template>
  <AppHeader />
  <div class="flex flex-row">
    <Sidebar @category-changed="updateBookmarkList" />
    <AppBookmarkList :items="bookmarkList" />
  </div>
</template>


<script>
import Sidebar from "@/components/Home/Sidebar.vue";

export default {
  data() {
    return {
      bookmarkList: []
    };
  },
  components: {
    Sidebar
  },
  created() {
    this.$appAxios.get("/bookmarks?_embed=category&_embed=user").then(bookmark_list_response => {
      console.log("bookmark_list_response ==>", bookmark_list_response);
      this.bookmarkList = bookmark_list_response?.data || [];
    });
  },
  methods: {
    updateBookmarkList(categoryId) {
      this.$appAxios.get(`/bookmarks?_embed=category&_embed=user&categoryId=${categoryId}`).then(bookmark_list_response => {
        this.bookmarkList = bookmark_list_response?.data || [];
      });
    }
  }
};
</script>