import React from 'react';
import './App.css';
import {getPhotos, getPhotosByAlbum} from "./Api/PhotoApi";
import {usePhotos} from "./Hooks/usePhotos";
import PhotoItem from "./Components/PhotoItem";
import {Grid} from "@mui/material";
import Container from '@mui/material/Container';
import {Photo} from "./Types/photo";

function App() {
    const {photos, pageCount, setCurrentPage} = usePhotos();

    return (
        <div className="App">
          <Container sx={{py: 8}} maxWidth='lg'>
            <Grid container spacing={4}>
                {photos.map((photo: Photo) =>
                    <Grid item key={photo.id}  xs={12} sm={6} md={2.3}>
                        <PhotoItem title={photo.title} albumId={photo.albumId} url={photo.url}
                                   thumbnailUrl={photo.thumbnailUrl}/>
                    </Grid>
                )}
            </Grid>
          </Container>
        </div>
    );
}

export default App;
