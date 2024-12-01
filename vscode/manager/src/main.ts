import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import pinia from './store';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}
AOS.init();
app.use(router);
app.use(pinia);
app.mount('#app');
