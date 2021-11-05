<template>
  <nav class="main-nav--bg">
    <button
      class="btn btn-outline-secondary btn-sidebar-toggle"
      type="button"
      data-toggle-sidebar="collapse"
      data-target-sidebar="#collapseSidebar"
      aria-expanded="true"
      aria-controls="collapseSidebar"
    >
      <font-awesome-icon :icon="['fas', 'indent']" class="sidebar-view-icon" />
    </button>
    <div class="container main-nav">test</div>
    <font-awesome-layers full-width class="fa-4x">
      <font-awesome-icon :icon="['fas', 'envelope']" />
      <font-awesome-layers-text counter value="1" position="top-right" />
    </font-awesome-layers>
  </nav>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { EventHandle } from './mainHeader'

const eventHandle = new EventHandle();
onMounted(() => {
  // 이벤트 리스너 - 사이드바 컨트롤 버튼, 헤더 좌측에 배치
  document.querySelector('button[data-toggle-sidebar="collapse"]')?.addEventListener('click', function (this: Element) {
    eventHandle.sideBarEventHandler(this);
  });
});

</script>

<style scoped lang="scss">
@import "@scss/main_header.scss";
</style>
