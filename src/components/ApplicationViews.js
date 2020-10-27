import React from "react"
import { Route } from "react-router-dom"
import { PostDetails } from "./posts/postDetail"
import { PostProvider } from "./posts/postProvider"

                           

export const ApplicationViews = () => {
    return <>
     <PostProvider>
                <Route path="/posts/:postId(\d+)" render={
                    props => <PostDetails {...props} />
                } />
            </PostProvider>
            

        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
        </main>
    </>
}
