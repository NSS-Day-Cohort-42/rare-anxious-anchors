import React, { useRef, useContext, useEffect } from 'react'
import { commentContext } from './commentProvider'
import { useHistory } from 'react-router-dom'

const { commentContext } = useContext(commentContext)

const history = useHistory()
const commentSubject = useRef()
const commentBody = useRef()

const addAComment = () => {

    const constructAComment = () => {
        const newComment = {
            commentSubject: commentSubject.current.value,
            commentBody: commentBody.current.value,
            userId: parseInt(localStorage.getItem('rare_user_id')),
            postId: parseInt(''),
        }
        addAComment(newComment).then(() => {
            history.push('/')
        }).then(getComments)
    }

    return (
        <main className="container--comment">
            <section>
                <label className="comment__Subject">
                    <input type="text" placeholder="perdiem" ref={commentSubject} />
                </label>
                <label className="comment__Label">
                    <input type="text" placeholder="perdiem" ref={commentBody} />
                </label>
                <button className="button--submit" onClick={(e) => constructAComment()}>Add Comment</button>
            </section>
        </main>
    )
}