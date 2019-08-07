import React from 'react'


export default class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:"",
            password:"",
            password2:"",
            firstname:"",
            lastname:"",
            email:"",
            passwordError:false,
            usernameError:false,
            passwordErrorText:"",
            usernameErrorText:"",
        };

        this.signupButtonClickHandler = this.signupButtonClickHandler.bind(this);
    }
    signupButtonClickHandler(e){
        e.preventDefault();
        if(this.state.password != this.state.password2){
            this.setState({passwordError:true});
            this.setState({passwordErrorText:"Passwords doesn't match"});
            return;
        }
        this.setState({passwordError:false});
        this.setState({passwordErrorText:""});
        let data = JSON.stringify({
            username:this.state.username,
            password:this.state.password,
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            email:this.state.email,
        });
        fetch("http://127.0.0.1:8000/api/signup/",{
            method:"POST",
            body:data,
            headers:{
                "Content-Type":"application/json",
            },
        }).then(raw=>{
            if(raw.status===406){
                this.setState({usernameError:true});
                this.setState({usernameErrorText:"This username already taken"});
                return;
            }
            this.setState({usernameError:false});
            this.setState({usernameErrorText:""});   
            let data = raw.json();
            data.then(resp=>{
                alert(resp);
                if(raw.ok){
                    this.setState({
                        username:"",
                        password:"",
                        password2:"",
                        firstname:"",
                        lastname:"",
                        email:"",
                        passwordError:false,
                        usernameError:false,
                        passwordErrorText:"",
                        usernameErrorText:"",
                    });
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
                            <input id="firstname" onChange={e=>this.setState({firstname:e.target.value})} 
                                type="text" value={this.state.firstname}/>
                            <label for="firstname">Firstname</label>
                        </div>
                        <div class="input-field">
                            <input id="lastname" onChange={e=>this.setState({lastname:e.target.value})} 
                                type="text" value={this.state.lastname}/>
                            <label for="lastname">Lastname</label>
                        </div>
                        <div class="input-field">
                            <input id="email" onChange={e=>this.setState({email:e.target.value})} 
                                type="text" value={this.state.email}/>
                            <label for="email">Email</label>
                        </div>
                        <div class="input-field">
                            <input id="username" class={this.state.usernameError?"invalid":""} 
                                onChange={e=>this.setState({username:e.target.value})} 
                                type="text" value={this.state.username}/>
                            <label for="username">Usernames</label>
                            <span class="helper-text" data-error={this.state.usernameErrorText}></span>
                        </div>
                        <div class="input-field">
                            <input id="password" onChange={e=>this.setState({password:e.target.value})} 
                                type="password" value={this.state.password}/>
                            <label for="password">Password</label>
                        </div>
                        <div class="input-field">
                            <input id="password2" class={this.state.passwordError?"invalid":""} 
                                onChange={e=>this.setState({password2:e.target.value})} 
                                type="password" value={this.state.password2}/>
                            <label for="password2">Confirm Password</label>
                            <span class="helper-text" data-error={this.state.passwordErrorText}></span>
                        </div>
                    </div>
                    <div class="col s12 m2 l4"></div>

                    <div class="row">
                        <div class="col s12 center-flex">
                            <button onClick={this.signupButtonClickHandler} class="btn waves-effect waves-light btn-fit ">Signup&nbsp;&nbsp;&nbsp;<i class="material-icons">assignment_ind</i></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}