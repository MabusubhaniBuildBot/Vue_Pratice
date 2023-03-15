<template>
    <div>
      The fixed time is: {{ fixedTime }}
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fixedTime: ''
      }
    },
    mounted() {
      const date = new Date()
      date.setHours(9)
      date.setMinutes(30)
      date.setSeconds(0)
  
      this.fixedTime = date.toLocaleTimeString()
    }
  }
  </script>
  