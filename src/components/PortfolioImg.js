// made by Igor and Erwan

// the component for images for portfolio page - the modal is added and can be opened once user clicks on it

import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#e2e2e2', 
    border: 'none',
    boxShadow: 24,
    p: 2,
    fontFamily: 'forma-djr-deck',
    borderRadius: 2
  };

export default function PortfolioImg({ post }) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    let image = "https://react-api.igorlech.dk/wp-content/uploads/2022/09/igor.png";

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <div className="img-portf-cont">
            <img onClick={handleOpen} src={post.acf.image ? post.acf.image.url : image} alt={post.acf.image ? post.acf.image.alt : "Default Image"} className="portfolio-img" />
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
            <Fade in={open}>
                <Box sx={style} className="modalbox">
                    <img onClick={handleOpen} src={post.acf.image ? post.acf.image.url : image} alt={post.acf.image ? post.acf.image.alt : "Default Image"} className="portfolio-img portfolio-full-img" />
                </Box>
            </Fade>
            </Modal>
        </div>
    )
}