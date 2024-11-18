import React from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  } from "@mui/material";

  //here e can make that Dialog as custom and we can use that at multiply time
  const ConfirmDeleteDialog = ({ open, handleClose, deleteHandler }) => {
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this group?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button
             onClick={handleClose}
             variant='text'
            >
              NO
            </Button>
            <Button onClick={deleteHandler} color='error'>
              YES
            </Button>
        </DialogActions>
        </Dialog>
)
  }

const CustomDialog= ()=>{
    return (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this group?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
              <Button
               onClick={handleClose}
               variant='text'
              >
                NO
              </Button>
              <Button onClick={deleteHandler} color='error'>
                YES
              </Button>
          </DialogActions>
          </Dialog>
  )
}



export default ConfirmDeleteDialog