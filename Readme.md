# youtube crawler

## 何するものなの？

* 設定したqをもとに、下記処理を行う
  * 検索してIDを50件DBに溜める
  * 溜めたIDから部分的に抽出して下記情報を埋める
     * 動画のタイトル
     * 投稿日
     * 再生数
     * 高評価数
     * 低評価数
     * コメント数
     * 投稿者

## 使うもの

* [google/google-api-nodejs-client](https://github.com/google/google-api-nodejs-client)
* [sequelize/sequelize: An easy-to-use multi SQL dialect ORM for Node.js](https://github.com/sequelize/sequelize)

## 参考

* [API Reference  |  YouTube Data API (v3)  |  Google Developers](https://developers.google.com/youtube/v3/docs/?hl=ja)
* [Manual | Sequelize | The node.js ORM for PostgreSQL, MySQL, SQLite and MSSQL](http://docs.sequelizejs.com/)

## 使い方

バッチのCLI実行方法

```
$ node ./lib/batch/crawler.js
```

## Youtubeはタイトルに絵文字もあるので注意が必要です

下記を参考にmy.cnfをいじったら登録できるようになりました。

* [MySQL5.5で🍣絵文字🐟を挿入/検索する - Qiita](https://qiita.com/suzuki_sh/items/f02fc88a8514fd23a47e)
* [データベースのutf8mb4対応 - Qiita](https://qiita.com/Iwark/items/9499fcc4e3a3e50afe08)

