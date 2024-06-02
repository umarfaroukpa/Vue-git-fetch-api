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
  color: whitesmoke;
}

button{
  background-color: #D0B8AC;
}

button:hover {
  background-color: #87573f;
}

@media (max-width: 768px) {
  .bio {
    left: auto;
    width: auto;
    margin: 10px;
    padding: 10px;
  }

  .nav {
    flex-direction: column;
  }
}
</style>
