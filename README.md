# react-iframe-usePromptBlocker

A demonstration on keeping the iframe page state with browser back, refresh actions.

## Install
```bash
yarn install
```
- Use vsCode, add Extension `Live Server`
- Open demo-form.html and click `Go live` located in the bottom right corner of vsCode IDE
- You might need to focus on the port used for Live Server and make changes to `src/pages/Demo.tsx` 
```bash
yarn start
```

## Setup 
```bash
npx --yes create-react-app . --template typescript
rm -rf package-lock.json
yarn install

yarn add @mui/material @emotion/react @emotion/styled
yarn add react-router-dom
yarn add react-iframe
```

## Credits
- [https://github.com/remix-run/react-router/issues/8139#issuecomment-1023105785](https://github.com/remix-run/react-router/issues/8139#issuecomment-1023105785)