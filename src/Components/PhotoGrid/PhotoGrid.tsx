import React from 'react';
import {Grid} from "@mui/material";
import {Photo} from "../../Types/photo";
import PhotoItem from "./PhotoItem";

type PhotoGridProps = {
    photos: Array<Photo>
}

const PhotoGrid = ({photos}: PhotoGridProps) => {
    return (
        <Grid container spacing={4} sx={{mt: 1, mb: 5}}>
            {photos.map((photo: Photo) =>
                <Grid item key={photo.id} xs={12} sm={6} md={2.3}>
                    <PhotoItem title={photo.title} albumId={photo.albumId} url={photo.url}
                               thumbnailUrl={photo.thumbnailUrl}/>
                </Grid>
            )}
        </Grid>
    );
};

export default PhotoGrid;