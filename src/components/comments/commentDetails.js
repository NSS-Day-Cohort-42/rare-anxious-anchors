import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { commentContext } from "./commentProvider"
import { HumanDate } from "../utils/HumanDate"

export const CommentBuilder = () => {

    const history = useHistory()
    const { comments, getComments } = useContext(commentContext)
 console.log(comments)

    useEffect(() => {
        getComments()
    }, [])

 return <> 
       
        <section className="comment">
            {comments.map((comment, key) => {
                return (
                    <div key={key}>
                        <button onClick={() => history.push("/")} >x</button>
                        {/* <div> Date: {comment.timeStamp}</div> */}
                        <h3 className="comment__Subject">subject : {comment.commentSubject}</h3>
                        <div className="comment__commentBody">comment: {comment.commentBody}</div>
                        <div className="comment__commentBody">first name: {comment.user.firstName}</div>
                        <div className="comment__commentBody">last name: {comment.user.lastName}</div>
                        <div className="comment__commentBody">post title: {comment.post.title}</div>
                    </div>
                )
            })}
       
        </section>
    </>
}
