import {useEffect, useState} from "react";
import {deletePhotoById, getPhotos, getPhotosByAlbum} from "../Api/PhotoApi";
import {calculatePageCount} from "../utils/calculatePageCount";
import {Photo} from "../Types/Photo";
import {Page} from "../Interfaces/Page";
import {Album} from "../Interfaces/Album";
import {generateAlbumOptions} from "../utils/generateAlbumOptions";
import {AlbumOption} from "../Types/AlbumOption";

const albumOptions: AlbumOption[] = generateAlbumOptions();

export const usePhotos = (itemsPerPage: number) => {
    const [photos, setPhotos] = useState<Array<Photo>>([]);

    const [pageCount, setPageCount] = useState<number>(50);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [currentAlbumOpt, setCurrentAlbumOpt] = useState<AlbumOption>(albumOptions[0]);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const loadPhotos = () => {
        getPhotos(currentPage, itemsPerPage)
            .then(handleResponse);
    }

    const loadPhotosByAlbum = () => {
        getPhotosByAlbum(currentAlbumOpt.albumId ?? 1, currentPage, itemsPerPage)
            .then(handleResponse);
    }

    const handleResponse = (response: any) => {
        setPhotos(response?.data);
        const totalCount: number = Number(response?.headers['x-total-count']);
        setPageCount(calculatePageCount(totalCount, itemsPerPage));

        setIsLoading(false);
    }

    useEffect(() => {
        setIsLoading(true);
        if(currentAlbumOpt.albumId === null){
            loadPhotos();
        }
        else{
            loadPhotosByAlbum();
        }
    }, [currentPage, currentAlbumOpt, itemsPerPage])

    const deletePhoto = (id: number) => {
        deletePhotoById(id).then((isFulfilled) => {
            if(isFulfilled){
                setPhotos(photos.filter((item) => item.id !== id));
            }
        })
    }

    const page: Page = {
        count: pageCount,
        current: currentPage,
        photos: photos,
        setCurrent: setCurrentPage,
    }

    const album: Album = {
        currentOption: currentAlbumOpt,
        options: albumOptions,
        setCurrentOption: (currentOption: AlbumOption) => {
            setCurrentPage(1);
            setCurrentAlbumOpt(currentOption);
        },
    }

    return {page, album, deletePhoto, isLoading};
}