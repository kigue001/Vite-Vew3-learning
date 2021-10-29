<template>
  <nav class="main-nav--bg">
    <button class="btn btn-outline-secondary btn-sidebar-toggle" type="button" data-toggle="collapse" data-target="#collapseSidebar" aria-expanded="true" aria-controls="collapseSidebar">
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
</script>

<style scoped lang="scss">
  .btn-sidebar-toggle:active {
    color: #0d6efd;
    transition: all 0s;
  }
  .sidebar-view-icon {
    transform: rotate(180deg);
    transition: all 0.35s ease;
  }
</style>
