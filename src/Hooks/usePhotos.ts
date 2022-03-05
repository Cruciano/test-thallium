import {useEffect, useState} from "react";
import {getPhotos} from "../Api/PhotoApi";
import {calculatePagesCount} from "../utils/calculatePagesCount";

const ITEMS_PER_PAGE: number = 25;

type url = string;

type photo = {
    albumId: number,
    id: number,
    title: string,
    url: url,
    thumbnailUrl: url,
}

export const usePhotos = () => {
    const [photos, setPhotos] = useState<Array<photo>>([]);
    const [pageCount, setPageCount] = useState<number>(50);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        getPhotos(currentPage).then(response => {
            setPhotos(response?.data);
            const totalCount: number = Number(response?.headers['X-Total-Count']);
            setPageCount(calculatePagesCount(totalCount, ITEMS_PER_PAGE));
        });
    }, [currentPage])

    return [photos, pageCount, setCurrentPage];
}