import { createApp } from 'vue';
import App from './App.vue';

// 공통 SCSS(라이브러리 SCSS 포함)
import './_main.scss';

// 부트스트랩5
import 'bootstrap';

// 스윗 알림창(확인창)
import 'sweetalert2';

// 폰트 어썸
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';
library.add(fas, fab, far);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('font-awesome-layers', FontAwesomeLayers)
    .component('font-awesome-layers-text', FontAwesomeLayersText)
    .mount('#app');
