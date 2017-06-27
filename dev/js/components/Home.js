/**
 * Created by sandeepj on 27/6/17.
 */
import React, {Component} from 'react';
var Link = require('react-router-dom').Link;
class Home extends Component{
    render(){
        return(
            <div className="home-container">
                <h1>Github battle: Battle your friends</h1>
                <Link className="button" to="/battle">
                    Battle
                </Link>
            </div>
        )
    }
}
export default Home;