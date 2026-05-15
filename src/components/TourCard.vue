<script setup lang="ts">
import type { Tour } from '../types';
import { useWishlistStore } from '../stores/useWishlistStore';

defineProps<{ tour: Tour }>(); // Типізація props 
const store = useWishlistStore();
</script>

<template>
  <div class="card">
    <img :src="tour.img" :alt="tour.destination">
    <h3>{{ tour.destination }}</h3>
    <p>Ціна: {{ tour.price }} грн | {{ tour.duration }} днів</p>
    <div class="actions">
      <RouterLink :to="{ name: 'tour-detail', params: { id: tour.id } }" class="btn">Детальніше</RouterLink>
      <button @click="store.add(tour)" class="btn secondary">У вибране</button>
    </div>
  </div>
</template>