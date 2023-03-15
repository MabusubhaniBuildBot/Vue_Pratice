<script lang="js">
export default {
    name: 'Popup',
    emits: ['close'],
    data() {
        return {
            name: '',
        }

    }
}
</script>

<template>
<div style="text-align: center;">
    <h4>This is a Popup</h4>
    <input type="text" v-model="name" />
    <button @click="$emit('close',name)">Close Popup</button>
</div>
</template>

<style lang="css" scoped></style>
