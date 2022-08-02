
import { useState } from 'react';
import { AddCategory, GifGrid } from './components/ComponentsApp';

export const GifExpertApp = ( ):JSX.Element => {

  const [ categories, setCategories ] = useState<string[]>(['yugioh']);

  const onAddCategory = ( newCategory:string ) => {

    if( categories.includes(newCategory) ) return;

    setCategories( [ newCategory, ...categories ] )

  }

  return (
    <>
      
      {/* Titulo */}
      <h1>GifExpertApp</h1>
    
      {/* input */}
      <AddCategory onNewCategory = { onAddCategory }  />

      {/* List Gif */}
      {
        categories.map( ( category ) => (

          <GifGrid key={ category } category={ category }/>

         ) )
      }

        {/* Gif item */}

    </>
  )

};
