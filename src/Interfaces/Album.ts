import {AlbumOption} from "../Types/AlbumOption";

export interface Album {
    readonly currentOption: AlbumOption;
    readonly options:  AlbumOption[];

    setCurrentOption(currentOption: AlbumOption): void;
}