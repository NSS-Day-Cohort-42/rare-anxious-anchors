import React from "react"
import { Route } from "react-router-dom"
import { CreateAComment } from './comments/commentForm'
import { CommentBuilder } from './comments/commentDetails'
import { CommentProvider } from "./comments/commentProvider";
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
            <CategoryProvider>
                <PostsProvider>
                    <CommentProvider>
                        <Route path="/comments" exact>
                            <CommentBuilder />
                        </Route>
                        <Route path="/commentForm" exact render={
                            props => <CreateAComment {...props} />}>
                        </Route>
                        <Route exact path="/posts/create"
                            render={(props) => {
                                return <CreatePostForm {...props} />;
                            }} />
                        <Route exact path="/posts">
                            <PostsList />
                        </Route>
                    </CommentProvider>
                </PostsProvider>
            </CategoryProvider>
        

        <Route path="/posts/:postId(\d+)" render={
            props => <PostDetails {...props} />
        } />
        <Route exact path="/categories">
            <CategoryList />
        </Route>
        <Route exact path="/posts">
            <PostsList />
        </Route>
        <Route exact path="/posts/create"
            render={(props) => {
                return <CreatePostForm {...props} />;
            }}
        />
        </main>
    </>
}
