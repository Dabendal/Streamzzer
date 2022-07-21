import Navbar from './Navbar';
import Home from './Home';
import './index.css';
import Footer from './Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import Accueil from './Accueil';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
       <div className="content">
        <Switch>
          <Route path="/home"> 
          <Home></Home>
          </Route>
          <Route path="/create"> 
          <Create></Create>
          </Route>
          <Route path="/accueil"> 
          <Accueil></Accueil>
          </Route>
        </Switch>
       </div>
       <Footer></Footer>
    
    </div>
    </Router>
  );
}

export default App; 
