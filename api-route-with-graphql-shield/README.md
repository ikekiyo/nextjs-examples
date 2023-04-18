# api-route-with-graphql-shield

## 概要

Next.js の API Route で Apollo Server を使って GraphQL サーバーを構築し、GraphQL Shield を使って API 認可の制御を実施

## API 認可設計

本を管理する Web サービスを想定

- 一般ユーザー
  - 本の一覧を見る
  - マイページ情報を見る
  - マイページ情報を更新する
- 管理ユーザー
  - 登録しているユーザー一覧を見る
  - 新しい本の登録をする

これを踏まえて以下の API 作成と認可制御を行う

| API                | 未認証                                         | 未認証 | 一般 | 管理者 |
| ------------------ | ---------------------------------------------- | ------ | ---- | ------ |
| booksQuery         | 本の一覧を取得                                 | ◯      | ◯    | ◯      |
| userQuery          | ログインしているユーザー情報を取得             | ×      | ◯    | ◯      |
| usersQuery         | サービスに登録しているユーザーの一覧情報を取得 | ×      | ×    | ◯      |
| updateUserMutation | ログインしているユーザー情報を更新             | ×      | ◯    | ◯      |
| createBookMutation | 管理画面で新しい本を登録                       | ×      | ×    | ◯      |

## 開発

```bash
# 起動
yarn dev
```

## ディレクトリ構造

Next.js の API Route を使った GraphQL サーバー構成

```bash
├── README.md
├── codegen.yaml
├── node_modules
├── package.json
├── public
│   ├── graphql
│   │   ├── generated
│   │   │   ├── client-types.ts
│   │   │   └── server-types.ts
│   │   ├── mutation
│   │   │   └── createBook.graphql
│   │   ├── query
│   │   │   └── Books.graphql
│   │   └── schema.ts
│   ├── pages
│   │   └── api
│   │       └── graphql
│   ├── resolvers
│   │   ├── mutation
│   │   │   ├── createBook
│   │   │   └── index.ts
│   │   ├── query
│   │   │   ├── books
│   │   │   └── index.ts
│   │   ├── permissions.ts
│   │   ├── resolvers.ts
│   │   └── rules.ts
├── tsconfig.json
└── yarn.lock
```

- graphql
  - GraphQL のスキーマ定義
  - graphql-codegen での型生成ファイル
  - クライアント用の.grapqh ファイル
- pages
  - api ディレクトリに Apollo Server を使って GraphQL のエンドポイントを用意
- resolvers
  - API のリゾルバー(Query, Mutation)
  - 各 API の認可定義 (permissions.ts)
  - 認可ロジック定義 (rules.ts)
