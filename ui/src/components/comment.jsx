import React from 'react'


export default class Comment extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div class="card-panel comment-panel">
                <div class="col s12">
                    <h5>{this.props.comment.author}</h5>
                    <h6>
                        <i class="material-icons">date_range</i>
                        {this.props.comment.date}
                    </h6>
                    <blockquote>{this.props.comment.body}</blockquote>
                </div>
            </div>
        );
    }
}