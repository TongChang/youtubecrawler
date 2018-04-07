# youtube crawler

## 何するものなの？

* 設定したqをもとに、下記処理を行う
  * 検索してIDをとにかくDBに溜める
  * 溜めたIDから部分的に抽出して下記情報を埋める
         * 動画のタイトル
         * 投稿日
         * IDからURL
         * 再生数
         * 高評価数
         * 低評価数
         * コメント数
         * 投稿者
* 投稿したqをもとにテーブルを作成する

scraped_videos

| 項目名       | Type | Length |
|--------------|------|--------|
| id           |
| eTag         |
| videoId      |
| title        |
| viewCount    |
| likeCount    |
| dislikeCount |
| publishedAt  |
| registerdAt  |

## 使うもの

* [google/google-api-nodejs-client](https://github.com/google/google-api-nodejs-client)


## 参考

* [API Reference  |  YouTube Data API (v3)  |  Google Developers](https://developers.google.com/youtube/v3/docs/?hl=ja)

## 使い方

```
$ npm install
$ node index.js
```

