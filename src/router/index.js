import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MissionView from '../views/MissionView.vue'
import HistoryView from '../views/HistoryView.vue'
import DatabaseView from '../views/DatabaseView.vue'
import GetInvolvedView from '../views/GetInvolvedView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/mission',
    name: 'mission',
    component: MissionView
  },
  {
    path: '/history',
    name: 'history',
    component: HistoryView
  },
  {
    path: '/database',
    name: 'database',
    component: DatabaseView
  },
  {
    path: '/get-involved',
    name: 'get-involved',
    component: GetInvolvedView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router

