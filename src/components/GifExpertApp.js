import React, {useState} from 'react'
import { AddCategory } from './AddCategory'
import { GifGrid } from './GifGrid'


export const GifExpertApp = () => {

    //const categorias=['One Punch','Samurai X','Dragon Ball Z'];

    const [categories, setCategories] = useState(['One Punch'])



    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory  setCategories={setCategories}/>
            <hr/>

        <ol>
            {
                categories.map(category =>{
                return <GifGrid 
                key={category}
                category={category}/>
            })
        }
        </ol>
        </>
    )
}
