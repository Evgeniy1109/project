import { createRouter, createWebHashHistory } from 'vue-router'

import vCatalog from "../components/v-catalog.vue";
import vCard from "../components/v-card.vue";
const routes = [
  {
    path: '/',
    name: 'catalog',
    component: vCatalog,
  },
  {
    path: '/card',
    name: 'card',
    component: vCard,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
