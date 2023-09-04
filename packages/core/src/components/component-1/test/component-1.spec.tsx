import { newSpecPage } from '@stencil/core/testing';
import { Component1 } from '../component-1';

describe('component-1', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Component1],
      html: `<component-1></component-1>`,
    });
    expect(page.root).toEqualHtml(`
      <component-1>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </component-1>
    `);
  });
});
