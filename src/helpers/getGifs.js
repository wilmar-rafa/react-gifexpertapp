


    export const getGifs = async(category) => {
        const apiKey = 'FtqrIG2J2XBxma0PDChCNFrN2a5AKTte';
        const url    = 'https://api.giphy.com/v1/gifs/search'
        const resp   = await fetch(`${url}?q=${encodeURI(category)}&limit=10&api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        //const { url } = data.images.original;
        //return url;
        const gifs = data.map(img =>{
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        });
        //console.log(gifs);
        //setImages(gifs);

        return gifs;
    }
    