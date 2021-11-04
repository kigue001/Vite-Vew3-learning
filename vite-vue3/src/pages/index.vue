<template>
  <p>index.vue</p>
</template>

<route>
{
  name: "name-override",
  meta: {layout: "Default"}
}
</route>

<script setup lang="ts">
import LayoutDefault from '@layouts/LayoutDefault.vue';
import { ref } from 'vue';

// defineProps<{ msg: string }>();

const count = ref(0);
</script>

<style scoped lang="scss">
</style>
