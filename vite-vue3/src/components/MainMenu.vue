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
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            <font-awesome-icon :icon="['fas', 'home']" class="fa-lg icon" />
            <span> Ac Item #1 </span>
          </button>
          <ul class="sidebar-body-menu-cat" id="accordionExample">
            <li id="collapseOne" class="collapse" data-bs-parent="#accordionExample">
              <router-link :to="{ name: 'Home' }">Home</router-link>
            </li>
            <li id="collapseOne" class="collapse" data-bs-parent="#accordionExample">
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
    background-color: #198754 !important;
    width: 250px;
    padding: 20px 15px 37px 20px;
    min-height: 100vh;
    -webkit-transition: width 0.35s ease;
    -moz-transition: width 0.35s ease;
    -o-transition: width 0.35s ease;
    transition: width 0.35s ease;

    a {
      text-decoration: none;
    }

    &-head {
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

    &-body {
      margin-bottom: auto;

      &-menu {
        padding: 0;

        a {
          position: relative;
          padding: 8px 0;
          opacity: 0.6;
          color: #fff;
          font-weight: 500;
          font-size: 14px;
          line-height: 2.43;

          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }

  .accordion-button {
    padding: 0;
    color: #fff;
    background-color: #198754;
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
    margin-right: 12px;
  }
</style>
