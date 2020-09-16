import React from 'react'
import { Link } from 'react-router-dom'
import { DialogContentText, Dialog, DialogContent, DialogTitle, Button, Divider, DialogActions, makeStyles } from '@material-ui/core'
import './Modal.css'


const useStyles = makeStyles((theme) => ({
    button: {
        background:'black',
        color: 'white',
        width:'100%',
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
            <Button className={classes.button} variant='contained' onClick={handleOpen}>See More</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{props.name} <br /> {props.tech_stack}</DialogTitle>
                <Divider />
                <DialogContent>
                    <DialogContentText style={{backgroundImage:`url(${props.img})`, height:'30vh', backgroundRepeat:'no-repeat', backgroundSize:'cover'}} >
                        
                    </DialogContentText>
                    <DialogContentText>
                        <p>{props.details}</p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                        <a href={props.link} >Website</a>
                        <Link ><Button href={props.githublink} >Code Source</Button></Link>
                </DialogActions>
                    <Button className={classes.button} onClick={handleClose} >Close</Button>
            </Dialog>
        </div>
    )
}

export default Modal