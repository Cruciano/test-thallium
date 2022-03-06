import React, {FC} from 'react';
import {Grid} from "@mui/material";
import {Photo} from "../../Types/Photo";
import PhotoItem from "./PhotoItem";

type PhotoGridProps = {
    photos: Array<Photo>,
    deletePhoto: (id: number) => void,
}

const PhotoGrid: FC<PhotoGridProps> = ({photos, deletePhoto}) => {
    return (
        <Grid container spacing={4} sx={{mt: 1, mb: 5}}>
            {photos.map((photo: Photo) =>
                <Grid item key={photo.id} xs={12} sm={6} md={2.3}>
                    <PhotoItem photo={photo} deletePhoto={deletePhoto}/>
                </Grid>
            )}
        </Grid>
    );
};

export default PhotoGrid;