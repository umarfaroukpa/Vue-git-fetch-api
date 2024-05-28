<template>
  <div>
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
