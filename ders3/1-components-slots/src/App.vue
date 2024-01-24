<template>
  <!-- <ModalDialog :onSave="onSave" :title="'ModalDialog Title'" :content="content" /> -->
  <ModalDialog :on-save="onSave" >
    <template #title>
      <h3>Slot ile Gelen Title Bilgisi</h3>
    </template>

    <template v-slot:content>
      <p class="text-green">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis iusto nobis odit aliquid cupiditate, in beatae eum tempora rem id
        ipsum aliquam, accusamus rerum numquam? Tempora optio itaque dicta!
      </p>
    </template>
    <!-- <template #content>
      <p class="text-green">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro veritatis iusto nobis odit aliquid cupiditate, in beatae eum tempora rem id
        ipsum aliquam, accusamus rerum numquam? Tempora optio itaque dicta!
      </p>
    </template> -->

    <template #default>
      Bu default olarak gösterilecek..
    </template>
  </ModalDialog>
</template>

<script>
import ModalDialog from "@/components/ModalDialog";
export default {
  components: {
    ModalDialog
  },
  data() {
    return {
      content: `<h3 class="text-red">title</h3>`
    };
  },
  methods: {
    onSave() {
      alert("Saved!!");
    }
  }
};
</script>