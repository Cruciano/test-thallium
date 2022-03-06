import {useEffect, useState} from "react";
import {getPhotos} from "../Api/PhotoApi";
import {calculatePageCount} from "../utils/calculatePageCount";
import {Photo} from "../Types/photo";

export const usePhotos = (itemsPerPage: number) => {
    const [photos, setPhotos] = useState<Array<Photo>>([]);
    const [pageCount, setPageCount] = useState<number>(50);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);

        getPhotos(currentPage, itemsPerPage)
            .then(response => {
                setPhotos(response?.data);
                const totalCount: number = Number(response?.headers['x-total-count']);
                setPageCount(calculatePageCount(totalCount, itemsPerPage));

                setIsLoading(false);
            });
    }, [currentPage])

    return {photos, pageCount, currentPage, setCurrentPage, isLoading};
}