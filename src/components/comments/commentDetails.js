import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { commentContext } from "./commentProvider"

export const CommentBuilder = () => {

    const history = useHistory()
    const { comments, getComments } = useContext(commentContext)
 

    useEffect(() => {
        getComments()
    }, [])
    
    return <> 
       
        <section className="comment"> hi
            {comments.map((comment, key) => {
                return (
                    <div key={key}>
                        <button onClick={() => history.push("/")} >x</button>
                        {/* <div> Date: {HumanDate(comment.timestamp)}</div> */}
                        <h3 className="comment__Subject">{comment.commentSubject}</h3>
                        <div className="comment__commentBody">{comment.commentBody}</div>
                    </div>
                )
            })}
       
        </section>
    </>
}
