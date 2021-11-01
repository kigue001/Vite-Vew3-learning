<template>
  <MainMenu msg="SideBar" />
  <div class="main-wrapper">
    <MainHeader />
    <main class="main">
        <slot name="main"></slot>
    </main>
    <MainFooter />
  </div>
</template>

<script setup lang="ts">
  import MainMenu from '@components/MainMenu.vue';
  import MainHeader from '@components/MainHeader.vue';
  import MainFooter from '@components/MainFooter.vue';

  import { onMounted } from 'vue';

  onMounted(() => {

    // 이벤트 리스너 - 사이드바 컨트롤 버튼, 헤더 좌측에 배치
    document.querySelector('button[data-toggle-sidebar="collapse"]')?.addEventListener('click', function (this: Element) {
      new SideBarEventHandler(this);
    });

  });

  class SideBarEventHandler {
    /** 이벤트 발생 요소 */
    clickElement: Element;

    constructor(clickElement: Element){
      this.clickElement = clickElement;
      this.handlerTargett();
    }

    /**
     * 핸들링 대상 ID 취득
     */
    getTargetId(): string {
      let tgtId = this.clickElement.getAttribute('data-target-sidebar');
      if (tgtId)
        return tgtId;
      throw new Error("Not Find Target");
    }

    /**
     * 핸들링 대상 요소 취득
     */
    getTargetElement(): Element {
      let tgtEle = document.querySelector(this.getTargetId());
      if (tgtEle)
        return tgtEle;
      throw new Error("Not Find Target");
    }

    /**
     * 
     */
    getTargetHTMLElement(): HTMLElement {
      let tgtEle = document.querySelector(this.getTargetId());
      if (tgtEle)
        return <HTMLElement>tgtEle;
      throw new Error("Not Find Target");
    }

    /**
     * 메뉴(사이드바) 이벤트 핸들러
     * 숨김 / 보임 애니메이션
     */
    handlerTargett() {
      // 애니메이션 등록
      this.getTargetHTMLElement().style.transition = 'width 0.35s ease';
      // 숨김/보임 처리
      let listTgt: DOMTokenList = this.getTargetElement().classList;
      listTgt.replace('collapse', 'collapsing');
      if (listTgt.contains('show')) { // 숨김
        this.handleTargetHideBefore();
        this.handleTargetHideAfter();
      } else { // 보임
        this.handleTargetShowBefore();
        this.handleTargetShowAfter();
      }
      listTgt.replace('collapsing', 'collapse');
      listTgt.toggle('show');
    }

    /**
     * 
     */
    handleTargetHideBefore() {
      this.getTargetHTMLElement().style.width = '0';
      this.getTargetHTMLElement().style.padding = '0';
    }

    /**
     * 
     */
    handleTargetHideAfter() {
      this.clickElement.ariaExpanded = 'false';
      this.getTargetHTMLElement().style.display = 'none';
    }

    /**
     * 
     */
    handleTargetShowBefore() {
      this.getTargetHTMLElement().style.width = '';
      this.getTargetHTMLElement().style.padding = '';
    }

    /**
     * 
     */
    handleTargetShowAfter() {
      this.clickElement.ariaExpanded = 'true';
      this.getTargetHTMLElement().style.display = '';
    }

  }

</script>

<style scoped lang="scss">

.sidebar-collapse {
  transition: width 0.35s ease;

}
.sidebar-collapse.show {
  transition: width 0.35s ease;

}

.sidebar-collapsing.show {

}
.sidebar-collapsing {

}
</style>
