<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  width: calc(1920 / 1080 * (var(--basic-size) * 100));
  height: calc(1080 / 1080 * (var(--basic-size) * 100));
}
</style>
