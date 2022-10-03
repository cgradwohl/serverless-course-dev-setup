0. nvm, node install

1. `mkdir MY_DIR && cd MY_DIR`

2. `npm init`

3. `git init`

4. `v16.17.1 >> .nvmrc`

5. `(echo node_modules; echo coverage;) >> .gitignore`

6. `npm i -D prettier`, `echo {}> .prettierrc.json`, `(echo node_modules; echo coverage;) >> .prettierignore`, add prettier VS Code Extension and settings

7. `npm i -D typescript`, `npx tsc --init`, add typescript VS Code Extension and settings

8. `npm i -D jest @types/jest ts-jest`, `npx jest --init` and set `preset: "ts-jest"`, add `"scripts": { "test": "jest --coverage" },` to package.json
