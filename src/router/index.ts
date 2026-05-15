import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/tours', name: 'tours', component: () => import('../views/ToursView.vue') },
    { path: '/tours/:id', name: 'tour-detail', component: () => import('../views/TourDetailView.vue') },
    { path: '/wishlist', name: 'wishlist', component: () => import('../views/WishlistView.vue') }
  ]
});

export default router;