<template>
  <div>
    <div class="table-header flex">
      <span class="text-left p-1 w-[125px] mr-10">Ürün Adı</span>
      <span class="text-left p-1 w-[95px] ml-2 mr-5">Fiyat</span>
      <span class="text-left p-1 w-[75px] ml-3 mr-1">Adet</span>
      <span class="p-1 ml-1 w-[75px]">Toplam</span>
    </div>
    <div class="table-body">
      <invoice-item v-for="item in items" :key="item.id" :item="item" />
      <button @click="AddInvoiceItem" class="mt-4 add-item-button">
        <svg
          class="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
        <span class="text-gray-400">Ekle</span>
      </button>
    </div>
  </div>
</template>
  <script setup>
import invoiceItem from "./invoiceItem.vue";
defineProps({ items: Array, AddInvoiceItem: Function });
</script>