import React from 'react';
import logo from './logo.svg';
import './App.css';


/*

const formatDate = (date) => {
    return (<h5>{date.year}, {date.month}</h5>)
};

function App(props) {
  return (
    <div className="Comment">
      <UserInfo user = {props.author}/>
      <div className="Comment-text">
        <br/>
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
  <img className="Avatar"
          src={props.user.avatarUrl}
          alt={props.user.name}
  />);
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user = {props.user}/>
      <div className="UserInfo-name">
        <br/>
        {props.user.name}
      </div>
    </div>
  );
}

// Dividing App components into multiple components
*/



class App extends React.Component {
  render() {
    return (
    <div className="App">
      
        Learn React here
        
    </div>
  );
  }
}


export default App;
