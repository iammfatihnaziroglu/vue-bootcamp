<template>
     <div>
        <div class="p-2 gap-4 flex-container box-content">
         <BookmarkListItem v-for="item in items" key="item.id" :item="item" />
        </div>
     </div>
</template>


<script>
import BookmarkListItem from './BookmarkListItem.vue';
export default {
    components: {
        BookmarkListItem,
    },
    props:{
        items: {
            type: Array,
            required: true,
            default: () => []
        }
    },
}
</script>