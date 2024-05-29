import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import SingleRepoView from '@/views/SingleRepoView.vue';
import NotFound from '@/views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/repo/:owner/:repo',
    name: 'SingleRepo',
    component: SingleRepoView,
    props: route => ({ owner: route.params.owner, repo: route.params.repo })
  },
  {
    path: '/:catchAll(.*)', 
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
