import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useNavigate } from 'react-router-dom';
import { HiOutlineLogout } from 'react-icons/hi';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
   const  navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
   
  };
  const handleLogout = () => {
    setOpen(false);
    localStorage.clear();
    navigate("/")
  };

  return (
    <React.Fragment>
      {/* <Button 
      variant='contained'
      onClick={handleClickOpen}>
        Logout
      </Button> */}
      <button className='flex justify-center items-center text-white  text-lg my-5 bg-red-400 px-5 py-2 hover:bg-red-500 rounded-lg'
       onClick={handleClickOpen}>
      <HiOutlineLogout  className='mx-2'/>
      Log Out 
      </button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"LOGOUT"}</DialogTitle>
        <DialogContent className='w-[500px]'>
          <DialogContentText id="alert-dialog-slide-description">
           Are you sure your want to Logout
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className='text-sec' onClick={handleClose}>cancel</Button>
          <Button onClick={handleLogout}>yes</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}