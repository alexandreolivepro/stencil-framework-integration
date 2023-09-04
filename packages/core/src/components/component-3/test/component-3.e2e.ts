import { newE2EPage } from '@stencil/core/testing';

describe('component-3', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<component-3></component-3>');

    const element = await page.find('component-3');
    expect(element).toHaveClass('hydrated');
  });
});
