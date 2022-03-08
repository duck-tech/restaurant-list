# :clinking_glasses: Restaurant List

此專案可以讓使用者瀏覽、搜尋特定的餐廳，並且可以點擊餐廳圖示瀏覽更詳細的餐廳資訊。 此外，也可以新增、刪除和修改餐廳資料。

必須登入後才能使用，支援 Facebook 登入功能。

### :link: heroku 連結
https://immense-gorge-86213.herokuapp.com/users/login

## Features

1. 使用者可以新增一家餐廳
2. 使用者可以瀏覽一家餐廳的詳細資訊
3. 使用者可以瀏覽全部所有餐廳
4. 使用者可以依據餐廳名稱與類別搜尋特定餐廳
5. 使用者可以修改一家餐廳的資訊
6. 使用者可以刪除一家餐廳
7. 使用者可以選擇特定方式來排序餐廳顯示順序
8. 使用者可以註冊帳號
9. 使用者可以透過 FB 或註冊帳號登入

## Page view

<img width="1099" alt="image" src="https://user-images.githubusercontent.com/78743080/157156004-a97cde55-c96d-4951-93b2-6c49c70018ae.png">

![image](https://github.com/0Trevor-Lin0/My-Restaurant-List/blob/main/public/img/Restaurant%20List%20-%202-3_A8.png)

<img width="1216" alt="image" src="https://user-images.githubusercontent.com/78743080/157156059-75e71b5d-608f-440f-9c42-86fee931ba6d.png">


## Getting Started


1. 藉由 git clone 將專案下載至本地
```
git clone https://github.com/WilliamTsou818/restaurant-list.git
```
2. 進入專案資料夾
```
cd restaurant-list
```
3. 安裝套件
```
npm install
```
4. 加入種子資料
```
npm run seed
```
5. 啟動網頁伺服器
```
npm run dev
```
ps :thought_balloon: 環境變數在.env.example 檔案中，FACEBOOK_ID FACEBOOK_SECRET GOOGLE_MAP_API 請使用自己的憑證密碼。

### Test account

> - email: user1@example.com
> - password: 12345678

> - email: user2@example.com
> - password: 12345678

## :toolbox: Built With

- Visual Studio Code
- Node.js: v14.16.0
- Express: v4.17.3
- Express-handlebars: v6.0.2
- mongoose:v6.2.3
- mongoDB:v4.2.18

## :raising_hand_man: Author

Kelly Wang 王聖晴
