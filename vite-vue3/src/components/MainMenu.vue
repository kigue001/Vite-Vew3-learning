<template>
  <aside class="sidebar collapse show" id="collapseSidebar">
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
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse0" aria-expanded="false" aria-controls="collapse0">
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
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
            <font-awesome-icon :icon="['fas', 'home']" class="fa-lg icon" />
            <span>Ac Item #1</span>
          </button>
          <ul class="menu-cat-group">
            <li id="collapse1" class="menu-item collapse" data-bs-parent="#menuGroup">
              <router-link :to="{ name: 'Home' }">Home</router-link>
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

  onMounted(() => {

    // 이벤트 핸들러 - 메뉴 카테고리 자동 펼침(비동기)
    const listActive: NodeListOf<Element> = document.querySelectorAll('a.router-link-exact-active');
    for (let key of listActive) {
      let btnMenuCat: any = key.parentNode?.parentNode?.previousSibling;
      if (btnMenuCat) {
        btnMenuCat.click();
      }
    }

  });
</script>

<style scoped lang="scss">
  ol,
  ul {
    list-style-type: none;
  }

  .sidebar {
    position: -webkit-sticky;
    position: sticky;
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
    background-color: #222e3c !important;
    top: 0;
    height: 100%;
    min-height: 100vh;
    width: 250px;
    padding: 20px 15px 37px 20px;

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
      padding-top: 20px;
      margin-bottom: auto;
    }

    &-footer {
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
      padding-top: 20px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
  }

  .logo {
    background-image: url('@assets/logo.png');
    width: 49px;
    height: 49px;
    object-fit: contain;

    &-text {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }

    &-wrapper{
      @extend .logo-text;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
  }

  @mixin link-form {
    position: relative;
    opacity: 0.6;
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    line-height: 2.43;

    &:hover {
      opacity: 1;
    }
  }
  .menu-group {
    padding: 0;

    a {
      @include link-form;
      padding: 8px 0;

      &.router-link-exact-active {
        opacity: 1;
      }
    }

    button {
      @include link-form;
      padding: 0;
    }
  }

  .accordion-button {
    background-color: #222e3c;
    box-shadow: none;

    &:not(.collapsed){
      @extend .accordion-button;
      color: #3794fc;
    }

    &::after {
      width: 0.6rem;
      height: 2rem;
      background-image: none;
      font-family: "Font Awesome 5 Free";
      content: "\f107";
      font-weight: 900;
    }
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

  .icon {
    display: inline-block;
    background-repeat: no-repeat;
    background-position: center center;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    margin-right: 12px;

    &-right {
      display: flex;
      margin-left: auto;
    }
  }
</style>
