# nextjs-priority-routes-test
```
/app
├ [userName]
│  └ page.tsx
├ about
│  └ page.tsx
├ rcc
│  └ page.tsx ('use client')
└ favicon.ico
```
というようなパス構成になっていた場合の挙動が気になった為、検証用のリポジトリ。

## 想定
* `/favicon.ico` → アイコンが表示される
* `/about` → aboutページに行く
* `/rcc` → rccページに行く
* `/takecchi` → [userName]ページに行く

## 環境
- Local
- Vercel
- AWS (sst+OpenNextを利用してデプロイ)

### Local Run
```bash
npm run dev
```
### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Deploy on AWS

```shell
export AWS_ACCESS_KEY_ID=...
export AWS_SECRET_ACCESS_KEY=...
npx sst deploy
```
