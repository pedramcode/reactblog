import React from 'react'


export default class SinglePost extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>

                <div class="row card-panel post-panel">
                    <div class="post-image" style={{background:"url('"+this.props.post.postimage+"')"}}></div>
                    <div class="col s12">
                        <div class="row">
                            <div class="col s12 m2 center">
                                <img class="circle responsive-img" src={this.props.post.image}/>
                                <i class="material-icons  post-like-btn">favorite_border</i>
                            </div>
                            <div class="col s12 m10">
                                <h3>Title</h3>
                                <h5><a href="#" class="author-link">{this.props.post.author}</a></h5>
                                <div class="grey-text text-darken-2">{this.props.post.date}</div>
                                {this.props.post.body}
                                <div class="post-info-container">
                                    <div class="post-comment">
                                        <i class="material-icons">favorite</i>&nbsp;&nbsp;<span>{this.props.post.nlikes}</span>
                                    </div>
                                    <div class="post-comment">
                                        <i class="material-icons">comment</i>&nbsp;&nbsp;<span>{this.props.post.ncomments}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}