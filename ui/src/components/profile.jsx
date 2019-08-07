import React from 'react'


export default class Profile extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div class="card-panel post-panel">
                    <div class="row">
                        <div class="col s12 center">
                            <img width="300" class="circle responsive-img" src={this.props.user.image}/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12 center">
                            <h3>{this.props.user.firstname} {this.props.user.lastname}</h3>
                            <h5>@{this.props.user.username}</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12 m3 center profile-info-texts">Following: {this.props.user.following}</div>
                        <div class="col s12 m3 center profile-info-texts">Followers: {this.props.user.followers}</div>
                        <div class="col s12 m3 center profile-info-texts">Likes: {this.props.user.likes}</div>
                        <div class="col s12 m3 center profile-info-texts">Comments: {this.props.user.comments}</div>
                    </div>
                    <div class="row">
                        <div class="col s12 m2"></div>
                        <div class="col s12 m8">
                            <p>{this.props.user.bio}</p>
                        </div>
                        <div class="col s12 m2"></div>
                    </div>
                    <div class="row">
                        <div class="col s12 m4 center-flex margin-top">
                            <button class="btn red btn-fit waves-effect waves-light">Block&nbsp;&nbsp;&nbsp;<i class="material-icons">do_not_disturb_alt</i></button>
                        </div>
                        <div class="col s12 m4 center-flex margin-top ">
                            <button class="btn green btn-fit waves-effect waves-light">Follow&nbsp;&nbsp;&nbsp;<i class="material-icons">person_add</i></button>
                        </div>
                        <div class="col s12 m4 center-flex margin-top">
                            <button class="btn blue btn-fit waves-effect waves-light">Message&nbsp;&nbsp;&nbsp;<i class="material-icons">markunread</i></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}