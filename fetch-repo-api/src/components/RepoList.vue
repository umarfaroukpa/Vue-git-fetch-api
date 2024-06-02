<template>
  <div class="repo-list">
    <div v-for="repo in repositories" :key="repo.id" class="repo-item">
      <router-link :to="`/repo/${repo.owner.login}/${repo.name}`">{{ repo.name }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    repositories: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.repo-list {
  position: relative;
  left: 360px;
  width: 30vw;
  border: solid 1px whitesmoke;
  border-radius: 15px;
  margin: 30px 0 40px;
  padding: 20px;
  
}

.repo-item {
  margin: 10px 0;
  border: 1px solid whitesmoke;
  border-radius: 8px;
  padding: 3px;
  cursor: pointer;
  box-shadow: 0px 10px 20px -10px;
  
}

@media (max-width: 768px) {
  .repo-list {
    left: auto;
    width: auto;
    margin: 10px;
    padding: 10px;
  }

  .repo-item{
    box-shadow: none;
  }
}
</style>
