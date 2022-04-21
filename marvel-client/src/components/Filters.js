import React, {useContext, useState, useEffect} from 'react';
import {Context} from '../store/store'
import axios from 'axios';

export default function Filters() {
    const [state, dispatch] = useContext(Context)
    const [searchTerm, setSearchTerm ] = useState('')
    const [categories, setCategories] = useState([])
    const [activeSearch, setActiveSearch] = useState('character')
    const [results, setResults] = useState([])

    const updateSearch = (e) => {
        setActiveSearch(e.target[e.target.selectedIndex].value)
    }

    const getCategories = async () => {
        try {
        const response = await axios.get('http://localhost:1337/search-types')
        setCategories(response.data)
        } catch (err) {
        console.log(err.message, err.code)
        }
    }

    const getResults = async () => {
        if(searchTerm){
            let request = `http://localhost:1337/search/${activeSearch}/${searchTerm}`
            console.log(request)

            try {
                const response = await axios.get(request)
                setResults(response.data)
                console.log(response)
            } catch (err) {
                console.log(err.message, err.code)
            }
        }
    }

    useEffect(() => {
        getCategories()
    }, [categories]);


    return(
        <div className="filter-row">
            <input className="search-input" id="term" name="term" type="text" placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select name="categories" className="dropdown-filters" id="categories" onChange={(e) => updateSearch(e)}>
                {categories.map((category, i) => {
                    const key = `dropdown--${i}`

                    return(
                        <option key={key} className="dropdown-filters__option" value={category.tag}>{category.name}</option>
                    )
                })}
            </select>
            <button className="search__button" onClick={getResults}>Search</button>
        </div>
    )
        
}