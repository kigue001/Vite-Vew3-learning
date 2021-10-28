<template>
  <nav class="main-nav--bg">
    <button class="btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#colSide" aria-expanded="true" aria-controls="colSide">
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
.sidebar-view-icon{
    transform:rotate(90deg);
    -moz-transform: scaleX(-1); 
    -o-transform: scaleX(-1); 
    -webkit-transform: scaleX(-1); 
    transform: scaleX(-1);   
    filter: FlipH;
    -ms-filter: "FlipH";
}
</style>
