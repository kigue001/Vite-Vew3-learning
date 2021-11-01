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

  import { onMounted } from 'vue';

  onMounted(() => {
    // 이벤트 핸들러 - 메뉴 카테고리 자동 펼침
    document.querySelector('.btn-sidebar-toggle[data-toggle="collapse"]')?.addEventListener('click', (el: any) => {
        console.log(el.value);
    });
    document.querySelectorAll('[data-toggle="collapse"]').forEach((e: Element) => {
      if (e) {
        let target: any = e.getAttribute('data-target');
        if (target) {

        }
      }
    });

  });
</script>

<style scoped lang="scss">

</style>
