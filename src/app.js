console.log('App.js is running');

	var template = (
	   <div>
	     <h1>Indecision App</h1>
	     <p>This is some info</p>
	     <ol>
	       <li>Item one</li>
	       <li>Item two</li>
	     </ol>
	   </div>);

	var templateTwo = (
		<div>
		  <h1>Michael W</h1>
		  <p>Age:47</p>
		  <p>Location: Minnesota</p>
		</div>
		);
    var appRoute = document.getElementById('app');

ReactDOM.render(templateTwo, appRoute);