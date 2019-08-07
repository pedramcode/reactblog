import React from 'react'
import Profile from '../components/profile'


export default class Home extends React.Component{
    render(){
        let user = {
            username:"pedram21",
            firstname:"Pedram",
            lastname:"Dehghanpour",
            followers:"323",
            following:"412",
            likes:"3122",
            comments:"92",
            bio:"Full-stack developer and computer sience researcher who is creator of this application. This is a single page application that powered by python back-end and reactjs front-end.",
            image:require("../images/image.jpg"),
        };
        return (
            <div>
                <Profile user={user}/>
            </div>
        );
    }
}