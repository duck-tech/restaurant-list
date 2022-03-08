# :clinking_glasses: Restaurant List

此專案提供使用者新增自己喜愛的餐廳資料，並且透過篩選搜尋來尋找自己想去的餐廳，再透過點擊餐廳可以觀看詳細內容。

### :link: heroku 連結
https://immense-gorge-86213.herokuapp.com/users/login

## Features

- 使用者需註冊帳號或連動 facebook 帳號來登入使用
- 使用者於首頁可以觀看到每家餐廳的店名、類別、排名
- 使用者於首頁可以使用搜尋功能查詢指定的店家或類別
- 使用者可以點擊餐廳來觀看詳細資訊，並且可以直接瀏覽餐廳地圖
- 使用者可以點擊首頁的"+"圖案，新增餐廳資料
- 使用者可以點擊"垃圾桶"圖案，刪除資料
- 使用者可以點擊"鉛筆"圖案，進行指定餐廳資料修改
- 使用者可以使用下拉式選單，進行指定選項排列

## Page view

<img width="1099" alt="image" src="https://user-images.githubusercontent.com/78743080/157156004-a97cde55-c96d-4951-93b2-6c49c70018ae.png">

![image](https://github.com/0Trevor-Lin0/My-Restaurant-List/blob/main/public/img/Restaurant%20List%20-%202-3_A8.png)

<img width="1216" alt="image" src="https://user-images.githubusercontent.com/78743080/157156059-75e71b5d-608f-440f-9c42-86fee931ba6d.png">


## Getting Started

1. Clone repository to your local computer

```
https://github.com/0Trevor-Lin0/My-Restaurant-List.git
```

2. Install by npm

```
$ npm install
```

3. Seeds

```
$ npm run seed
```

4. Execute

```
$ npm run dev
```

Terminal show 'ok! it's running on http://localhost:3000'

ps :thought_balloon: 環境變數在.env.example 檔案中，FACEBOOK_ID FACEBOOK_SECRET GOOGLE_MAP_API 請使用自己的憑證密碼。

### Test account

> - email: user1@example.com
> - password: 12345678

> - email: user2@example.com
> - password: 12345678

## :toolbox: Built With

- Visual Studio Code
- Node.js: v10.15.0
- Express: v4.17.1
- Express-handlebars: v5.3.2
- mongoose:v5.12.13
- mongoDB:v4.2.14
- Bootstrap: v4.6.0

## :raising_hand_man: Author

Trevor Lin 林東泰
