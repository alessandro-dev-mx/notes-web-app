import React from 'react'
import Header from './Components/Header'
// import Footer from './Components/Footer'
import Home from './Views/Home'
import Categories from './Views/Categories'
import AddCategory from './Components/AddCategory'
import UpdateCategory from './Components/UpdateCategory'
import AddNote from './Components/AddNote'
import UpdateNote from './Components/UpdateNote'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

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
            <Route path='/AddCategory' component={AddCategory} />
            <Route path='/UpdateCategory' component={UpdateCategory} />
          </Switch>

        </div>

      </Router>

    </div>
  );
}

export default App;
