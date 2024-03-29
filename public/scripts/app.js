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
	),
	React.createElement(
		'ol',
		null,
		React.createElement(
			'li',
			null,
			'Item one'
		),
		React.createElement(
			'li',
			null,
			'Item two'
		)
	)
);

var user = {
	name: 'Michael',
	age: 47,
	location: 'Minnesota'
};
var book1 = {
	author: 'Toni Morrison',
	title: 'Sula'
};
var userName = 'Charles';
var userAge = 47;
var userLocation = 'New York';
var templateTwo = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		user.name
	),
	React.createElement(
		'p',
		null,
		'Age:',
		user.age
	),
	React.createElement(
		'p',
		null,
		'Location: ',
		user.location
	),
	React.createElement(
		'p',
		null,
		'Reading List: ',
		book1.title,
		' by ',
		book1.author
	)
);
var appRoute = document.getElementById('app');

ReactDOM.render(templateTwo, appRoute);
