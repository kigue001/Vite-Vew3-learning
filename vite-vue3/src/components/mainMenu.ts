class EventHandle {
  /**
   * 메뉴 카테고리 자동 펼침(비동기)
   */
  sideBarMenuEventHandler(): void {
    const listActive: NodeListOf<Element> = document.querySelectorAll('a.router-link-exact-active');
    for (const key of listActive) {
      const btnMenuCat: any = key.parentNode?.parentNode?.previousSibling;
      if (btnMenuCat) {
        btnMenuCat.click();
      }
    }
  }
}

export { EventHandle };
