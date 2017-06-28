/**
 * Created by sandeepj on 27/6/17.
 */
import React, {Component} from 'react';
import queryString from 'query-string'
import api from '../utils/api'
import { Link } from 'react-router-dom'


class Results extends Component{
    constructor(props){
        super(props);
        this.state={
            winner:null,
            loser:null,
            error:null,
            loading:true
        }
        this.componentDidMount=this.componentDidMount.bind(this);
    }
    componentDidMount(){
        var players = queryString.parse(this.props.location.search)
        console.log(this);
        api.battle([
            players.playerOneName,
            players.playerTwoName
        ]).then(function (results) {
            if(results===null){
                return this.setState(()=>{
                    return{
                        error: 'There was an error. Check that both users exist on GitHub',
                        loading:false,
                    }
                })
            }
            this.setState(()=>{
                return{
                    error:null,
                    winner: results[0],
                    loser: results[1],
                    loading: false,
                }
            })
        })
    }
    render(){

        var error = this.state.error;
        var winner = this.state.winner;
        var loser = this.state.loser;
        var loading = this.state.loading;

        if (loading===true){
            return <p>Loading..</p>
        }
        if(error){
            return(
                <div>
                    <p>{error}</p>
                    <Link to='/battle'>Reset</Link>
                </div>
            )
        }
        return(
            <div>{JSON.stringify(this.state, null,2)}</div>
        )
    }
}
export default Results;