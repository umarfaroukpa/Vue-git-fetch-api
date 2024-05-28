<template>
  <div>
    <ul>
      <li v-for="repo in repositories" :key="repo.id">{{repo.name}}</li>
    </ul>
  </div>
</template>

<script>
  export default{
    props: ['repositories']
  }
</script>