<template>
<div class="nav-link">
   <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/repos">Repositories</router-link>
      <a href="#" @click.prevent="showAlert">Portfolio</a>
    </div>
</div>
  <div class="single-repo">
    <h2> Single Repository Details</h2>
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
 name: 'SingleRepoView',
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
        window.alert('Failed to load repository details. Due To Bad Network.');
        this.repository = null; 
      }
    },
    goBack() {
      this.$router.push('/');
    },
     showAlert() {
      window.alert('Coming Soon');
    },
  }
};
</script>

<style scoped>
.single-repo {
    width: 40vw;
  padding: 20px;
  color: whitesmoke;
  border: solid 1px;
  border-radius: 20px;
  border-bottom: 6px whitesmoke;
  box-shadow: 0px 10px 20px -10px;
  position: relative;
  left: 300px;
}

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
button {
    background-color: #D0B8AC;
}

button :hover{
  background-color: #87573f;
}

.single-repo a{
  background-color: #D0B8AC;
  color: whitesmoke;
  margin: 5px;
  border: solid 1px;
  border-radius: 10px;
  padding: 7px;
  border-bottom: whitesmoke solid 6px;
  cursor: pointer;
}

.single-repo a:hover {
  background-color: #87573f;
}

@media (max-width: 768px) {
  .single-repo {
    left: auto;
    width: auto;
    margin: 10px;
    padding: 10px;
  }

  .nav {
    flex-direction: column;
    align-items: center;
  }
}
</style>
