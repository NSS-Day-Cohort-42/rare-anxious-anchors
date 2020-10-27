import React, { useState, useContext, useEffect } from "react"
import { CategoryContext } from "./CategoryProvider"
import Category from "./Category"

export const CategoryList = ({ history }) => {
    const { getCategories, categories, searchTerms } = useContext(CategoryContext)

    const [filteredCategories, setFiltered] = useState([])

    useEffect(() => {
        getCategories()
    }, [getCategories])

    useEffect(() => {
        const matchingCategories = categories.filter(category => category.name.toLowerCase().includes(searchTerms.toLowerCase()))
        setFiltered(matchingCategories)
    }, [categories, searchTerms])

    useEffect(() => {
        setFiltered(categories)
    }, [categories])

    return (
        <div style={{ marginTop: "2rem"}}>
            <button onClick={() => history.push("/categories/create")}>
                Create Category
            </button>
            <div ClassName="categories">
                {
                    filteredCategories.map(category => <Category key={category.id} category={category} />)
                }
            </div>
        </div>
    )
}