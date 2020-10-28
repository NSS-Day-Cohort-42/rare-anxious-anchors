import React from "react"
import "./Posts.css"
import {useHistory} from "react-router-dom"


export const Posts = ({post}) => {

    const history = useHistory();

    const routeChange = () =>{ 
    let path = `/posts/${post.id}`; 
    history.push(path);
    }

    return (
    <div className="PostCard">
        <div className="PostTitle">{post.title}</div>
        <div className="PostSection">
            <div className="PostContent">{post.postBody}</div>
            <div className="PostContent">{post.Id}</div>
    <div className="PostContent">{post.user.firstName} {post.user.lastName}</div>
            <div className="PostContent">{post.category.name}</div>
        </div>
        <div className="PostDate">{new Date(post.postDate).toDateString()}</div>
        <button onClick={routeChange}>Post Details</button>
    </div>
    )};
