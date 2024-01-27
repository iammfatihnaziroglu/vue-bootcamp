<template>
    <h1 class="text-center">Details</h1>
     <h1> {{ $route.params.id }} </h1>
    <p>Descriptions will be here!</p>
    <button @click="goBack" class="default">Go Back</button>
</template>

<script>
export default {
    created() {
        console.log(this.$route)
    },
    methods: {
        goBack(){
            this.$router.push("/")
        },
    }
}
</script>