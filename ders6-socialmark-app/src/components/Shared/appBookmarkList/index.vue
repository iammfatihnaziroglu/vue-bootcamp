<template>
     <div>
        <div class="p-2 grid grid-cols-8 gap-4 flex-container">
         <BookmarkListItem v-for="i in 15" key="i" />
        </div>
     </div>
</template>


<script>
import BookmarkListItem from './BookmarkListItem.vue';
export default {
    components: {
        BookmarkListItem,
    }
}
</script>