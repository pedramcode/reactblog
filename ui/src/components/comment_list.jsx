import React from 'react'
import Comment from "./comment";


export default class CommentList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const comments = this.props.comments;
        const listItems = comments.map(comment=>{
            return(
                <Comment comment={comment}/>
            );
        });
        return (
            <div>
                {listItems}
            </div>
        );
    }
}