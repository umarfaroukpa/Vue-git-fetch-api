<template>
  <div class="not-found">
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <button @click="goHome">Go to Home</button>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
}
button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #42b883;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #38a169;
}
</style>
