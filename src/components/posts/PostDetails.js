import React, { useContext, useEffect, useState } from "react"
import { PostsContext } from "./PostsProvider"


export const PostDetails = (props) => {
    const { getPostById } = useContext(PostsContext)

    const [post, setPost] = useState({user: {}})

    useEffect(() => {
        const postId = parseInt(props.match.params.postId)
        getPostById(postId)
            .then(setPost)
    }, [])

    const handleDate = (date) => {
        if("postDate" in post){
            return new Date(date).toDateString()
        }
    }

    return (
        <div className="postDetailContainer">
            <h1 className="postHeader">{post.header}</h1>
            <h2 className="postTitle">{post.title}</h2>
            <div className="body">
                <h3>{post.postBody}</h3>
                <h4>{handleDate(post.postDate)}</h4>
                <div>{post.user.displayName}</div>

            </div>
            <div>
            </div>
            <br></br>
            <button onClick={() => {
                props.history.push(`/tags`)
            }}>Manage Tags</button>
            <button onClick={() => {
                props.history.push(`/posts`)
            }}>Add post</button>
            <button onClick={() => {
                props.history.push(`/comments`)
            }}>Show Comments</button>
            <button onClick={() => {
                props.history.push(`/comments`)
            }}>Add Comment</button>

        </div>
    )
}