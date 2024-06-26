import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import fa from './plugins/font-awesome';

const app = createApp(App).use(store);

app.use(router);
app.use(fa);

app.mount('#app');

// additional global styles
import 'scss-reset/_reset.scss';
import 'bootstrap-scss/bootstrap-grid.scss';
import './styles/global-fonts.scss';
import './styles/global-styles.scss';
import store from './store';
