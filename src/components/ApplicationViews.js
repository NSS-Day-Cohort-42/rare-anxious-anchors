import React from "react"
import { Route } from "react-router-dom"
import { AddAComment } from './comments/commentForm'
import { CommentBuilder } from './comments/commentDetails'
import { CommentProvider } from "./comments/commentProvider";

export const ApplicationViews = () => {
    return <>

            <main style={{
                margin: "5rem 2rem",
                lineHeight: "1.75rem"
            }}>
                <CommentProvider>
                <Route  path="/comments" exact>
                    <CommentBuilder />
                </Route>
                <Route path="/commentForm" exact render={
                    props => <AddAComment {...props} />}>
                </Route>
                </CommentProvider>
            </main>
    </>
}
