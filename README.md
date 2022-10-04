0. nvm, node install

1. `mkdir MY_DIR && cd MY_DIR`

2. `npm init`

3. `git init`

4. `v16.17.1 >> .nvmrc`

5. `(echo node_modules; echo coverage;) >> .gitignore`

6. `npm init @eslint/config`, follow wizard for typescript setup

7. `npm i -D prettier eslint-config-prettier`, `echo {}> .prettierrc.json`, `(echo node_modules; echo coverage;) >> .prettierignore` add prettier VS Code Extension and settings. add `"prettier"` to the end of the `extends` array in eslintrc.json

8. `npm i -D typescript`, `npx tsc --init`, add typescript VS Code Extension and settings

9. `npm i -D jest @types/jest ts-jest`, `npx jest --init` and set `preset: "ts-jest"`, add `"scripts": { "test": "jest --coverage" },` to package.json

At this point we are ready to add SAM template and pipeline.

Note that if you know you need multiple services, then it is a good idea
to use nx instead.
