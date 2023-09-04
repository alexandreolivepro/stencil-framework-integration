import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'component-2',
  styleUrl: 'component-2.css',
  shadow: true,
})
export class Component2 {

  render() {
    return (
      <Host>
        {this.text()}
      </Host>
    );
  }

  text () {
    return "component-2-text"
  }

}
