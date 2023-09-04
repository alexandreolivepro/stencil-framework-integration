import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';

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
    angularOutputTarget({
      componentCorePackage: 'stencil-library',
      directivesProxyFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/index.ts',
      customElementsDir: 'components',
      outputType: 'scam'
    }),
    vueOutputTarget({
      componentCorePackage: 'stencil-library',
      proxiesFile: '../vue-library/lib/components.ts',
      includeImportCustomElements: true,
      customElementsDir: 'components',
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
