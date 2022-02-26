import './App.css';
import Header from './MyComponent/Header';
import TodosPage from './MyComponent/TodosPage';
import About from './MyComponent/About';
import PageNotFound from './MyComponent/PageNotFound';
import AddForm from './MyComponent/AddForm';
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";


function App() {

  return (
      <>
      <Router>
        <Header title='Todos List' searchBar={false} />
        <Switch>
          <Route exact path="/">
            <h4 className='App-logo'>This is Home page</h4>
            
          </Route>
          <Route exact path="/todos">
            <TodosPage />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/add-form">
            <AddForm />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
      </>
    

  );
}

export default App;
