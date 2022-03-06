import React from 'react';
import './App.css';
import {usePhotos} from "./Hooks/usePhotos";
import {Pagination} from "@mui/material";
import Container from '@mui/material/Container';
import PhotoGrid from "./Components/PhotoGrid/PhotoGrid";
import FakeGrid from "./Components/FakeGrid/FakeGrid";

const ITEMS_PER_PAGE: number = 25;

function App() {
    const {photos, currentPage, pageCount, setCurrentPage, isLoading} = usePhotos(ITEMS_PER_PAGE);

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    }

    const customizedPagination: JSX.Element = <Pagination
        page={currentPage}
        count={pageCount}
        onChange={handlePageChange}
        color="primary"
        sx={{
            display: 'flex',
            justifyContent: 'center',
        }}/>

    return (
        <div className="App">
            <Container sx={{py: 8}} maxWidth='lg'>
                {customizedPagination}
                {isLoading
                    ? <FakeGrid size={ITEMS_PER_PAGE}/>
                    : <PhotoGrid photos={photos}/>}
                {isLoading}
                {customizedPagination}
            </Container>
        </div>
    );
}

export default App;
