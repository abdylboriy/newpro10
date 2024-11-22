import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import camphoto from "../assest/camper/Rectangle 14 (1).svg"
import camphoto1 from "../assest/camper/Rectangle 14.svg"
import camphoto2 from "../assest/camper/Rectangle 15.svg"
import camphoto3 from "../assest/camper/Rectangle 16.svg"
import camphoto4 from "../assest/camper/Rectangle 17.svg"
import camphoto6 from "../assest/camper/Rectangle 15 (1).svg"
import camphoto7 from "../assest/camper/Rectangle 16.svg"
import camphoto8 from "../assest/camper/Rectangle 17 (1).svg"
import {ResponsiveIframe} from "../doctorStyled"
import { borderRadius } from '@mui/system';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '950px',
  height: '580px',
  borderRadius: '20px',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
};

export function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <img src={camphoto} 
        alt="camping" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <ResponsiveIframe  src="https://www.youtube.com/embed/vK5xKa-M-H4?si=gvHis9-wKsiqvPX1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></ResponsiveIframe>
        </Box>
      </Modal>
    </div>
  );
}
export function BasicModal2() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <img src={camphoto1} 
        alt="camping" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <ResponsiveIframe src="https://www.youtube.com/embed/rHpjprrg1PY?si=1RH4_9tdJTQStjMX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></ResponsiveIframe>
        </Box>
      </Modal>
    </div>
  );
}
export function BasicModal3() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <img src={camphoto2} 
        alt="camping" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <ResponsiveIframe src="https://www.youtube.com/embed/vK5xKa-M-H4?si=LdlDYH-oRhGFBF7Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></ResponsiveIframe>
        </Box>
      </Modal>
    </div>
  );
}
export function BasicModal4() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <img src={camphoto3}  
        alt="camping" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <ResponsiveIframe src="https://www.youtube.com/embed/a3q4L2piCbQ?si=b_dEsq-wq8SvJ1ko" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></ResponsiveIframe>
        </Box>
      </Modal>
    </div>
  );
}
export function BasicModal5() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <img src={camphoto4} 
        alt="camping" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <ResponsiveIframe src="https://www.youtube.com/embed/qGfYoWt74ps?si=bNclSrRCKWDC0IWR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></ResponsiveIframe>
        </Box>
      </Modal>
    </div>
  );
}
export function BasicModal6() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <img src={camphoto6} 
        alt="camping" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <ResponsiveIframe src="https://www.youtube.com/embed/EXtGEcBPZ10?si=6wQ-GrpzonfT_dL_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></ResponsiveIframe>
        </Box>
      </Modal>
    </div>
  );
}
export function BasicModal7() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <img src={camphoto7} 
        alt="camping" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <ResponsiveIframe src="https://www.youtube.com/embed/h_RQVCraDzw?si=VvYUd9jk7Wqh2hVs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></ResponsiveIframe>
        </Box>
      </Modal>
    </div>
  );
}
export function BasicModal8() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <img src={camphoto8} 
        alt="camping" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <ResponsiveIframe src="https://www.youtube.com/embed/vK5xKa-M-H4?si=gvHis9-wKsiqvPX1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></ResponsiveIframe>
        </Box>
      </Modal>
    </div>
  );
}

