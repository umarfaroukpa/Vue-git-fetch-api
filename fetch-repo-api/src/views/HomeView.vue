<template>
  <div>
    <RepoFilter :languages="languages" @search="handleSearch" @filter="handleFilter"/>
    <RepoList :repositories="filteredRepositories"/>
    <Pagination :currentPage="currentPage" :hasMore="hasMore" @prevPage="prevPage" @nextPage="nextPage"/>
  </div>
</template>

<script>
import { fetchRepositories } from '@/services/github';
import RepoList from '@/components/RepoList.vue';
import Pagination from '@/components/Pagination.vue';
import RepoFilter from '@/components/RepoFilter.vue';

export default {
  components: {
    RepoList,
    Pagination,
    RepoFilter
  },
  data() {
    return {
      username: 'umarfaroukpa', // Replace with your GitHub username
      repositories: [],
      currentPage: 1,
      perPage: 5,
      totalCount: 0,
      searchQuery: '',
      filterLanguage: ''
    };
  },
  computed: {
    filteredRepositories() {
      let repos = this.repositories;

      if (this.searchQuery) {
        repos = repos.filter(repo => repo.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
      }

      if (this.filterLanguage) {
        repos = repos.filter(repo => repo.language === this.filterLanguage);
      }

      return repos;
    },
    hasMore() {
      return this.currentPage * this.perPage < this.totalCount;
    },
    languages() {
      const allLanguages = this.repositories.map(repo => repo.language);
      return [...new Set(allLanguages)].filter(Boolean);
    }
  },
  created() {
    this.fetchRepos();
  },
  methods: {
    async fetchRepos() {
      try {
        const response = await fetchRepositories(this.username, this.currentPage, this.perPage);
        this.repositories = response.data;
        this.totalCount = parseInt(response.headers['x-total-count'], 5);
      } catch (error) {
        console.error(error);
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.fetchRepos();
      }
    },
    nextPage() {
      if (this.hasMore) {
        this.currentPage++;
        this.fetchRepos();
      }
    },
    handleSearch(query) {
      this.searchQuery = query;
    },
    handleFilter(language) {
      this.filterLanguage = language;
    }
  }
};
</script>
