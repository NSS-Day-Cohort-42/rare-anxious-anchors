import React from "react"
import "./Posts.css"


export const Posts = ({post}) => {
    return (
    <div className="PostCard">
        <div className="PostTitle">{post.title}</div>
        <div className="PostSection">
            <div className="PostContent">{post.postBody}</div>
            <div className="PostContent">{post.Id}</div>
            <div className="PostContent">{post.userId}</div>
            <div className="PostContent">{post.categoryId}</div>
        </div>
        <div className="PostDate">{post.postDate}</div>
    </div>
    )};
