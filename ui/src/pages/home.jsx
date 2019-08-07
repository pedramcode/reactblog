import React from 'react'
import PostList from '../components/post_list'


export default class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let posts = [
            {
                title:"Test",
                body:"This is a test, It's a json object of an array that shown in a reactJs component.",
                date:"2019-01-02",
                author:"Pedram",
                ncomments:"43",
                nlikes:"541",
                image:require('../images/image.jpg'),
            }
        ];
        return (
            <div>
                {this.props.test}
                <PostList posts={posts}/>
            </div>
        );
    }
}