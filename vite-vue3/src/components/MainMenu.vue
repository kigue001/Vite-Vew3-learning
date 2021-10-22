<script setup lang="ts">
import { ref, reactive } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-head">
      <a href="/" class="logo-wrapper" title="Home">{{ msg }}</a>
<<<<<<< HEAD
      <button class="" @click="">이동</button>
=======
      <!-- <button @click="" class="">이동</button> -->
>>>>>>> 408ec3d149b52410943aba57c77f4283b2f7f63d
    </div>
    <div class="sidebar-body">

    </div>
    <div class="sidebar-footer">
      
    </div>
  </aside>
</template>

<<<<<<< HEAD
<style lang="scss" scoped>
=======
<style scoped lang="scss">
>>>>>>> 408ec3d149b52410943aba57c77f4283b2f7f63d

</style>
