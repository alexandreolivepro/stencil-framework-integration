import { newE2EPage } from '@stencil/core/testing';

describe('component-1', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<component-1></component-1>');

    const element = await page.find('component-1');
    expect(element).toHaveClass('hydrated');
  });
});
