<template>
  <div class="search">
    <input v-model="searchQuery" @input="onSearch" placeholder="Search Repositories"/>
    <select v-model="filterLanguage" @change="onFilter">
      <option value="">All Languages</option>
      <option v-for="language in languages" :key="language" :value="language">{{ language }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ['languages'],
  data() {
    return {
      searchQuery: '',
      filterLanguage: ''
    };
  },
  methods: {
    onSearch() {
      this.$emit('search', this.searchQuery);
    },
    onFilter() {
      this.$emit('filter', this.filterLanguage);
    }
  }
};
</script>

<style scoped>
  .search{
    margin: 20px 0 20px;
    color: whitesmoke;
   
   
  }

  input {
    border: none;
    padding: 4px;
    border-radius: 7px;
    margin: 5px;
    border: solid 1px whitesmoke;
    text-align: center;
    background-color: #D0B8AC;
    color: whitesmoke;
  }

  select{
    border: none;
    padding: 4px;
    border-radius: 7px;
    margin: 5px;
    border: solid 1px whitesmoke;
    text-align: center;
    background-color: #D0B8AC;
    color: whitesmoke;
  }

  @media (max-width: 768px) {
  .search {
    flex-direction: column;
    gap: 10px;
  }

  input, select {
    width: 100%;
  }
}
</style>