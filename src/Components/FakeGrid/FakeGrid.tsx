import React from 'react';
import {Grid} from "@mui/material";
import FakeItem from "./FakeItem";

type FakeGridProps = {
    size: number,
}

const FakeGrid = ({size}: FakeGridProps) => {
    return (
        <Grid container spacing={4} sx={{mt: 1, mb: 5}}>
            {(function (size: number){
                const arr: JSX.Element[] = [];
                for (let i = 0; i < size; i++) {
                    arr.push(
                        <Grid item key={i} xs={12} sm={6} md={2.3}>
                            <FakeItem/>
                        </Grid>);
                }
                return arr;
            })(size)}
        </Grid>
    );
};

export default FakeGrid;