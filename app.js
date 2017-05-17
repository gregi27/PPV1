var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var category = require('./routes/category');
var tags = require('./routes/tags');
var search = require('./routes/search');
var publications = require('./routes/publications');
var google = require('./routes/google_api');

var app = express();
app.use(express.static(__dirname));

console.log(__dirname);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('jade').renderFile);

app.use('/', index);
app.use('/calendar', index);
app.use('/fulltext/search', index);
app.use('/tags/search', index);
app.use('/tags', index);
app.use('/category/:category', index);
app.use('/category/:category/:id', index);

app.use('/api/category', category);
app.use('/api/tags',tags);
app.use('/api/search',search)


app.use('/api/publications', publications);
app.use('/publications', index);
app.use('/api/users', users);
app.use('/api/google', google)



/*app.get('*', function (req, res) {
    res.sendFile(__dirname + '/client/src/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});
*/
// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
*/

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;