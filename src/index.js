
window.jQuery = window.$ =  require('jquery/dist/jquery.min'); 
var angular = require('angular');
require("bootstrap");


var currencyWidget = require('./app/CurrencyWidget');
require('angular-ui-router');
var routesConfig = require('./routes');

require('./index.less');

var app = 'CurrencyCalculator';
module.exports = app;

angular.module(app, ['ui.router'])
  .config(routesConfig)
  .component('currencywidget', currencyWidget);


