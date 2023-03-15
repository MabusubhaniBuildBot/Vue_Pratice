<template>
    <div>
        <button @click="navigateToNewPage">Go to New Page</button>
    </div>
</template>
  
<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
    name: 'MyComponent',
    setup() {
        const router = useRouter()

        const navigateToNewPage = () => {
            router.push('/new-page')
        }

        return {
            navigateToNewPage
        }
    }
})
</script>
  