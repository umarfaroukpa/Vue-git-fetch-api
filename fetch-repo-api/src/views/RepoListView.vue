<template>
  <div class="repo-list">
    <div class="nav-link">
      <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/repos">Repositories</router-link>
      <a href="#" @click.prevent="showAlert">Portfolio</a>
    </div>
    </div>
    <RepoFilter :languages="languages" @search="handleSearch" @filter="handleFilter" />
    <RepoList :repositories="filteredRepositories" />
    <Pagination :currentPage="currentPage" :hasMore="hasMore" @prevPage="prevPage" @nextPage="nextPage" />
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
      username: 'umarfaroukpa',
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
        this.totalCount = parseInt(response.headers['x-total-count'])
          ? parseInt(response.headers['x-total-count'], 5)
          : this.currentPage * this.perPage + this.repositories.length;
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
      this.currentPage = 1;
      this.fetchRepos();
    },
    handleFilter(language) {
      this.filterLanguage = language;
      this.currentPage = 1;
      this.fetchRepos();
    }
  }
  
};
</script>

<style scoped>

.nav-link{
  border-radius: 10px;
  border: solid 1px whitesmoke;
  padding: 8px;
  display: flex;
  flex-direction: column;
  margin: -50px 0 30px;
  
}

.nav {
  display: flex;
  justify-content: space-around;
  gap: 20px;
 
}



@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    align-items: center;
  }

  .repo-list {
    padding: 10px;
    margin: 10px;
  }
}
</style>
