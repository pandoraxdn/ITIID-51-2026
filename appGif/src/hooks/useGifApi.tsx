import { useState, useEffect } from "react";
import type { Gif } from "../mock-gif/gif.mock";
import type { GIFTrendingResponse } from "../interfaces/gifResponse";
import { pandoraApi } from "../api/pandoraApi";
import type { FormData } from "./useFormReducer";

interface UseGifApi {
    isLoading:  boolean;
    listGif:    Gif[];
    loadGifs:   () => void;
    sendQuery:  (data: FormData) => void;
}

export const useGifApi = (): UseGifApi => {
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ listGif, setListGif ] = useState<Gif[]>([]);
    const apiUrl: string = "https://api.giphy.com/v1/gifs";

    const loadGifs = async () => {
        setIsLoading(true);
        const response = await pandoraApi.get<GIFTrendingResponse>(`${apiUrl}/trending`,{
            params:{
                api_key: "GobRdwqjnW0rNlTM5qYeGxQ7Rh8bcICy",
                limit:  10
            }
        });
        convertData( response.data );
        setIsLoading(false);
    }

    const convertData = ( response: GIFTrendingResponse ) => {
        const gifs: Gif[] = response.data.map( ({id, title, images}) => {
            return {
                id: id,
                title: title,
                url: images.original.url,
                height: Number(images.original.height),
                width: Number(images.original.width),
            }
        });
        setListGif( gifs );
    }

    const sendQuery = async ( data: FormData ) => {
        setIsLoading(true);
        const response = await pandoraApi.get<GIFTrendingResponse>(`${apiUrl}/search`,{
            params:{
                api_key:    "GobRdwqjnW0rNlTM5qYeGxQ7Rh8bcICy",
                q:          data.query,
                limit:      10
            }
        });
        convertData( response.data );
        setIsLoading(false);
    }

    useEffect( () => {
        loadGifs();
    },[]);

    return { isLoading, loadGifs, listGif, sendQuery };
};
