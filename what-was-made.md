### What was made here
1. Begining of the webpack project, with the "create-new-webpack-app" lib
2. The `index.html` file was moved to src folder
3. At the `webpack.config.js`, the property `config.devServer.open` received the `false` value
4. At the `webpack.config.js`, the property `config.plugins[0](HtmlWebpackPlugin).template` received the `./src/index.html` value
5. At the `tsconfig.json`, the property `compilerOptions.module` received the `commonjs` value
6. At the `tsconfig.json`, the property `compilerOptions.target` received the `es2016` value
7. At the `tsconfig.json`, the property `compilerOptions.allowJs` received the `true` value
8. At the `tsconfig.json`, the property `compilerOptions.rootDir` received the `./src` value
9. At the `tsconfig.json`, the property `compilerOptions.outDir` received the `./dist` value
10. At the `tsconfig.json`, the property `compilerOptions.moduleResolution` was removed