import React from 'react';
import {useModal} from "../../Hooks/useModal";
import {Photo} from "../../Types/photo";
import {Box, ButtonBase, Card, CardContent, CardMedia, Modal, Typography} from "@mui/material";

type PhotoItemProps = Omit<Photo, "id">;

const PhotoItem = ({title, albumId, url, thumbnailUrl}: PhotoItemProps) => {
    const {open, handleOpen, handleClose} = useModal();

    return (
        <Card sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <ButtonBase onClick={handleOpen} sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <CardMedia
                    component='img'
                    image={thumbnailUrl}
                    sx={{
                        width: 150,
                    }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant='body1' component='h2'>
                        {title}
                    </Typography>
                    <Typography variant='body2' component='h2'>
                        Album: {albumId}
                    </Typography>
                </CardContent>
            </ButtonBase>
            <Modal open={open} onClose={handleClose}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    maxWidth: 600,
                }}>
                    <img src={url} alt='color'/>
                </Box>
            </Modal>
        </Card>
    );
};

export default PhotoItem;