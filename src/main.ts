import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');

// additional global styles
import 'scss-reset/_reset.scss';
import 'bootstrap-scss/bootstrap-grid.scss';
import './styles/global-fonts.scss';
import './styles/global-styles.scss';
