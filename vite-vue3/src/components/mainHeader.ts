class EventHandle {
  /**
   * @param {Element} eleThis 대상 엘리먼트
   */
  sideBarEventHandler(eleThis: Element): void {
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
}

export { EventHandle };
