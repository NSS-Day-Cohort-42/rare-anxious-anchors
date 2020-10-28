import React from "react"

export const Category = ({category}) => {
    return (
    <div className="categoryCard">
        <h3 className="category_name">Categories</h3>
        <div className="categoryItem">{category.name}</div>

    </div>
    )};