<template>
  <AppHeader />
  <div class="flex flex-row">
    <SidebarAccount />
    <!-- <component :is="$route.meta.componentName" :items="bookmarkList" /> -->
    <!-- {{ $log($route) }} -->
    <!-- <app-bookmark-list v-if="bookmarkList.length > 0" :items="bookmarkList" />
    <div v-else>Bookmark bulunmamaktadır..</div>-->
  </div>
</template>
  
  <script>
import SidebarAccount from "@/components/Account/sideBar";

export default {
  components: {
    SidebarAccount
  },
  data() {
    return {
      bookmarkList: []
    };
  },
  created() {
    this.$appAxios.get("/bookmarks?_embed=category&_embed=user").then(bookmark_list_response => {
      console.log("bookmark_list_response :>> ", bookmark_list_response);
      this.bookmarkList = bookmark_list_response?.data || [];
    });
  }
};
</script>