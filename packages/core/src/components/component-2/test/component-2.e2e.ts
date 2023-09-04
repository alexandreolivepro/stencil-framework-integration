import { newE2EPage } from '@stencil/core/testing';

describe('component-2', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<component-2></component-2>');

    const element = await page.find('component-2');
    expect(element).toHaveClass('hydrated');
  });
});
