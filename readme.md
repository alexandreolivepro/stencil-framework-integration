# StencilJS template repository 
This repository is a template for StencilJS implementation.   
It includes: 
- All 3 main frameworks build: React, Angular and Vue
- Browser ready ESM/CJS build for outside framework usage

## Project organization

Each framework library has it's own folder in the packages main folder.   

Your stencil code will go in the "core" library. 

In each framework folder, you will find a "test-app" folder which implement a basic app in the framework you are in. You can use this test-app to make sure your library works in a real app context. 

## How to use

You can clone this repository to use it as base for your component library.

It is built using lerna as a mono repo, running "npm run build" at the root of the projects will build all libraries as a stream
- First the main stencil library called: @my-app/core
- Then once the core is built, it will build the React (@my-app/react), Vue (@my-app/vue) and the angular (@my-app/angular) concurrently.

You can easily change the name of the libraries by replacing all instance of "@my-app" by the name of your company or project. 

## Learn more

If you want to learn more about how this repository was built please read this 2 pieces article that I wrote: 
- Everything about output target types: https://alexandreolive.medium.com/stenciljs-a-deep-dive-on-the-inner-workings-of-output-targets-91199ace026e
- Everything about framework integrations: https://alexandreolive.medium.com/unlocking-cross-framework-power-stenciljs-configuration-demystified-cd12933b1aaf

