# NextJS Template

Next.js with Typescript の個人用テンプレートとなります

## 構成概要

### 利用しているライブラリ群

- App フレームワーク : [Next.js](https://nextjs.org/)
  - AppRouter を採用
- 言語 : [TypeScript](https://www.typescriptlang.org/)
- 状態管理 : [Redux Toolkit](https://redux-toolkit.js.org/)
- CSS フレームワーク : [Tailwind CSS](https://tailwindcss.com/)
- Linter & Formatter : [Biome](https://biomejs.dev/ja/formatter/)

### ディレクトリ構成

[Features-Sliced Design(FSD)](https://feature-sliced.design/)を採用しています

## 使い方

[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) の --example オプションに本リポジトリ URL を指定します

```bash
npx create-next-app <your-app-name> --example https://github.com/spinrock/nextjs-template
# or
yarn create next-app <your-app-name> --example https://github.com/spinrock/nextjs-template
```

## サンプルイメージ

Vercel にデプロイしています

- main ブランチ : https://nextjs-template-gold.vercel.app/

### PC サイズのイメージ

  <img src="./README_IMG/PC_IMG.png" >

### スマホサイズのイメージ

  <img src="./README_IMG/SP_IMG.png" width="375" height="667">
