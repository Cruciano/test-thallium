import {useEffect, useState} from "react";
import {getPhotos} from "../Api/PhotoApi";
import {calculatePagesCount} from "../utils/calculatePagesCount";
import {Photo} from "../Types/photo";

const ITEMS_PER_PAGE: number = 25;

export const usePhotos = () => {
    const [photos, setPhotos] = useState<Array<Photo>>([]);
    const [pageCount, setPageCount] = useState<number>(50);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        getPhotos(currentPage).then(response => {
            setPhotos(response?.data);
            const totalCount: number = Number(response?.headers['X-Total-Count']);
            setPageCount(calculatePagesCount(totalCount, ITEMS_PER_PAGE));
        });
    }, [currentPage])

    return {photos, pageCount, setCurrentPage};
}