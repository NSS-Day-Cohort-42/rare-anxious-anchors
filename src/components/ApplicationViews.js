import React from "react"
import { Route } from "react-router-dom"
import { PostsProvider } from "./posts/PostsProvider";
import { Posts } from "./posts/Posts";
import { PostsList } from "./posts/PostsList"

export const ApplicationViews = () => {
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
    </>
}
