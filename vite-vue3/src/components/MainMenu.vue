<template>
  <aside class="sidebar collapse show" id="colSide">
    <div class="sidebar-head">
      <a href="/" class="logo-wrapper" title="Home">
        <span class="logo"></span>
        <span class="logo-text">Test Home</span>
      </a>
    </div>

    <div class="sidebar-body">
      <ul class="sidebar-body-menu">
        <li class="menu-item">
          <router-link :to="{ name: 'Home' }">
            <font-awesome-icon :icon="['fas', 'home']" class="fa-lg icon" />
            Home
          </router-link>
        </li>
        <li class="menu-cat">
          <a class="btn-cat-show collapsed" data-bs-toggle="collapse" href="#colMenu" role="button" aria-expanded="false" aria-controls="colMenu">
            <font-awesome-icon :icon="['fas', 'envelope']" class="fa-lg icon" />
            Posts
            <span class="icon-right">
              <span class="icon menu-icon"></span>
            </span>
          </a>
          <ul class="cat-sub-menu collapse" id="colMenu">
            <li>
              <router-link :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li>
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
  import { ref, reactive } from 'vue';

  const isChangeIconArrow = ref(false);

  function eventBtnCat() {
    isChangeIconArrow.value = !isChangeIconArrow.value;
  }
</script>

<style scoped lang="scss">
  ol,
  ul {
    list-style-type: none;
    //
  }

  .sidebar {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    background-color: #0061f7 !important;
    width: 253px;
    padding: 20px 15px 37px 20px;
    -webkit-transition: width 0.35s ease;
    -moz-transition: width 0.35s ease;
    -o-transition: width 0.35s ease;
    transition: width 0.35s ease;
    min-height: 100vh;
  }

  .sidebar a {
    text-decoration: none;
  }

  .sidebar-head {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .logo-wrapper {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .logo-text,
  .logo-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .logo {
    background-image: url('@assets/logo.png');
    width: 49px;
    height: 49px;
    object-fit: contain;
  }

  .sidebar-body {
    margin-bottom: auto;
  }

  .sidebar-body-menu a,
  .sidebar-user,
  .sidebar-user-img,
  .sidebar-user-info {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .sidebar-body-menu {
    padding: 0;
  }

  .sidebar-body-menu a:hover {
    opacity: 1;
  }

  .sidebar-body-menu a {
    position: relative;
    padding: 8px 0;
    opacity: 0.6;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    line-height: 2.43;
  }

  .icon {
    margin-right: 12px;
  }

  .btn-cat-show.a > .icon {
    margin-right: 25px;
  }

  .icon-right {
    display: flex;
    margin-left: auto;
  }

  .icon {
    display: inline-block;
    background-repeat: no-repeat;
    background-position: center center;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
  }

  .menu-icon {
    width: auto;
    margin-right: 3px;
    transition: all 0.3s ease;
  }

  .menu-icon::before {
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    content: '\f100';
  }

  .btn-cat-show.collapsed .menu-icon {
    transform: rotate(0);
  }

  .btn-cat-show .menu-icon {
    transform: rotate(-90deg);
  }
</style>
