import { createApp } from 'vue'
import App from './App.vue'

import { setAssetPath } from '../../../core/components';

setAssetPath(window.location.origin);

createApp(App).mount('#app')
