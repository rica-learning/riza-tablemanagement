import React from 'react';
import logo from './logo-copy.svg';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TableList from './components/TableList/TableList';
import NavBar from './components/NavBar/NavBar';

function Nav(props : any){

  if(props.isLoggedIn)
    return SecretComponent(props);
  else
    return RegularComponent(props);
}

function RegularComponent({name,shopType} : any){
  return(

    <div className="nav">
      <img src={logo} />
      <div> {name}'s {shopType}</div>
      <div> Tables </div>
      <div> Food </div>
    </div>

  )
}

function SecretComponent({name, shopType} : any){
  return(
    <div className="nav">
      <img src={logo} />
      <div> {name}'s {shopType}</div>
      <div> Tables </div>
      <div> Food </div>
      <div> Reports </div>
    </div>

  )
}


function Main(){
  return(
    <div className="main">
      <h1> Table Management </h1>
    </div>
  )
}

const tables = [
  "Table 1",
  "Table 2",
  "Table 3"
];


function Body(){
  return (
    <div className="body">
      <TableList />
    </div>
  )
}


ReactDOM.render(
  <div className="base">
    {/* <Nav  name="Rowan" shopType="Internet Cafe" isLoggedIn={true}/> */}
    <NavBar name="Rowan" shopType="Internet Cafe" />
    <Main />
    <Body />
  </div>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//https://api.github.com/users