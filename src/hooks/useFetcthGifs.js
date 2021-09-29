import { useState } from "react";
import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetcthGifs = (category) => {
    
    const [state, setState] = useState ({
        data: [],
        loading:true
    });

    useEffect(() => {
        getGifs(category)
            .then(img=>{

                //setTimeout(() => {
                    setState({
                        data: img,
                        loading: false
                    });
               // }, 3000);
                

            });
    }, [category]);

    return state;
}
