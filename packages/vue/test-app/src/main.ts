import { createApp } from 'vue'
import App from './App.vue'

import { setAssetPath } from '@my-app/core/components';

setAssetPath(window.location.origin);

createApp(App).mount('#app')
