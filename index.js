const fs = require('fs');
const express = require('express');
const app = express();

const html = fs.readFileSync('index.html', {encoding: 'utf8'});

app.use(express.static('public'));
app.set('etag', false);
app.set('x-powered-by', false);

app.get('/', function (req, res) {
    res.set('Link', '</bungee-shade.woff>; rel=preload; as=font; crossorigin');
    res.send(html);
});

app.listen(3300, function () {
    console.log('listening on port 3300');
});
