import React from "react"
import { Route } from "react-router-dom"
import { CategoryProvider } from "./Categories/CategoryProvider"
import { CategoryList } from "./Categories/CategoryList"
import { PostsProvider } from "./posts/PostsProvider";
import { PostsList } from "./posts/PostsList"
import { CreatePostForm } from "./createPosts/CreatePost"
import { PostDetails } from "./posts/PostDetails"

export const ApplicationViews = (props) => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
        </main>
        <PostsProvider>
            <Route path="/posts/:postId(\d+)" render={
                props => <PostDetails {...props} />
                } />
        </PostsProvider>

        <CategoryProvider>
            <Route exact path="/categories">
                <CategoryList />
            </Route>
        </CategoryProvider>

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
