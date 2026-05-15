<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { useWishlistStore } from './stores/useWishlistStore';

const store = useWishlistStore();
</script>

<template>
  <header class="header">
    <h1>Побач Світ — Твоя SPA подорож</h1>
  </header>

  <nav class="nav">
    <RouterLink to="/">Головна</RouterLink>
    <RouterLink to="/tours">Каталог турів</RouterLink>
    <RouterLink to="/wishlist">Вибране ({{ store.wishlistCount }})</RouterLink>
  </nav>

  <main>
    <RouterView /> </main>

  <footer class="footer">
    <p>&copy; 2026 SPA Турагентство</p>
  </footer>
</template>

<style>
.router-link-active { border-bottom: 2px solid var(--accent); }
</style>