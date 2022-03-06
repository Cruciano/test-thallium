import {AlbumOption} from "../Types/AlbumOption";


export const generateAlbumOptions = (): AlbumOption[] => {
    const opt: AlbumOption[] = [{label: 'All', albumId: null}];

    for(let i = 1; i <= 100; i++){
        opt.push({
            label: i.toString(),
            albumId: i,
        });
    }

    return opt;
}