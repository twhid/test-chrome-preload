var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('etag', false);
app.set('x-powered-by', false);

app.get('/', function (req, res) {
    res.set('Link', '</bungee-shade.woff>; rel=preload; as=font');
    res.send('<html><head><link rel="stylesheet" href="/style.css"></head><body><h1>How is this supposed to work?</h1></body></html>');
});

app.listen(3300, function () {
    console.log('listening on port 3300');
});
