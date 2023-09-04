import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'component-1',
  styleUrl: 'component-1.css',
  shadow: true,
})
export class Component1 {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
