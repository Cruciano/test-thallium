import {useState} from "react";

export const useModal = () => {
    const [active, setActive] = useState<boolean>(false);

    const handleOpen = () => {
        setActive(true);
    }

    const handleClose = () => {
        setActive(false);
    }

    return [active, handleOpen, handleClose];
}