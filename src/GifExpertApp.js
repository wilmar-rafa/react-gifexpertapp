import React,{useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    //const categories = ['Animales', 'Plantas', 'Minerales'];
    const [categories, setCategories] = useState(['Animales']);

    /*const handleAdd = ()=>{
        console.log('vamos a agregar un elemento');
        setCategories([...categories, 'Agua']);
    }*/

    return (
        <>
            <h2>GifExpertApp</h2>
                <AddCategory setCategories= { setCategories }/>
            <hr />
            
            <ol>
                {
                    categories.map(category => (
                    //return <li key={ category }> {category} </li>
                    <GifGrid 
                            key = {category}
                            category = {category}
                        />
                    ))
                }
           </ol>

        </>
    );
        
} 


export default GifExpertApp;