# Desafio Desbravador

Para acessar o projeto, faça um clone do repositorio no vscode, quando o repositorio estiver baixado, inicie com pnpm install.

no arquivo api.ts dentro da pasta services, implemente seu token do github seguindo esse tutorial -[https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens], pois sem o token, o github da apenas um pequeno número de acesso pela API.

Quando estiver acabado de instalar as dependências e colocado o token, inicie com pnpm dev.

<img src="/src/assets/avatar.png" alt="Texto Alternativo">


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
