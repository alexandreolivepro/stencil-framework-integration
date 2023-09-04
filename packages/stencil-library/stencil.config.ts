import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      dir: 'components',
      customElementsExportBehavior: 'single-export-module',
      copy: [
        {
          src: '**/*.{jpg,png}',
          dest: 'components/assets',
          warn: true,
        }
      ]
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: 'stencil-library',
      proxiesFile: '../react-library/lib/components/stencil-generated/index.ts',
      includeImportCustomElements: true,
      customElementsDir: 'components',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
