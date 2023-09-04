import { defineContainer } from './vue-component-lib/utils';
import { defineCustomElement as defineComponent1 } from '@my-app/core/components/component-1.js';
import { defineCustomElement as defineComponent2 } from '@my-app/core/components/component-2.js';
import { defineCustomElement as defineComponent3 } from '@my-app/core/components/component-3.js';
import { defineCustomElement as defineMyComponent } from '@my-app/core/components/my-component.js';
export const Component1 = defineContainer('component-1', defineComponent1);
export const Component2 = defineContainer('component-2', defineComponent2);
export const Component3 = defineContainer('component-3', defineComponent3);
export const MyComponent = defineContainer('my-component', defineMyComponent, [
    'first',
    'middle',
    'last'
]);
//# sourceMappingURL=components.js.map