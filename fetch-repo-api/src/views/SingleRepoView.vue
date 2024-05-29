<template>
  <div class="single-repo">
    <div v-if="repository">
      <h1>{{ repository.name }}</h1>
      <p>{{ repository.description }}</p>
      <p>Language: {{ repository.language }}</p>
      <p>Stars: {{ repository.stargazers_count }}</p>
      <p>Forks: {{ repository.forks_count }}</p>
      <p>Open Issues: {{ repository.open_issues_count }}</p>
      <a :href="repository.html_url" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      <button @click="goBack">Back to Main Page</button>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    owner: {
      type: String,
      required: true
    },
    repo: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      repository: null
    };
  },
  created() {
    this.fetchRepoDetails();
  },
  methods: {
    async fetchRepoDetails() {
      try {
        const response = await axios.get(`https://api.github.com/repos/${this.owner}/${this.repo}`);
        this.repository = response.data;
      } catch (error) {
        console.error('Error fetching repository details:', error);
        this.repository = null; // Set repository to null to handle error state in the template
      }
    },
    goBack() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.single-repo {
  padding: 20px;
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
a {
  background-color: #42b883;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
  color: white;
}
</style>
