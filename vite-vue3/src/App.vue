<script setup lang="ts">
import MainMenu from '@/components/MainMenu.vue';
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';
</script>

<template>
  <MainMenu />
  <div class="main-wrapper">
    <MainHeader />
   
    <main class="main">
      
    </main>

    <MainFooter />
  </div>
</template>

<style lang="scss">
  @import "@/assets/scss/common";
  @import "bootstrap/scss/bootstrap";
  @import "sweetalert2/src/sweetalert2.scss";
</style>
