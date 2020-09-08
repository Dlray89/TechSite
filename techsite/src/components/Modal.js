import React from 'react'
import { DialogContentText } from '@material-ui/core'



const Modal = () => {

    return(
        <div>
             <Link className='flip-in-ver-left' ><Button className={classes.button} variant='outlined' onClick={handleOpen} >Contact</Button></Link>



                                <Dialog open={open} onClose={handleClose} className={classes.modal}>
                                    <DialogTitle>Certification gained during my web development journey</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                    <button>HTML</button>
                                            </DialogContentText>
                                        </DialogContent>

                                   
                                </Dialog>
        </div>
    )
}