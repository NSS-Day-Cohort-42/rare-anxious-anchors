import React, { useRef, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { HumanDate } from '../utils/HumanDate'
import { commentContext } from './commentProvider'






export const CreateAComment = () => {

    const { AddAComment, getComments } = useContext(commentContext)
 
 


    const commentSubject = useRef()
    const commentBody = useRef()
    const history = useHistory()

    const ConstructAComment = () => {
   
        const newComment = {
            commentSubject: commentSubject.current.value,
            commentBody: commentBody.current.value,
            userId: parseInt(localStorage.getItem('rare_user_id')),
            postId: parseInt(''),
            timeStamp: ''
        }
        AddAComment(newComment).then(() => {
           history.push('/comments')
        }).then(getComments)
    }

    return (
        <main className="container--comment">
            <section>
                <label className="comment__Subject">
                    <input type="text" placeholder="commentSubject" ref={commentSubject} />
                </label>
                <label className="comment__Label">
                    <input type="text" placeholder="commentBody" ref={commentBody} />
                </label>
                <button className="button--submit" onClick={(e) => ConstructAComment()}>Add Comment</button>
            </section>
        </main>
    )
}