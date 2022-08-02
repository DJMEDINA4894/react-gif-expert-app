import { getGifs } from "../helpers/getGifs";
import { Images } from "../helpers/I-GifExpertApp";
import { useEffect, useState } from "react";

export const useFetchGifs = ( category:string ) => {

  const [ loading, setLodaing ] = useState( true )

  const [ images, setImages ] = useState<Images[]>( [] );

  const getImages = async () => {
    
      let imgs:Images[] = await getGifs( category );
  
      setImages( imgs );
      setLodaing( false );
  }

  useEffect( () => {
    getImages();
    }, [  ] )

    return {
      images,
      isLoading: loading
    }

}
