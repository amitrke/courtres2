import express = require('express');
import path = require('path');
import {Routes} from "./routes/routes";
import { json, urlencoded } from "body-parser";

var port = process.env.PORT || 3000;
var app = express();

app.use(json());
app.use(urlencoded({
    extended: true
}));

app.use('/app', express.static(path.resolve(__dirname, 'app')));
app.use('/libs', express.static(path.resolve(__dirname, 'libs')));
app.use('/rest', new Routes().getRouter());

// for system.js to work. Can be removed if bundling.
app.use(express.static(path.resolve(__dirname, '.')));
app.use(express.static(path.resolve(__dirname, '../node_modules')));

var renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
}

app.get('/*', renderIndex);

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});