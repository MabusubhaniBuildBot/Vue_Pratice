<template>
    <div class="dashboard">
      <h2>Welcome, {{ userData.name }}</h2>
      <p>Email: {{ userData.email }}</p>
      <p>Password: {{ userData.password }}</p>
      <p>Confirm Password: {{ userData.confirmPassword }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userData: {},
      };
    },
    created() {
      const userData = JSON.parse(localStorage.getItem("userData"));
      if (userData) {
        this.userData = userData;
      }
    },
  };
  </script>
  
  <style>
  .dashboard {
    max-width: 400px;
    margin: 0 auto;
  }
  
  h2 {
    margin-bottom: 20px;
  }
  
  p {
    margin-bottom: 10px;
  }
  </style>
  