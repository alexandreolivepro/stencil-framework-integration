import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'my-app',
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
    {
      type: 'docs-readme',
    },
    reactOutputTarget({
      componentCorePackage: '@my-app/core',
      proxiesFile: '../react/lib/components/stencil-generated/index.ts',
      includeImportCustomElements: true,
      customElementsDir: 'components',
    }),
    angularOutputTarget({
      componentCorePackage: '@my-app/core',
      directivesProxyFile: '../angular/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular/projects/component-library/src/lib/stencil-generated/index.ts',
      customElementsDir: 'components',
      outputType: 'scam'
    }),
    vueOutputTarget({
      componentCorePackage: '@my-app/core',
      proxiesFile: '../vue/lib/components.ts',
      includeImportCustomElements: true,
      customElementsDir: 'components',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
