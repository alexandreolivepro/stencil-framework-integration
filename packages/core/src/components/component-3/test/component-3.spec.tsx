import { newSpecPage } from '@stencil/core/testing';
import { Component3 } from '../component-3';

describe('component-3', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Component3],
      html: `<component-3></component-3>`,
    });
    expect(page.root).toEqualHtml(`
      <component-3>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </component-3>
    `);
  });
});
