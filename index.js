var path = require('path');
var logger = require('morgan');
var express = require('express');
var app = express();
app.use(logger('dev'));
app.use('/public', express.static(path.join(__dirname, 'public')));

//app.use(require('./routes/auth'))
app.use(function (req, res, next) {
 /* if (req.originalUrl != '/') return res.redirect('/');*/
  res.sendFile(path.join(__dirname, 'treeDirective.html'))
});
var server = app.listen(process.env.PORT, function () {
  console.log('Listening on port ' + server.address().port);
});