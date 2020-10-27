import React, { useContext, useEffect, useState } from "react"
import { PostsContext } from "./PostsProvider"
import { Posts } from "./Posts"



export const PostsList = () => {

    const { posts, getPosts } = useContext(PostsContext)

    const [ userPosts, setUserPosts ] = useState([])
    

    useEffect(() => {
        getPosts()
    }, [])

    useEffect(() => {
        const filter = posts.filter(m => m.userId === parseInt(localStorage.getItem("users")))
        setUserPosts(filter)
    }, [posts])
    
    return (
        <>
        <div className="Post">
            <article className="PostList">
                {Posts(posts => <Posts key={posts.id} posts={posts}/>)}
            </article>
        </div>
        </>
    )
}