<script setup lang="ts">
import { ref, reactive } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <nav class="main-nav--bg">
    <div class="container main-nav">test</div>
    <font-awesome-layers full-width class="fa-4x">
      <font-awesome-icon :icon="['fas', 'envelope']" />
      <font-awesome-layers-text counter value="1" position="top-right" />
    </font-awesome-layers>
  </nav>
</template>

<<<<<<< HEAD
<style lang="scss" scoped>
=======
<style scoped lang="scss">
>>>>>>> 408ec3d149b52410943aba57c77f4283b2f7f63d

</style>
