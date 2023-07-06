# Vite + TypeScript project for Phaser Editor 2D

## First steps

This project requires [Node.js](https://nodejs.org) and [pnpm](https://pnpm.io/).

- Install dependencies:

  ```
  pnpm install
  ```

- Run the development server:

  ```
  pnpm run dev
  ```

  Open the browser at `http://localhost:5173`.

- Make a production build:

  ```
  pnpm run build
  ```

  It is generated in the `/dist` folder.

## Phaser Editor 2D considerations

### Excluding files from the project

There are a lot of files present in the project that are not relevant to Phaser Editor 2D. For example, the whole `node_modules` folder should be excluded from the editor's project.

The `/.skip` file lists the folders and files to exclude from the editor's project.

[Learn more about resource filtering in Phaser Editor 2D](https://help.phasereditor2d.com/v3/misc/resources-filtering.html)

### Setting the root folder for the game's assets

The `/public` folder contains the assets (images, audio, atlases) used by the game.

By default, Phaser Editor 2D uses the project's root as the start path for the assets. You can change it by creating an empty `publicroot` file. That is the case of the `/public/publicroot` file, which allows adding files to the Asset Pack file (`/public/assets/asset-pack.json`) using correct URLs.

### Coding

The `/src` folder contains all the TypeScript code, including the scene and user component files, in addition to the Phaser Editor 2D compilers output.

We recommend using Visual Studio Code for editing the code files.

In many tutorials about Phaser Editor 2D, the JavaScript files are loaded using the Asset Pack editor. When using Vite this is not needed. Just use the Asset Pack editor for loading the art assets.

### Scene, User Components, and ScriptNode configuration

The Scenes, User Components, and ScriptNodes are configured to compile to TypeScript ES modules. Also, the compilers auto-import the classes used in the generated code.

### ScriptNodes

The `src/script-nodes-basic` folder contains the script nodes from the [script-nodes-basic](http://github.com/PhaserEditor2D/script-nodes-basic/) project.

You can add your own script nodes to the `src/script-nodes` folder.
