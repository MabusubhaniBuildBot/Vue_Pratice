<template>
    <div>
        <h1>LoginPage</h1>
        <form @submit.prevent="loginUser">
            <div class="login-group">
                <label for="email">Email</label>
                <input type="text" id="email" v-model="email" required>
            </div>
            <div class="login-group">
                <label for="password">Password</label>
                <input type="password" id="password" v-model="password" required>
            </div>
            <div class="login-group">
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        loginUser() {
            const userData = JSON.parse(localStorage.getItem('userData'))
            if (userData && userData.email === this.email && userData.password === this.password) {
                this.$router.push({ name: 'Dashboard' })
            } else {
                alert('Invalid email or password')
            }
        }

    }
}
</script>
<style>
.login-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input[type="text"],
input[type="password"] {
    width: 30%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

button[type="submit"] {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
</style>


  