const path = require('path');
const http = require('http');

const express = require('express');
const reactViews = require('express-react-views');
const errorHandler = require('errorhandler');
const logger = require('morgan');

const indexRoutes = require('./routes/index');


const app = express();

app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

const type = process.argv[2];
if (!type) {
  console.error('Missing argument react or pug');
  process.exit(1);
}

app.locals.type = type;

if (type === 'react') {
  app.set('port', 3000);
  app.set('view engine', 'jsx');
  app.engine('jsx', reactViews.createEngine({ transformViews: false }));
}
if (type === 'pug') {
  app.set('port', 4000);
  app.set('view engine', 'pug');
}

if ('development' === app.get('env')) {
  app.use(errorHandler());
  app.use(logger('dev'));
}

app.use('/', indexRoutes);

http.createServer(app).listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});
