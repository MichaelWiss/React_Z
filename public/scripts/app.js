'use strict';

console.log('App.js is running');

var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Indecision App'
	),
	React.createElement(
		'p',
		null,
		'This is some info'
	)
);
var appRoute = document.getElementById('app');

ReactDOM.render(template, appRoute);
