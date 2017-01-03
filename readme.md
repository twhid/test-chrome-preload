# chrome preload warning

![screengrab](https://media.giphy.com/media/l4JzeNPdQAN6t9qDu/source.gif)

The warning is shown although the resouce is being used. In this test case the resource is a font, but the behavior is consistent with other assets. 

Note that the preload is triggered via a `link` header (headers below).
```
HTTP/1.1 200 OK
Link: </bungee-shade.woff>; rel=preload; as=font
Content-Type: text/html; charset=utf-8
Content-Length: 118
Date: Tue, 03 Jan 2017 21:20:50 GMT
Connection: keep-alive
```

### run the test

Node.js and yarn (or npm) must be installed, then...

```
$ yarn install
$ yarn start
```
or
```
$ npm install
$ npm start
```

Go to http://localhost:3300/ in Chrome.
