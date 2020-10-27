import React, { useRef } from 'react'
import { useHistory, Link } from 'react-router-dom'




export const AddAComment = () => {
    const history = useHistory()
    const commentSubject = useRef()
    const commentBody = useRef()


    const constructAComment = () => {

        const newComment = {
            commentSubject: commentSubject.current.value,
            commentBody: commentBody.current.value,
            userId: parseInt(localStorage.getItem('rare_user_id')),
            postId: parseInt(''),
            timestamp: Date.now()
        }
        AddAComment(newComment).then(() => {
            history.push('/')
        })
    }

    return (
        <main className="container--comment">
            <section>
                <label className="comment__Subject">
                    <input type="text" placeholder="commentSubject" ref={commentSubject} />
                </label>
                <label className="comment__Label">
                    <input type="text" placeholder="commenBody" ref={commentBody} />
                </label>
                <button className="button--submit" onClick={(e) => constructAComment()}>Add Comment</button>
            </section>
        </main>
    )
}