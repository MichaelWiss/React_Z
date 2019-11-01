console.log('App.js is running')

	// var template = <p>This is jsx</p>;

	// 
	var template = React.createElement(
		"h1",
		{ id: "someid" },
		"Something Else"
);
var appRoute = document.getElementById('app');

ReactDOM.render(template, appRoute);