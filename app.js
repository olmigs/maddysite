var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// get environment variables
var dotenv = require('dotenv')
const result = dotenv.config()
if (result.error) {
  throw result.error
}

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var writingRouter = require('./routes/writing');
var zinesRouter = require('./routes/zines');
var comedyRouter = require('./routes/comedy');
var photoRouter = require('./routes/photos');
var aboutRouter = require('./routes/about');
var contactRouter = require('./routes/contact');
var errorRouter = require('./routes/error')
var lessMiddleware = require('less-middleware');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
app.use(lessMiddleware(path.join(__dirname + '/public')));
app.use('/featherlight', express.static(__dirname + '/node_modules/featherlight/release/'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

// move necessary files to public folders, if env is 'production'
if (process.env.NODE_ENV === 'production') {
  var saver = require('./public/javascripts/htmlsaver');
  saver.copyFiles();
}

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/writing', writingRouter);
app.use('/zines', zinesRouter);
app.use('/comedy', comedyRouter);
app.use('/photos', photoRouter);
app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/error', errorRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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
