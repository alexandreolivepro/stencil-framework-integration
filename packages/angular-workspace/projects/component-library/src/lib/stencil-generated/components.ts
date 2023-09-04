/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, NgModule } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from 'stencil-library/components';

import { defineCustomElement as defineComponent1 } from 'stencil-library/components/component-1.js';
import { defineCustomElement as defineComponent2 } from 'stencil-library/components/component-2.js';
import { defineCustomElement as defineComponent3 } from 'stencil-library/components/component-3.js';
import { defineCustomElement as defineMyComponent } from 'stencil-library/components/my-component.js';
@ProxyCmp({
  defineCustomElementFn: defineComponent1
})
@Component({
  selector: 'component-1',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class Component1 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


@NgModule({
  declarations: [Component1],
  exports: [Component1]
})
export class Component1Module { }


export declare interface Component1 extends Components.Component1 {}


@ProxyCmp({
  defineCustomElementFn: defineComponent2
})
@Component({
  selector: 'component-2',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class Component2 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


@NgModule({
  declarations: [Component2],
  exports: [Component2]
})
export class Component2Module { }


export declare interface Component2 extends Components.Component2 {}


@ProxyCmp({
  defineCustomElementFn: defineComponent3
})
@Component({
  selector: 'component-3',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class Component3 {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


@NgModule({
  declarations: [Component3],
  exports: [Component3]
})
export class Component3Module { }


export declare interface Component3 extends Components.Component3 {}


@ProxyCmp({
  defineCustomElementFn: defineMyComponent,
  inputs: ['first', 'last', 'middle']
})
@Component({
  selector: 'my-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['first', 'last', 'middle'],
})
export class MyComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


@NgModule({
  declarations: [MyComponent],
  exports: [MyComponent]
})
export class MyComponentModule { }


export declare interface MyComponent extends Components.MyComponent {}


