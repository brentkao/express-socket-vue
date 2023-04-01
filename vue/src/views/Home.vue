<script setup>
import { useHome } from '../stores/home';

const homePinia = useHome();
const { title, content } = homePinia.info;

</script>

<template>
  <div class="container">
    <p class="tit">{{ title }}</p>
    <p class="cont">{{ content }}</p>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: white;
}

.tit{
  font: 5em sans-serif;
}
.cont{
  font: 3em sans-serif;
}

</style>