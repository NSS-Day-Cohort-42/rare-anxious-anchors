import React, { useRef, useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { HumanDate } from '../utils/HumanDate'
import { commentContext } from './commentProvider'
import { PostsContext } from '../posts/PostsProvider'






export const CreateAComment = (props) => {

    const { AddAComment, comments, getComments } = useContext(commentContext)

    // const { getPostById } = useContext(PostsContext)

    // const [post, setPost] = useState({ user: {} })
 
//     const getValue = comments.map((id)=> {
//  return id.postId === posts.id
//  })
 


    const commentSubject = useRef()
    const commentBody = useRef()
    const history = useHistory()

    const ConstructAComment = () => {

         AddAComment ({
            
            commentSubject: commentSubject.current.value,
            commentBody: commentBody.current.value,
            userId: parseInt(localStorage.getItem('rare_user_id')),
            postId:3
            // timeStamp: '',
        })
.then(() => {
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