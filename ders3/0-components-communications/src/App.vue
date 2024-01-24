<template>
  <div class="container text-center">
    <UserSection />
  </div>
</template>
  
  <script>
import UserSection from "@/components/UserSection";
export default {
  components: {
    UserSection
  },
  data() {
    return {
      provideData: {
        userList: ["Fatih", "Mehmet", "Ankara", "Isparta"]
      }
    };
  },
  methods: {
    newItem(item) {
      this.provideData.userList.push(item);
    }
  },
  provide() {
    return {
      userList: this.provideData.userList,
      newItem: this.newItem
    };
  }
};
</script>