<template>
  <h1 class="text-center">Home</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque velit eius ullam exercitationem ab adipisci dicta distinctio maiores repellendus quo sint est quasi nobis, impedit excepturi voluptatibus? Pariatur, dicta dolore!</p>
  <input type="text" @keydown.enter="goToDetails" >
</template>


<script>
export default {
    methods:{
        goToDetails(e){
            this.$router.push({
                name: "DetailPage",
                params: {
                    id: e.target.value
                }
            });
            // this.$router.push(`/details/${e.target.value}`)
        }
    }
}
</script>