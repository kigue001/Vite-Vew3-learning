<template>
  <aside class="sidebar sidebar-collapse show" id="collapseSidebar">
    <div class="sidebar-head">
      <a href="/" class="logo-wrapper" title="Home">
        <span class="logo"></span>
        <span class="logo-text">Test Home</span>
      </a>
    </div>

    <div class="sidebar-body">
      <ul class="menu-group" id="menuGroup">
        <li class="menu-item">
          <router-link :to="{ name: 'Home' }">
            <font-awesome-icon :icon="['fas', 'home']" class="fa-lg icon" />
            <span>Home</span>
          </router-link>
        </li>
        <li class="menu-cat">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse0"
            aria-expanded="false"
            aria-controls="collapse0"
          >
            <font-awesome-icon :icon="['fas', 'home']" class="fa-lg icon" />
            <span>Ac Item #1</span>
          </button>
          <ul class="menu-cat-group">
            <li id="collapse0" class="menu-item collapse" data-bs-parent="#menuGroup">
              <router-link :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li id="collapse0" class="menu-item collapse" data-bs-parent="#menuGroup">
              <router-link :to="{ name: 'Login' }">Login</router-link>
            </li>
          </ul>
        </li>
        <li class="menu-cat">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse1"
            aria-expanded="false"
            aria-controls="collapse1"
          >
            <font-awesome-icon :icon="['fas', 'home']" class="fa-lg icon" />
            <span>Ac Item #1</span>
          </button>
          <ul class="menu-cat-group">
            <li id="collapse1" class="menu-item collapse" data-bs-parent="#menuGroup">
              <router-link :to="{ name: 'Home2' }">Home2</router-link>
            </li>
            <li id="collapse1" class="menu-item collapse" data-bs-parent="#menuGroup">
              <router-link :to="{ name: 'Login' }">Login</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="sidebar-footer"></div>
  </aside>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { EventHandle } from './mainMenu'

const eventHandle = new EventHandle();

onMounted(() => {

  // 이벤트 핸들러 - 메뉴 카테고리 자동 펼침(비동기)
  eventHandle.sideBarMenuEventHandler();

});
</script>

<style scoped lang="scss">
@import "@scss/main_menu.scss";
</style>
