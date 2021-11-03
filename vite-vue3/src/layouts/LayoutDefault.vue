<template>
  <MainMenu msg="SideBar" />
  <div class="main-wrapper">
    <MainHeader />
    <main class="main">
      <slot name="main"></slot>
    </main>
    <MainFooter />
  </div>
</template>

<script setup lang="ts">
  import MainMenu from '@components/MainMenu.vue';
  import MainHeader from '@components/MainHeader.vue';
  import MainFooter from '@components/MainFooter.vue';
</script>


<style scoped lang="scss"></style>
