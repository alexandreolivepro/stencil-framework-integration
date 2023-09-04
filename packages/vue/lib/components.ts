/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer } from './vue-component-lib/utils';

import type { JSX } from '@my-app/core/components';

import { defineCustomElement as defineComponent1 } from '@my-app/core/components/component-1.js';
import { defineCustomElement as defineComponent2 } from '@my-app/core/components/component-2.js';
import { defineCustomElement as defineComponent3 } from '@my-app/core/components/component-3.js';
import { defineCustomElement as defineMyComponent } from '@my-app/core/components/my-component.js';


export const Component1 = /*@__PURE__*/ defineContainer<JSX.Component1>('component-1', defineComponent1);


export const Component2 = /*@__PURE__*/ defineContainer<JSX.Component2>('component-2', defineComponent2);


export const Component3 = /*@__PURE__*/ defineContainer<JSX.Component3>('component-3', defineComponent3);


export const MyComponent = /*@__PURE__*/ defineContainer<JSX.MyComponent>('my-component', defineMyComponent, [
  'first',
  'middle',
  'last'
]);

