import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import * as serviceWorker from './serviceWorker';


/* --------------------------------------------------------------------------
const formatName = (user) => {
	if(user) {
		return user.firstName + ' ' + user.lastName;
	}
	return "Stranger.";
}

const user = {
	firstName : 'Shruti',
	lastName : 'Mittal'
};

var tick = () => { 
const element = (
	<div>
		<h1>
			Hello, {formatName(user)}!
		</h1>
		<h2>It is {new Date().toLocaleTimeString()}.</h2>
	</div>
);

ReactDOM.render(
    element,
  document.getElementById('root')
)
};

setInterval(tick, 1000);

//We call ReactDOM.render() to change the rendered output that update the UI
-----------------------------------------------------------------------------------*/ 



/* ----------------------------------------------------------------------------------
var author = {
	avatarUrl : "https://www.avatar.com",
	name : "Stark"
};

var name = "Sexy";

var date = {
	month: "5",
	year: "2020"
};

var text = "Gettext??";

ReactDOM.render(
    <App author = {author} text = {text} name = {name} date = {date}/>,
  document.getElementById('root')
)

// divide components further 
-------------------------------------------------------------------------------------*/



/* ------------------------------------------------------------------------------------
// function Clock(props) {
// 	return (
// 		<div>
// 	      <h1>Hello, world!</h1>
// 	      <h2>It is {props.date.toLocaleTimeString()}.</h2>
// 	    </div>
// 	);
// }

// function tick() {
// 	ReactDOM.render(
// 	    <Clock date={new Date()} />,
// 	  document.getElementById('root')
// 	);
// }

// setInterval(tick, 1000);


// Here still clock is not updating itself
// Here we calls tick component that render clock every second
----------------------------------------------------------------------------------------*/



 //----------------------------------------------------------------------------------------
// In order to call clock once and further updated by its own we use state
// state is private and fully controlled by components

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {date: new Date()}; // Initializing state
	}

	// Lifecycle  Methods----------------------------------------------------------
	// We want to set timer when we call component for the first time
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(), 1000);
	}

	// Clear the timer when DOM produced by component is removed
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	// End of life cycle Methods --------------------------------------------------

	tick() {
		this.setState({
			date: new Date()
		});
	}
	// Since it set the state it call the render to see the changes over the screen

	render() {
		return (
			<div>
				<h1> Hello, world!!</h1>
				<h2> It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		)
	}
}


ReactDOM.render(
    <Clock />,
  document.getElementById('root')
)
//-----------------------------------------------------------------------------------------------


serviceWorker.unregister();
