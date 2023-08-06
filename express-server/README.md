# express-server-readme



## Installation
---

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Install dependencies:
 - express: ^4.18.2
 - mysql2": ^3.2.0
 - nodemon: ^2.0.22
 - socket.io: ^4.6.1

```console
$ npm install
```

Start the server:
```console
$ npm run dev
```

## Features
---
◈ 使用 express 當作 server 的基礎。
◈ 透過 Sockect.io 來跟前端(Vue)進行訊息的溝通和傳輸。
◈ 

## File Structure
---
``` js
╠═ app/
║　╠═ controller/
║　║　╠═ index.js
║　║　╚═ account.js
║　║　
║　╠═ lib/
║　║　╚═ index.js
║　║　
║　╠═ model/
║　║　╚═ index.js
║　║　
║　╠═ router/
║　║　╚═ index.js
║　║　
║　╠═ socket/
║　║　╠═ index.js
║　║　╚═ user.js
║　║　
║　╚═ utils/
║　 　╚═ index.js
║　
╠═ package-lock.json
╠═ package.json
╚═ server.js
```
