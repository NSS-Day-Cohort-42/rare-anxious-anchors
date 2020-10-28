import React, { useContext, useEffect, useState, useRef } from "react"
import { PostsContext } from "./PostsProvider"



export const PostDetails = (props) => {

    const deletePostDialog = useRef(null)
    const { getPostById, deletePost } = useContext(PostsContext)

    const [post, setPost] = useState({ user: {} })

    useEffect(() => {
        const postId = parseInt(props.match.params.postId)
        getPostById(postId)
            .then(setPost)
    }, [])

    const handleDate = (date) => {
        if ("postDate" in post) {
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

            <button
                className="delete_button"
                onClick={() => {
                    deletePostDialog.current.showModal()
                }}>Delete Post</button>

            <dialog className="delete_post" ref={deletePostDialog}>
                <div>Are you sure you want to delete this post?</div>
                <button className="close_dialog" onClick={e => deletePostDialog.current.close()}>Close</button>
                <button className="delete_dialog"
                    onClick={e => {
                        deletePost(post.id)
                        props.history.push("/posts")
                    }}>Delete Post</button>
            </dialog>
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