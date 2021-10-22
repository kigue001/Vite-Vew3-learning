<script setup lang="ts">
<<<<<<< HEAD
import MainMenu from '@/components/MainMenu.vue';
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';
</script>

<template>
  <MainMenu />
=======
import { ref, reactive } from 'vue';
// import Router from './router';
import MainMenu from '@components/MainMenu.vue';
import MainHeader from '@components/MainHeader.vue';
import MainFooter from '@components/MainFooter.vue';

// function move() {
//   Router.push('/user/admin');
// 시험중 
// }
</script>

<template>
  <MainMenu msg="SideBar"/>
>>>>>>> 408ec3d149b52410943aba57c77f4283b2f7f63d
  <div class="main-wrapper">
    <MainHeader />
   
    <main class="main">
<<<<<<< HEAD
      
=======
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'Login' }" class="btn btn-info">Login</router-link> |
      <!-- <button @click="$router.back" class="btn btn-success">User</button> -->
      <router-view />
>>>>>>> 408ec3d149b52410943aba57c77f4283b2f7f63d
    </main>

    <MainFooter />
  </div>
</template>

<style lang="scss">
<<<<<<< HEAD
  @import "@/assets/scss/common";
  @import "bootstrap/scss/bootstrap";
=======
  @import "@assets/scss/common.scss";
  @import "bootstrap/scss/bootstrap.scss";
>>>>>>> 408ec3d149b52410943aba57c77f4283b2f7f63d
  @import "sweetalert2/src/sweetalert2.scss";
</style>
