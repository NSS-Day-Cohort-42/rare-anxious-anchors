import React, { useEffect, useState } from "react"

export const PostsContext = React.createContext()

export const PostsProvider = (props) => {
    const [posts, setPosts] = useState([])

useEffect(() => {
    getPosts()
}, [])


    const getPosts = () => {
        return fetch("http://localhost:8088/posts")
            .then(res => res.json())
            .then(setPosts)
    }

    
    const getPostById = (id) => {
        return fetch(`http://localhost:8088/posts/${id}`)
            .then(res => res.json())
    }

    const addPost = post => {
        return fetch("http://localhost:8088/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
        .then(getPosts) 
    }

    const deletePost = postId => {
        return fetch(`http://localhost:8088/posts/${postId}`, {
            method: "DELETE"
        })
            .then(getPosts)
    }

console.log(posts)
    return (
        <PostsContext.Provider value={{
            posts, getPosts, addPost, getPostById, deletePost
        }}>
            {props.children}
        </PostsContext.Provider>
    )
}