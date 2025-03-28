/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton, Stack, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CustomProgressBar from "../ProgressBar/default";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "85%", sm: 400 },
  maxWidth: 500,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  backgroundColor: "primary.main",
};

const SuccessButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: "10px 40px",
  marginTop: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  textTransform: "none",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

// Posición del botón de cerrar del modal
const closeButtonStyle = {
  position: "absolute",
  right: 8,
  top: 8,
  fill: 'white'
};

export default function BasicModal({ modalContent }) {
  //console.log(modalContent);
  const { titulo, descripcion, showButtom, buttomText, openButtonText } = modalContent;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

   const getGoalView = () => {
    return (
      <CustomProgressBar value={122500} maxValue={350000} />
    );
   }
  

  return (
    <div>
      <Button onClick={handleOpen} sx={{height: '32px', width: '120px'}}>
        <EmojiEventsIcon fontSize="small" />
        {openButtonText} 
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
       >
        <Box sx={style}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={closeButtonStyle}
  
          >
            <CloseIcon />
          </IconButton>
          <Stack spacing={2} sx={{ textAlign: "center", alignItems: "center",  backgroundColor: "primary.main", gap: 3 }}>
            <Typography
              id="modal-modal-title"
              variant="h4"
            >
              {titulo}
            </Typography>
            <Typography
              id="modal-modal-description"
               variant="body"
              color="text"
              sx={{ mt: 2 }}
            >
              {descripcion}
            </Typography>
             {getGoalView()}
             <Typography
              
              variant="h5"
            >
              ¿Cómo lo vas a lograr?
            </Typography>
            {showButtom && (
              <Button variant="standard" onClick={() => setOpen(!open)} sx={{ width: '220px'}}>
                {buttomText}
              </Button>
            )}
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
