import React from 'react'
import { Link } from 'react-router-dom'
import { DialogContentText, Dialog, DialogContent, DialogTitle, Button, Divider, DialogActions } from '@material-ui/core'



const Modal = (props) => {
    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }



    return (
        <div>
            <Button style={{width:'100%'}} onClick={handleOpen}>See More</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{props.name} <br /> {props.tech_stack}</DialogTitle>
                <Divider />
                <DialogContent>
                    <DialogContentText style={{border:'solid 2px red', backgroundImage:`url(${props.img})`, height:'30vh', backgroundRepeat:'no-repeat', backgroundSize:'cover'}} >
                        
                    </DialogContentText>
                    <DialogContentText>
                        <p>{props.details}</p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                        <a href={props.link} >Website</a>
                        <Link ><Button href={props.githublink} >Code Source</Button></Link>
                </DialogActions>


            </Dialog>
        </div>
    )
}

export default Modal