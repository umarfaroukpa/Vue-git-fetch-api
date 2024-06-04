<template>
  <div class="home">
    <div class="nav-link">
      <div class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/repos">Repositories</router-link>
      <a href="#" @click.prevent="showAlert">Portfolio</a>
    </div>
    </div>
    <div class="bio">
     <div class="bio-cent">
      <img src="/src/assets/IMG-20220705-WA0009-removebg-preview.png" alt="My-Pic" class="My-bio-image" />
      <div class="bio-content">
        <h3>Umar Farouk</h3>
        <h4>Frontend Developer</h4>
        <button>Contact Me</button>
        <button>My CV</button>
        <h5>My Skills: <br>React Nextjs Vuejs Typescript</h5>
      </div>
    </div>
    </div>
  </div>
  <div class="footer"><footer> Umar Farouk &copy;2024</footer></div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    showAlert() {
      window.alert('Coming Soon');
    }
  }
};
</script>

<style scoped>
.home {
  text-align: center;
  color: whitesmoke;
}


footer{
  color: whitesmoke;
}

.footer{
  position: absolute;
  bottom: 0;
  left: 0;
 right: 0;
}

.nav-link{
  border-radius: 10px;
  border: solid 1px whitesmoke;
  padding: 8px;
  display: flex;
  flex-direction: column;
}

.nav {
  display: flex;
  justify-content: space-around;
  gap: 20px;
 
}

button{
  background-color:  #D0B8AC;
  color: whitesmoke;
  margin: 5px;
  border: solid 1px;
  border-radius: 10px;
  padding: 7px;
  border-bottom: whitesmoke solid 6px;
  pointer: cursor;
}

button:hover{
 background-color: #87573f;
}


.bio {
  background-color: #D0B8AC;
	border-radius: 5px;
	box-shadow: 0px 10px 20px -10px;
  color: whitesmoke;
	position: relative;
  left: 400px;
  top: 15px;
	width: 350px;
	max-width: 100%;
  padding: 20px;
  text-align: center;
}


.bio-content {
  text-align: center;
  margin-top: -18px;
  margin-bottom: -25px;
}

img{
  width: 250px;
  height: 200px;
  border: 1px solid whitesmoke;
	border-radius: 50%;
	padding: 7px;
}



@media (max-width: 600px) {

  .home{
    width: 100%;
    height: 100%;
  }

  .bio {
    left: auto;
    width: auto;
    margin: 10px;
    padding: 10px;
  }

  .nav {
    flex-direction: column;
  }

  footer{
    margin-top: -65px;
  }

}
</style>
