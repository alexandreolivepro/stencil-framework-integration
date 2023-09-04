import { newSpecPage } from '@stencil/core/testing';
import { Component2 } from '../component-2';

describe('component-2', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Component2],
      html: `<component-2></component-2>`,
    });
    expect(page.root).toEqualHtml(`
      <component-2>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </component-2>
    `);
  });
});
