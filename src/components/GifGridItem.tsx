import { Images } from '../helpers/I-GifExpertApp';

export const GifGridItem = ({ id, title, url }:Images) => {
  return (

    <div className="card">
        <img src={ url } alt={ title } width="200" height="300"/>
        <p>{ title }</p>
    </div>

  )
}

