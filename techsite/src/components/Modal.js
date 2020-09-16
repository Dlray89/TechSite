import React from 'react'
import { Link } from 'react-router-dom'
import { DialogContentText, Dialog, DialogContent, DialogTitle, Button, Divider, DialogActions, makeStyles } from '@material-ui/core'
import './Modal.css'


const useStyles = makeStyles((theme) => ({
    button: {
        background:'black',
        color: 'white',
        width:'100%',
        fontFamily: 'Cinzel serif',

        '&:hover': {
            background: 'darkgrey',
            color: 'black'
        }
    }
}))


const Modal = (props) => {
    const [open, setOpen] = React.useState(false)
    const classes = useStyles()

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }



    return (
        <div>
            <Button className={classes.button} variant='contained' onClick={handleOpen}> View More</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle style={{fontFamily:'Cinzel serif'
}} >{props.name} <br /> {props.tech_stack}</DialogTitle>
                <Divider />
                <DialogContent>
                    <DialogContentText style={{backgroundImage:`url(${props.img})`, height:'30vh', backgroundRepeat:'no-repeat', backgroundSize:'cover'}} >
                        
                    </DialogContentText>
                    <DialogContentText>
                        <p style={{fontFamily:'Cinzel serif'
}} >{props.details}</p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                        <a href={props.link}><Button style={{fontFamily:'Cinzel serif'
}}  >Website</Button></a>
                        <a  href={props.github}><Button style={{fontFamily:'Cinzel serif'
}}  >Code Source</Button></a>
                </DialogActions>
                    <Button className={classes.button} onClick={handleClose} style={{fontFamily:'Cinzel serif'
}}  >Close</Button>
            </Dialog>
        </div>
    )
}

export default Modal