import React from 'react';
import {Container,} from 'semantic-ui-react'
import TradoCard from '../src/component/Tradocard'
import Mastercard from "./component/mastercard";
import Home from './component/home'
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  Redirect
} from "react-router-dom";

function App() {

  return (
   <Router>
       <Container >
               <Route path="/home" component={Home}/>
               <Route path="/mastercard" component={Mastercard}/>
               <Route path="/idcard" component={TradoCard}/>
               <Redirect from='/' to='/home'/>
       </Container>
   </Router>
  );
}

export default App;
