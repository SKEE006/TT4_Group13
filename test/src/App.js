import React from 'react';
import './App.css';
import Login from "./pages/login.js"
import Nav from "./nav/nav.js"

function App() {
  return (
    <div className="App">
      <Nav/>

      <main className="form-signin">
        <Login/>
      </main>
    </div>
  );
}

export default App;
