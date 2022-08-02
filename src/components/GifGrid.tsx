
import { ParamsCategories } from '../helpers/I-GifExpertApp';
import { useFetchGifs } from "../hook/useFetchGifs";
import { GifGridItem } from "./ComponentsApp";


export const GifGrid = ( { category }:ParamsCategories ) => {

  const { images, isLoading } = useFetchGifs( category );
    
  return (
    <>

        <h1>{ category }</h1>

        {
          isLoading && ( <h2>Loading...</h2> )
        }

      <div className="card-grid">
    
          {
            images.map((image) => 
            (
              <GifGridItem key={ image.id } { ...image }/>
            ))
          }
      
      </div>

      </>
  )

}

