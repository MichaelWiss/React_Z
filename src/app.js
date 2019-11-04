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

	    var user = {
	    	name: 'Michael',
	    	age: 47,
	    	location: 'Minnesota'
	    };
    var userName = 'Charles';
    var userAge = 47;
    var userLocation = 'New York'
	var templateTwo = (
		<div>
		  <h1>{user.name}</h1>
		  <p>Age:{user.age}</p>
		  <p>Location: {user.location}</p>
		</div>
		);
    var appRoute = document.getElementById('app');

ReactDOM.render(templateTwo, appRoute);