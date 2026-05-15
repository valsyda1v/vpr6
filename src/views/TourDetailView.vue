<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
const id = Number(route.params.id);
</script>
<template>
  <div class="detail-page">
    <h2>Деталі туру №{{ id }}</h2>
  </div>
</template>