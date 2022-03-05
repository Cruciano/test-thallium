import { Url } from "./url";

export type Photo = {
    albumId: number,
    id: number,
    title: string,
    url: Url,
    thumbnailUrl: Url,
}