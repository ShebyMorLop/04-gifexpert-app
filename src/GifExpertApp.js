import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {

    //const [categories, setCategories] = useState(['One Punch Man'])
    const [categories, setCategories] = useState(defaultCategories)

    //const handleAdd = () => {
    //
    //    setCategories([...categories, 'Naruto']);
    //    setCategories(cats => [...cats, 'Naruto'])
    //
    //}

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr></hr>
            <ol>
                {
                    categories.map(category =>
                        < GifGrid
                            key={category}
                            category={category} />
                    )
                }
            </ol>

        </>
    )
}
