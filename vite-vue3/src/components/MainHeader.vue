<template>
  <nav class="main-nav--bg">
    <button
      class="btn btn-outline-secondary btn-sidebar-toggle"
      type="button"
      data-toggle-sidebar="collapse"
      data-target-sidebar="#collapseSidebar"
      aria-expanded="true"
      aria-controls="collapseSidebar"
    >
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
  import { onMounted } from 'vue';

  onMounted(() => {
    // 이벤트 리스너 - 사이드바 컨트롤 버튼, 헤더 좌측에 배치
    document.querySelector('button[data-toggle-sidebar="collapse"]')?.addEventListener('click', function (this: Element) {
      SideBarEventHandler(this);
    });
  });

  /**
   * @param {Element} eleThis 대상 엘리먼트
   */
  function SideBarEventHandler(eleThis: Element) {
    // 핸들링 대상 ID 취득 및 존재시 처리
    const idTgt = eleThis.getAttribute('data-target-sidebar');
    if (idTgt) {
      // 핸들링 대상 요소 취득 및 존재시 처리
      const eleTgt = document.querySelector(idTgt);
      if (eleTgt) {
        const listTgt = eleTgt.classList;
        listTgt.replace('sidebar-collapse', 'sidebar-collapsing');
        if (listTgt.contains('show')) {
          // 숨김
          eleThis.ariaExpanded = 'false';
          eleThis.classList.add('sidebar-collapsed');
        } else {
          // 보임
          eleThis.ariaExpanded = 'true';
          eleThis.classList.remove('sidebar-collapsed');
        }
        listTgt.replace('sidebar-collapsing', 'sidebar-collapse');
        listTgt.toggle('show');
      }
    }
  }
</script>

<style scoped lang="scss">
  .btn-sidebar-toggle:active {
    color: #0d6efd;
    transition: all 0s;
  }

  .sidebar-view-icon {
    transition: all 0.35s ease;
  }

  button[aria-expanded='true'],
  button:not(.sidebar-collapsed) {
    & .sidebar-view-icon {
      transform: rotate(180deg);
    }
  }

  button[aria-expanded='false'],
  button.sidebar-collapsed {
    & .sidebar-view-icon {
      transform: rotate(0deg);
    }
  }
</style>
