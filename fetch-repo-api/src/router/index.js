import vue from 'vue';
import VueRouter from 'vue-router';
import Home from '..views/HomeView.vue';

vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
];

const router = new VueRouter ({
    routes
});

export default routes