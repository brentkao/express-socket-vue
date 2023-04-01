<script setup>
import { useHome } from '../stores/home';

const homePinia = useHome();
const { title, content } = homePinia.info;

</script>

<template>
  <div class="container">
    <img class="pz_logo img_setting" src="../assets/img/TCF.png" alt="ParaZeni">
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
.pz_logo {
  position: absolute;
  top: size(149);
  left: size(387);
  // width: size(1060);
  height: 100%;
  opacity: 0.5;
}

.tit{
  font: 5em sans-serif;
}
.cont{
  font: 3em sans-serif;
}

</style>