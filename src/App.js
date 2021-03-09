import './App.css';
import BrandHeader from './Components/BrandHeader/BrandHeader';
import Login from './Components/Pages/Home';
import Home from './Components/Pages/Home';
import Todo from './Components/Pages/Todo/Todo';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import Cards from './components/Cards/Cards';
//import CardHolder from './components/Cards/CardHolder';
//

//import imgMeme from './assets/meme.jpg';

function App() {
  return (
    <Router>
      <section>
        <BrandHeader></BrandHeader>
        <Switch>
          <Route path="/" exact>
              <Home />
          </Route>
          <Route path="/todos" exact>
            <Todo />
          </Route>
          <Route path="/login" exact>
              <Login></Login>
          </Route>
        </Switch>
      </section>
    </Router>
  );
}

export default App;
