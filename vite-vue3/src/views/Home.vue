<template>
  <layout-default>
    <template #main>
      <h5>Home</h5>
    </template>
  </layout-default>
</template>

<script setup lang="ts">
  import LayoutDefault from '@layouts/LayoutDefault.vue';
  import { ref } from 'vue';

  defineProps<{ msg: string }>();

  const count = ref(0);
</script>

<style scoped lang="scss"></style>
