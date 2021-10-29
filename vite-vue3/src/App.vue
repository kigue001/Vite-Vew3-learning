<template>
  <MainMenu msg="SideBar" />
  <div class="main-wrapper">
    <MainHeader />

    <main class="main">
      <router-view />
    </main>

    <MainFooter />
  </div>
</template>

<script setup lang="ts">
  // 메인 메뉴
  import MainMenu from '@components/MainMenu.vue';
  // 메인 헤더
  import MainHeader from '@components/MainHeader.vue';
  // 메인 푸터
  import MainFooter from '@components/MainFooter.vue';
  // 뷰
  import { ref, reactive } from 'vue';
</script>

<style lang="scss">
  @import '@assets/scss/main.scss';
</style>
