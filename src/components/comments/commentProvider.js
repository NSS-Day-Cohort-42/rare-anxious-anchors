import { useState } from "react";
import React from 'react'

export const commentContext = React.createContext()

export const CommentProvider = (props) => {
    const [comments, setComments] = useState([])

    const getComments = () => fetch('http://localhost:8088/comments')
        .then(res => res.json())
        .then(setComments)

    const AddAComment = async comment => {
        const result = await fetch("http://localhost:8088/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        })
        return getComments(result)
    }

    return (
        <commentContext.Provider value={{
            comments, setComments, getComments, AddAComment
        }}>
            {props.children}
        </commentContext.Provider>
    )
}