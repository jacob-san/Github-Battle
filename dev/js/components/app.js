/**
 * Created by sandeepj on 19/6/17.
 */
import React, {Component} from 'react';
import Popular from './Popular'
var Reactrouter = require('react-router-dom');
var Router = Reactrouter.BrowserRouter;
var Route = Reactrouter.Route;
var Switch = Reactrouter.Switch;
import Nav from './Nav'
import Home from './Home'
import Battle from './Battle'
import Results from './Results'

class App extends Component{
    render(){
        return(
            <Router>
               <div className="container">
                   <Nav />
                   <Switch>
                       <Route path="/popular" component={Popular}/>
                       <Route exact path="/" component={Home}/>
                       <Route exact path="/battle" component={Battle}/>
                       <Route path='/battle/results' component={Results}/>
                       <Route render={()=>{
                           return <p>Not Found</p>
                       }}/>
                   </Switch>

               </div>
            </Router>
        )
    }
}
export default App;