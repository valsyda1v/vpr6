<script setup lang="ts">
import { useWishlistStore } from '../stores/useWishlistStore'
const store = useWishlistStore();
</script>
<template>
  <div class="wishlist-page">
    <h2>Моє вибране ({{ store.wishlistCount }})</h2>
  </div>
</template>