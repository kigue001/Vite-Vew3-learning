<template>
  <h5>NotFound</h5>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<style scoped lang="scss">
</style>
