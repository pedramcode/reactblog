import React from 'react'
import {Link} from 'react-router-dom'


export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username: "",
            password: "",
        };
        this.loginClickHandler = this.loginClickHandler.bind(this);
    }
    loginClickHandler(e){
        let data = JSON.stringify({
            username:this.state.username,
            password:this.state.password,
            fieldsError:false,
        });
        fetch("http://127.0.0.1:8000/api/login/",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:data
        }).then(raw=>{
            raw.json().then(resp=>{
                if(raw.ok){
                    alert(resp);
                    this.setState({fieldsError:false});
                }else{
                    this.setState({fieldsError:true});
                }
            });
        });
    }
    render(){
        return (
            <div>
                <div class="row card-panel post-panel">
                    <div class="col s12 m2 l4"></div>
                    <div class="col s12 m8 l4">
                        <div class="input-field">
                            <input class={this.state.fieldsError?"invalid":""} onChange={e=>this.setState({username:e.target.value})} value={this.state.username} id="username" type="text"/>
                            <label for="username">Usernames</label>
                        </div>
                        <div class="input-field">
                            <input class={this.state.fieldsError?"invalid":""} onChange={e=>this.setState({password:e.target.value})} value={this.state.password} id="password" type="password"/>
                            <label for="password">Password</label>
                        </div>
                    </div>
                    <div class="col s12 m2 l4"></div>

                    <div class="row">
                        <div class="col s12 center-flex">
                            <button onClick={this.loginClickHandler} class="btn waves-effect waves-light btn-fit">Login&nbsp;&nbsp;&nbsp;<i class="material-icons">arrow_forward</i></button>
                        </div>
                        <div class="col s12">
                            <br/><br/>
                            <Link to="/signup">Haven't account yet? register now</Link><br/><br/>
                            <a href="#">I forget my password</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}