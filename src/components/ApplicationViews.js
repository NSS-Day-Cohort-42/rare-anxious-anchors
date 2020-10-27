import React from "react"
import { Route } from "react-router-dom"
// import { AddAComment } from './comments/commentForm'
// import { CommentBuilder } from './comments/commentDetails'
// import { CommentProvider } from "./comments/commentProvider";
import { PostsProvider } from "./posts/PostsProvider";
import { Posts } from "./posts/Posts";
import { PostsList } from "./posts/PostsList"
import { CreatePostForm } from "./createPosts/CreatePost"
import { CategoryProvider } from "./Categories/CategoryProvider"
export const ApplicationViews = (props) => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <CategoryProvider>
                <PostsProvider>
                    {/* <CommentProvider> */}
                        {/* <Route path="/comments" exact>
                            <CommentBuilder />
                        </Route> */}
                        {/* <Route path="/commentForm" exact render={
                            props => <AddAComment {...props} />}>
                        </Route> */}
                        <Route exact path="/posts/create"
                            render={(props) => {
                                return <CreatePostForm {...props} />;
                            }} />
                        <Route exact path="/posts">
                            <PostsList />
                        </Route>
                    {/* </CommentProvider> */}
                </PostsProvider>
            </CategoryProvider>
        </main>
    </>
}
