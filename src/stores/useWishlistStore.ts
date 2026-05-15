import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Tour } from '../types';

export const useWishlistStore = defineStore('wishlist', () => {
  const wishlist = ref<Tour[]>([]);

  const wishlistCount = computed(() => wishlist.value.length);

  function add(tour: Tour) {
    if (!wishlist.value.find(t => t.id === tour.id)) {
      wishlist.value.push(tour);
    }
  }

  function remove(tourId: number) {
    wishlist.value = wishlist.value.filter(t => t.id !== tourId);
  }

  function clear() {
    wishlist.value = [];
  }

  return { wishlist, wishlistCount, add, remove, clear };
});