'use strict';

console.log('App.js is running');

var template = React.createElement(
	'h1',
	null,
	'Indecision App'
);
var appRoute = document.getElementById('app');

ReactDOM.render(template, appRoute);
