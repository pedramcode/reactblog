import React from 'react'
import { Link } from 'react-router-dom'


export default class Post extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <div class="row card-panel post-panel">
                    <div class="col s12">
                        <div class="row">
                            <div class="col s12 m2">
                                <img class="center circle responsive-img" src={this.props.post.image}/>
                            </div>
                            <div class="col s12 m10">
                                <h3>{this.props.post.title}</h3>
                                <h5><a href="#" class="author-link">{this.props.post.author}</a></h5>
                                <div class="grey-text text-darken-2">{this.props.post.date}</div>
                                <p>
                                    {this.props.post.body}
                                </p>
                                <div class="post-info-container">
                                    <div class="post-comment">
                                        <i class="material-icons">favorite</i>&nbsp;&nbsp;<span>{this.props.post.nlikes}</span>
                                    </div>
                                    <div class="post-comment">
                                        <i class="material-icons">comment</i>&nbsp;&nbsp;<span>{this.props.post.ncomments}</span>
                                    </div>
                                </div>
                                <Link to="/single" class="right continue-link">Continue</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}