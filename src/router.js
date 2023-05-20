import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Jobs from './views/Jobs.vue'
import Apply from './views/Apply.vue'
import Demo from './views/Demo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/apply',
    name: 'Apply',
    component: Apply
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
