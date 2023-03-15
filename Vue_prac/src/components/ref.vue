<template>
    <div>
        <p>Name: {{ name }}</p>
        <p>Email: {{ email }}</p>
    </div>
</template>
  
<script>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
    name: 'UserDataComponent',
    setup() {
        const route = useRoute()
        const name = computed(() => route.query.name || '')
        const email = computed(() => route.query.email || '')

        return {
            name,
            email
        }
    }
})
</script>
  