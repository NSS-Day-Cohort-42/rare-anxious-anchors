import React, { useState } from "react"

export const PostsContext = React.createContext()

export const PostsProvider = (props) => {
    const [posts, setPosts] = useState([])

    const getPosts = () => {
        return fetch("http://localhost:8088/posts")
            .then(res => res.json())
            .then(setPosts)
    }

    return (
        <PostsContext.Provider value={{
            posts, getPosts
        }}>
            {props.children}
        </PostsContext.Provider>
    )
}