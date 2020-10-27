import { useState } from "react";
import React from 'react'

export const commentContext = React.createContext()

export const UserProvider = (props) => {
    const [comments, setComments] = useState([])

    const getComments = () => fetch('http://localhost:8088/comments')
        .then(res => res.json())
        .then(setComments)

    const addAComment = async comment => {
        const result = await fetch("http://localhost:8088/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comment)
        })
        return getComments(comment)
    }

    return (
        <commentContext.Provider value={{
            comments, setComments, getComments, addAComment
        }}>
            {props.children}
        </commentContext.Provider>
    )
}