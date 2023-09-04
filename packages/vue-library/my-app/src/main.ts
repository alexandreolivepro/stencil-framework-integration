import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { setAssetPath } from 'stencil-library/components';

setAssetPath(window.location.origin);

createApp(App).mount('#app')
