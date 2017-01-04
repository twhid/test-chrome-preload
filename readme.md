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

## UPDATED Jan 4, 2016

Some notes regarding my research into how Chrome handles preload link headers.

### crossorigin

In [this twitter thread](https://twitter.com/twhid/status/816397918563430401), Yoav Weiss mentions that one needs to add a `crossorigin` attribute to the preload directive in order to avoid a double-download of font assets.

My initial tests supported this: the warning disappeared as did the double downloads in the network inspector in Chrome 55. But my current test code, for whatever reason, continues to cause Chrome to double-download (although the preload warning has disappeared). It's not clear to me if this is a bug in Chrome or some issue with how I'm sending the headers.

**Handy links**
* See this [Github issue](https://github.com/w3c/preload/issues/32) for discussion among implementors
* The [preload spec](https://w3c.github.io/preload/)
