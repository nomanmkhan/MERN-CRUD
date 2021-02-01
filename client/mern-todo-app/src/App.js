import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodoList from './components/TodoList';
import EditList from './components/EditList';
import CreateList from './components/CreateList';


function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/" target="_blank">
            </a>
            <Link to="/" className="navbar-brand">Todo App</Link>
              <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                  <Link to="/edit" className="nav-link">Edit Todo's</Link>
                  </li>
                  <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                  </li>
                </ul>
              </div>
        </nav>
          <br />


          <Route path="/" component = {TodoList}  />
          <Route path="/edit"  component = {EditList}/>
          <Route path="/create" component={CreateList} />  
      </div>
    </Router>
  );
}

export default App;