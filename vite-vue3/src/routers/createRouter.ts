/**
 * vue-router 설정 항목
 */
interface Router {
  // URL 경로
  path: string;
  // 화명 명칭
  name: string;
  // .vue 경로 함수
  component: string;
  // 상속 여부
  props: boolean;
}

/**
 * router 설정 관리
 */
export abstract class Routers implements Router {
  // URL 경로
  path: string;
  // 화명 명칭
  name: string;
  // .vue 경로 함수
  component: string;
  // 상속 여부
  props: boolean;

  /**
   * @param path 요청 경로
   * @param name 루터 요청 이름
   * @param component views(.vue) 경로
   */
  constructor(path: string, name: string, component: string) {
    this.path = path;
    this.name = name;
    this.component = component;
  }

  namea() {
    return import(this.component);
  }
}
