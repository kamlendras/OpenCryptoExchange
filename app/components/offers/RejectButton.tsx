"use client"
import * as React from "react";
import NextLink from 'next/link'
import { Transition } from 'react-transition-group';
import Typography from "@mui/joy/Typography";
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog, { ModalDialogProps } from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Button from "@mui/joy/Button";
export default function C() {
    const [open, setOpen] = React.useState<boolean>(false);
    return(
        <>
        <Typography level="title-sm">
{/* <Button  sx={{mt:2}} size="lg">Accept contract</Button> */}

<Button onClick={() => setOpen(true)} sx={{m:2}}  size="lg"  variant="outlined" color="danger">Reject contract</Button>

</Typography>
<Transition in={open} timeout={400}>
        {(state: string) => (

<Modal 
// open={open} onClose={() => setOpen(false)}
keepMounted
            open={!['exited', 'exiting'].includes(state)}
            onClose={() => setOpen(false)}
            slotProps={{
              backdrop: {
                sx: {
                  opacity: 0,
                  backdropFilter: 'none',
                  transition: `opacity 400ms, backdrop-filter 400ms`,
                  ...{
                    entering: { opacity: 1, backdropFilter: 'blur(8px)' },
                    entered: { opacity: 1, backdropFilter: 'blur(8px)' },
                  }[state],
                },
              },
            }}
            sx={{
              visibility: state === 'exited' ? 'hidden' : 'visible',
            }}





>
        <ModalDialog size="lg" variant="soft" sx={{
                opacity: 0,
                transition: `opacity 300ms`,
                ...{
                  entering: { opacity: 1 },
                  entered: { opacity: 1 },
                }[state],
              }}>
          <ModalClose />
          {/* <DialogTitle> */}
            <Typography level="title-lg"> 
          Are you sure you want to cancel this contract?
          </Typography>
          {/* </DialogTitle> */}
          <DialogContent sx={{mt:1,}}><Typography level="body-md"> Please be respectful of your counterparty and avoid canceling the contract without an apparent reason. We carefully monitor canceled contracts. Excessive cancellations can result in the suspension of your account.</Typography></DialogContent>
          <DialogContent sx={{mt:1,}}><Typography level="body-md"> Amount to be sent 40,000.01 USD</Typography></DialogContent>
          <DialogContent sx={{mt:1,}}>
          <Typography level="title-sm">
          <NextLink href="/">
<Button  sx={{mt:2}} size="lg" color="danger">Cancel contract</Button>
</NextLink>
<Button onClick={() => setOpen(false)} sx={{m:2}}  size="lg"  variant="outlined"  color="neutral">Back to contract</Button>
</Typography>
          </DialogContent>
        </ModalDialog>
      </Modal>
        )}
        </Transition>
        </>
    );
}