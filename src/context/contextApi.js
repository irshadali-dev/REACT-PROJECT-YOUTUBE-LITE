import React, { createContext, useEffect, useState } from "react";
import { fetchDataFromApi } from '../utils/api'


export const Context = createContext()

export const AppContext = (props) => {
    const [loading, setloading] = useState(false)
    const [searchResults, setSearchResults] = useState(false)
    const [selectCategories, setSelectCategories] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(() => {
        fetchSelectedCategoryData(selectCategories)
    }, [selectCategories])

    const fetchSelectedCategoryData = (query) => {
        setloading(true)
        fetchDataFromApi(`search/?=${query}`).then((res) => {
            console.log(res)
            // setSearchResults(res)
            setloading(false)
        })
    }

    return (
        <Context.Provider value={{
            loading,
            setloading,
            searchResults,
            setSearchResults,
            selectCategories,
            setSelectCategories,
            mobileMenu,
            setMobileMenu
        }} >
            {props.children}
        </Context.Provider>
    )
}