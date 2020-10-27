import React, { useContext, useEffect, useState } from "react"
import { PostsContext } from "./PostsProvider"
import { Posts } from "./Posts"


export const PostsList = () => {
const { posts, getPosts } = useContext(PostsContext)

useEffect(() => {
    getPosts()
}, [])

return (
        <div className="animals">
            {
                posts.map(post => <Posts key={post.id} post={post} />)
            }
        </div>
)
}