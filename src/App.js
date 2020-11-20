import React from 'react'
import Header from './Components/Header'
// import Footer from './Components/Footer'
import Home from './Views/Home'
import Categories from './Views/Categories'
import AddNote from './Components/AddNote'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import UpdateNote from './Components/UpdateNote'

function App() {
  return (
    <div>

      <Router>

        <Header />

        <div className="p-3">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/AddNote" component={AddNote} />
            <Route exact path="/UpdateNote" component={UpdateNote} />
            <Route path='/Categories' component={Categories} />
          </Switch>

        </div>

      </Router>

    </div>
  );
}

export default App;
