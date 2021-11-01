<template>
  <nav class="main-nav--bg">
    <button @click="sidebarEvent($event)" class="btn btn-outline-secondary btn-sidebar-toggle" type="button" data-toggle-sidebar="collapse" data-target-sidebar="#collapseSidebar" aria-expanded="true" aria-controls="collapseSidebar">
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
  import { ref, reactive } from 'vue';

  function sidebarEvent(event: Event) {
    // console.log(event);
  }
</script>

<style scoped lang="scss">
  .btn-sidebar-toggle:active {
    color: #0d6efd;
    transition: all 0s;
  }

  .sidebar-view-icon {
    transition: all 0.35s ease;
  }

  button[aria-expanded="true"] .sidebar-view-icon {
    transform: rotate(180deg);
  }

  button[aria-expanded="false"] .sidebar-view-icon {
    transform: rotate(0deg);
  }
</style>
