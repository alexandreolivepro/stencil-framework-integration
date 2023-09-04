import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'component-3',
  styleUrl: 'component-3.css',
  shadow: true,
})
export class Component3 {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
