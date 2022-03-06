import {Photo} from "../Types/Photo";

export interface Page {
    readonly count: number;
    readonly current: number;
    readonly photos: Photo[];

    setCurrent: (currentPage: number) => void;
}