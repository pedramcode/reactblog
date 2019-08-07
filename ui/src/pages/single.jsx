import React from 'react'
import SinglePost from '../components/single_post'
import CommentList from '../components/comment_list'


export default class Single extends React.Component{
    render(){
        let post = {
            title:"Test",
            body:"This is a test, It's a json object of an array that shown in a reactJs component.",
            date:"2019-01-02",
            author:"Pedram",
            ncomments:"43",
            nlikes:"541",
            image:require('../images/image.jpg'),
            postimage:require('../images/back.jpg'),
        };
        let comments =[
            {
                author:"ali",
                date:"2019-02-02",
                body:"That was Awesome!",
            },
            {
                author:"john12",
                date:"2019-02-03",
                body:"This is a test comment",
            },
        ];
        return (
            <div>
                <SinglePost post={post}/>
                <CommentList comments={comments}/>
            </div>
        );
    }
}