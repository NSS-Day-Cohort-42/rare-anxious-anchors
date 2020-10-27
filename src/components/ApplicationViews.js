import React from "react"
import { Route } from "react-router-dom"
import { PostsProvider } from "./posts/PostsProvider";
import { Posts } from "./posts/Posts";
import { PostsList } from "./posts/PostsList"
import { CreatePostForm } from "./createPosts/CreatePost"

export const ApplicationViews = (props) => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
        </main>

        <PostsProvider>
            <Route exact path="/posts">
                    <PostsList />
            </Route>
        </PostsProvider>
        
        <Route exact path="/posts/create"
        render={(props) => {
            return <CreatePostForm {...props} />;
        }}
        />
    </>
}
