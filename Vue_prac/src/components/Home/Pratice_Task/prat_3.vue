<template>
    <hr />
    <h1 id="B">Prop Types and Validations</h1>
    <h2>Hello {{ title }}</h2>
    <h2>--> {{ likes }}</h2>
</template>
<script>
export default {
    name: 'Prat_3',
    props: {
       title: String,
       likes: Number,
    },
}
</script>
<style scoped>
#B {
    color: #0A2229;
}
</style>