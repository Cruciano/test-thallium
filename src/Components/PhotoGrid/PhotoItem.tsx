import React, {FC} from 'react';
import {useModal} from "../../Hooks/useModal";
import {Photo} from "../../Types/Photo";
import {Box, ButtonBase, Card, CardContent, CardMedia, IconButton, Modal, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

type PhotoItemProps = {
    photo: Photo,
    deletePhoto: (id: number) => void,
};

const PhotoItem: FC<PhotoItemProps> = ({photo, deletePhoto}) => {
    const {open, handleOpen, handleClose} = useModal();

    return (
        <Card sx={{
            position: 'relative',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <IconButton sx={{
                position: 'absolute',
                right: 0,
                top: 0,
                zIndex: 1,
                height: 22,
                width: 22,
            }}
                        onClick={() => deletePhoto(photo.id)}
                        color='error'
            >
                <DeleteIcon/>
            </IconButton>
            <ButtonBase onClick={handleOpen} sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <CardMedia
                    component='img'
                    image={photo.thumbnailUrl}
                    sx={{
                        width: 150,
                    }}
                />
                <CardContent sx={{flexGrow: 1}}>
                    <Typography gutterBottom variant='body1' component='h2'>
                        {photo.title}
                    </Typography>
                    <Typography variant='body2' component='h2'>
                        Album: {photo.albumId}
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
                }}
                     onClick={handleClose}
                >
                    <img src={photo.url} alt='color'/>
                </Box>
            </Modal>
        </Card>
    );
};

export default PhotoItem;