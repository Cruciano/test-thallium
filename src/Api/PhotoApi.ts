import axios, {Axios, AxiosResponse} from "axios";
import {Photo} from "../Types/Photo";

const BASE_URL: string = 'http://jsonplaceholder.typicode.com/photos';

export const getPhotos = async (page: number = 1, limit: number = 25)
    : Promise<AxiosResponse<Photo[]> | undefined> => {
    const response = await axios.get<Photo[]>(BASE_URL, {
        params: {
            _limit: limit,
            _page: page,
        }
    });

    if (!response.data || response.data.length === 0) {
        return;
    }

    return response;
}

export const getPhotosByAlbum = async (albumId: number, page: number = 1, limit: number = 25)
    : Promise<AxiosResponse<Photo[]> | undefined> => {
    const response = await axios.get<Photo[]>(BASE_URL, {
        params: {
            _limit: limit,
            _page: page,
            albumId: albumId,
        }
    });

    if (!response.data || response.data.length === 0) {
        return;
    }

    return response;
}

export const deletePhotoById = async (id: number): Promise<boolean> => {
    const response = await axios.delete(`${BASE_URL}/${id}`);

    return response.status == 200;
}
