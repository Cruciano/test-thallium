import React, {FC} from 'react';
import {Card, Skeleton} from "@mui/material";

const FakeItem: FC = () => {
    return (
        <Card sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Skeleton variant="rectangular" width={150} height={150} />
            <Skeleton variant="text" width={150} />
            <Skeleton variant="text" width={150} />
        </Card>
    );
};

export default FakeItem;