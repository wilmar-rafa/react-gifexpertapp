//import React,{useEffect,useState} from 'react'
import { useFetcthGifs } from '../hooks/useFetcthGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    /*useEffect(() => {
        getGifs(category)
            .then(setImages);
    }, [category]);*/

    const {data:images,loading} = useFetcthGifs(category);
    console.log(images,loading);

    //const [images, setImages] = useState([]);

    //getGifs();

    return (
        <>
            <h3>  {category} </h3>
            {loading ? 'Cargando...' : 'Data Cargada'}
            <div className= "card-grid">
                
                {
                    images.map((img) =>(
                        //return <li key={ id }> {title} </li>
                        <GifGridItem 
                            key = {img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
