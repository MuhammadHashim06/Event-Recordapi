var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require("body-parser");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var setdataRouter = require('./routes/setdata');
var getdataRouter = require('./routes/getdata');
const cors = require("cors");
const deleteRouter = require('./routes/deletedata');
const updateRouter = require('./routes/updatedata');
const database = require('./database/mysql');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
  origin: "http://localhost:3000", // Replace with the actual origin of your frontend
  methods: ["GET", "POST","DELETE","PUT"], // Specify the HTTP methods to allow
  credentials: true, // Allow cookies and other credentials to be sent
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/setdata',setdataRouter);
app.use('/getdata',getdataRouter);
app.use('/deletedata', deleteRouter);
app.use('/updatedata', updateRouter);
// app.use('/database',database );


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
