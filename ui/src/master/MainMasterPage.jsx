import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Home from "../pages/home";
import Login from "../pages/login";
import Single from "../pages/single";
import Signup from "../pages/signup";
import Publish from "../pages/publish";


export default class MainMasterPage extends React.Component{

    render(){
        return (
            <Router>
                <div>
                    <div id="navbar">
                        <Link to="/" class="nav-item-link">
                            <i class="material-icons nav-item-link-text">home</i>
                        </Link>
                        <Link to="/login" class="nav-item-link">
                            <i class="material-icons nav-item-link-text">person</i>
                        </Link>
                        <Link to="/publish" class="nav-item-link">
                            <i class="material-icons nav-item-link-text">create</i>
                        </Link>
                        <a href="#" class="nav-item-link">
                            <i class="material-icons nav-item-link-text">settings</i>
                        </a>
                    </div>
                    <div class="container">
                        <Switch>
                            <Route exact path="/" component={Home} test="pppp"/>
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/single" component={Single}/>
                            <Route exact path="/signup" component={Signup}/>
                            <Route exact path="/publish" component={Publish}/>
                        </Switch>
                    </div>
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
                </div>
            </Router>
        );
    }
}