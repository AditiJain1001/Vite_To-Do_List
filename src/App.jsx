// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./MyComponents/NavBar";
import Footer from "./MyComponents/Footer";
import About from './MyComponents/About';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
 
  return (
    <>
    <NavBar title="To List Tracker | Code With Aditi"/>
    {/* <ToDos/> */}
    <Footer/> 
   
    {/* <Router>
  <Switch>
    <Route exact path="/home" render={()=>{
      return (
        <>
          <AddTodo addTodo={addTodo} />
          <ToDoList todoList={todoList} onDelete={onDelete} /> 
        </>
      )
    }}> 
    </Route>
    <Route exact path="/about">
      <About />
    </Route> 
  </Switch> 
  <Footer />
</Router> */}

    </>
  );
}

export default App
