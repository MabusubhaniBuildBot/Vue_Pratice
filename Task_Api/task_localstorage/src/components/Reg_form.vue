<template>
  <div class="registration-form">
    <h2>Register</h2>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" v-model="confirmPassword" required />
      </div>
      <div class="form-group">
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  setup() {
    const router = useRouter();

    const registerUser = () => {
      if (instance.proxy.password === instance.proxy.confirmPassword) {
        // Passwords match - proceed with registration
        const userData = {
          name: instance.proxy.name,
          email: instance.proxy.email,
          password: instance.proxy.password,
          confirmPassword: instance.proxy.confirmPassword,
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        router.push("/login"); // navigate to login page
      } else {
        // Passwords do not match - show error message
        console.log("Passwords do not match. Please try again.");
        alert("Passwords do not match. Please try again.");
      }
    };




    const instance = getCurrentInstance();

    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      registerUser,
    };
  },
});
</script>

<style scoped>
.registration-form {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
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
