import React, { useContext, useEffect } from "react"
import { CategoryContext } from "./CategoryProvider"
import { Category } from "./Category"

export const CategoryList = () => {
    const { getCategories, categories } = useContext(CategoryContext)

    useEffect(() => {
        getCategories()
    }, [])

    return (
        <div ClassName="CategoryItems">
                {
                    categories.map(category => <Category key={category.id} category={category} />)
                }
            </div>
    )
}