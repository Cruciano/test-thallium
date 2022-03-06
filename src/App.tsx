import React, {FC} from 'react';
import {usePhotos} from "./Hooks/usePhotos";
import {Autocomplete, Pagination, TextField, Typography, Container} from "@mui/material";
import PhotoGrid from "./Components/PhotoGrid/PhotoGrid";
import FakeGrid from "./Components/FakeGrid/FakeGrid";
import {AlbumOption} from "./Types/AlbumOption";

const ITEMS_PER_PAGE: number = 25;

const App: FC = () => {
    const {page, album, deletePhoto, isLoading} = usePhotos(ITEMS_PER_PAGE);

    const handlePageChange = (event: any, value: number) => {
        page.setCurrent(value);
    }

    const handleAlbumChange = (event: any, value: AlbumOption | null) => {
        album.setCurrentOption(value ?? album.currentOption);
    }

    const customizedPagination: JSX.Element = <Pagination
        page={page.current}
        count={page.count}
        onChange={handlePageChange}
        color="primary"
    />

    return (
        <div className="App">
            <Container
                sx={{
                    py: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: 3,
                }}
                maxWidth='lg'
            >
                <Typography variant="h2" gutterBottom component="div">
                    Photo Gallery
                </Typography>
                <Autocomplete
                    value={album.currentOption}
                    options={album.options}
                    onChange={handleAlbumChange}
                    renderInput={(params) => <TextField {...params} label="Album"/>}
                    sx={{
                        mb: 3,
                        width: 300,
                    }}
                />

                {customizedPagination}
                {isLoading
                    ? <FakeGrid size={ITEMS_PER_PAGE}/>
                    : <PhotoGrid photos={page.photos} deletePhoto={deletePhoto}/>}
                {isLoading}
                {customizedPagination}
            </Container>
        </div>
    );
}

export default App;
