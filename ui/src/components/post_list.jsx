import React from 'react'
import Post from "./post";


export default class PostList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const posts = this.props.posts;
        const listItems = posts.map(post=>{
            return(
                <Post post={post}/>
            );
        });
        return (
            <div>
                {listItems}
            </div>
        );
    }
}