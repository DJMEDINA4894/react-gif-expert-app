import { Images } from "./I-GifExpertApp";

export const getGifs = async ( category:string ):Promise<Images[]> => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=k4rxdp9Lwp3vvWdU0G5MzJgJ1ueUBPSL&q=${category}&limit=10`; 

  const resp = await fetch( url );
  const { data } = await resp.json();

  console.log(data);
  const objData:Images[] = data.map(( m:any  ):Images => ({
    id: m.id,
    title: m.title,
    url: m.images?.downsized_medium.url
  } ));

  

  return objData;
};
