import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton, Stack, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
};

export default function BasicModal({ modalContent }) {
  //console.log(modalContent);
  const { titulo, descripcion, showButtom, buttomText } = modalContent;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
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
          <Stack spacing={2} sx={{ textAlign: "center", alignItems: "center" }}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              color="success"
            >
              {titulo}
            </Typography>
            <Typography
              id="modal-modal-description"
              color="error"
              sx={{ mt: 2 }}
            >
              {descripcion}
            </Typography>
            {showButtom && (
              <SuccessButton variant="text" onClick={() => setOpen(!open)}>
                {buttomText}
              </SuccessButton>
            )}
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
