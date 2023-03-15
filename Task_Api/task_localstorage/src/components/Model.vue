<template>
    <div class="modal-overlay">
        <div class="modal">
            <button class="close" @click="$emit('close')">X</button>
            <h3 class="card-title">{{ user.name }}</h3>
            <p class="card-text"><strong>Email:</strong> {{ user.email }}</p>
            <p class="card-text"><strong>Password:</strong> {{ user.password }}</p>
            <p class="card-text"><strong>Confirm Password:</strong> {{ user.confirmPassword }}</p>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "Modal",
    props: {
        user: {
            type: Object,
            required: true
        }
    }
};
</script>
  
<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    position: relative;
    background-color: white;
    padding: 1rem;
    border-radius: 5px;
    max-width: 90%;
    max-height: 90%;
    overflow-y: auto;
}

.close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5rem;
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>
  