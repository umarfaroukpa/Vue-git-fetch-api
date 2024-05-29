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
  display: flex;
  flex-direction: column;
}
.repo-item {
  margin: 10px 0;
  border: solid black 1px;
  padding: 3px;
  cursor: pointer;
}
</style>
