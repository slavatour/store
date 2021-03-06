
/**
 * Module dependencies.
 */

var express = require('express');

var routes = require('./routes');
var user = require('./routes/user');


var http = require('http');
var path = require('path');
var i18n = require('i18next');

var app = express();

// multilamguage modal initialization
i18n.init({
    ns: { namespaces: ['ns.common', 'ns.special'], defaultNs: 'ns.special'},
    resSetPath: 'locales/__lng__/new.__ns__.json',
    saveMissing: true,
    debug: true,
    sendMissingTo: 'fallback',
    preload: ['en-US', 'ru-RU']
});

// all environments
app.set('port', process.env.PORT || 5000);

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(i18n.handle); //multilamguage modal, have to be after cookie, before router
app.use(app.router);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public_admin')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


i18n.registerAppHelper(app)
    .serveClientScript(app)
    .serveDynamicResources(app)
    .serveMissingKeyRoute(app);

i18n.serveWebTranslate(app, {
    i18nextWTOptions: {
      languages: ['en-US', 'ru-RU', 'dev'],
      namespaces: ['ns.common', 'ns.special'],
      resGetPath: "locales/resources.json?lng=__lng__&ns=__ns__",
      resChangePath: 'locales/change/__lng__/__ns__',
      resRemovePath: 'locales/remove/__lng__/__ns__',
      fallbackLng: "dev",
      dynamicLoad: true,

    }
});

app.get('/', routes.index);
app.get('/users', user.list);

var conString = 'postgres://postgres:cv251181ojv@localhost/store_db';


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
