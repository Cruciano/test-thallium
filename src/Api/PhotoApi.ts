import axios from "axios";

const BASE_URL:string = 'http://jsonplaceholder.typicode.com/photos';

export const getPhotos = async (page: number = 1, limit: number = 25) => {
    const response = await axios.get(BASE_URL, {
        params: {
            _limit: limit,
            _page: page,
        }
    });

    if(!response.data || response.data.length === 0){
        return;
    }

    return response;
}

export const getPhotosByAlbum = async (albumId:number, page: number = 1, limit: number = 25) => {
    const response = await axios.get(BASE_URL, {
        params: {
            _limit: limit,
            _page: page,
            albumId: albumId,
        }
    });

    if(!response.data || response.data.length === 0){
        return;
    }

    return response;
}

export const deletePhotoById = async (id: number) => {
    const response = await axios.delete(`${BASE_URL}/${id}`);

    return response.status == 200;
}
