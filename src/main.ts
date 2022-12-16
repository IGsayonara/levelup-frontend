import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faBars);

const app = createApp(App);

app.component('FontAwesomeIcon', FontAwesomeIcon);

app.use(router);
app.mount('#app');

// additional global styles
import 'scss-reset/_reset.scss';
import 'bootstrap-scss/bootstrap-grid.scss';
import './styles/global-fonts.scss';
import './styles/global-styles.scss';
