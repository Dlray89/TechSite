import React from 'react'
import { Link } from 'react-router-dom'
import { DialogContentText, Dialog, DialogContent, DialogTitle, Button, Divider, DialogActions, makeStyles } from '@material-ui/core'
import './Modal.css'
//linear-gradient(to right, #2980b9, #2c3e50)

const useStyles = makeStyles((theme) => ({
    button: {
        background:'#2980b9',
        color: 'white',
        width:'100%',
        fontFamily: 'Cormorant, serif',
        margin:'0 auto',

        '&:hover': {
            background: '#2c3e50',
            color: 'white'
        }
    },
    link:{
        textDecoration:'none',
        width:'60%',
    },
    modalButton:{
        width:'100%',
        fontFamily:'Cormorant, serif',
        '&:hover':{
            color:'white',
            background:'linear-gradient(to right, #2980b9, #2c3e50)'
        }
        
    },
    btn_conatianer:{
        borderTop:'solid 2px green',
        display:'flex',
        justifyContent:'space-evenly',
        alignContent:'center',
        margin:'0% auto',
        width:'100%'
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
//


    return (
        <div>
            <Button className={classes.button} variant='contained' onClick={handleOpen}> View More</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle style={{fontFamily:'Cormorant, serif', textAlign:'center', background:'linear-gradient(to right, #2980b9, #2c3e50)', color:'white'
}} > <p style={{fontFamily:'Cormorant, serif'
}} >{props.name}<br /> {props.tech_stack}</p></DialogTitle>
                <Divider />
                <DialogContent>
                    <DialogContentText style={{backgroundImage:`url(${props.img})`, height:'30vh', backgroundRepeat:'no-repeat', backgroundSize:'filled',backgroundPosition: 'start',
        backgroundPositionY: '50%',
        backgroundPositionX: '50%', backgroundSize:'100%'}} >
                
                    </DialogContentText>
                    <Divider />
                    <DialogContentText style={{background:'linear-gradient(to right, #2980b9, #2c3e50)', color:'white', padding:'1%', textAlign:'center'}}>
                        <p style={{fontFamily:'Cormorant, serif'
}} >{props.details}</p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions className={classes.btn_conatianer}>
                        <a className={classes.link} href={props.link}><Button variant='contained' className={classes.modalButton}  >Website</Button></a>
                        <a className={classes.link}  href={props.github}><Button variant='contained' className={classes.modalButton} >Code Source</Button></a>
                </DialogActions>
                    <Button className={classes.button} onClick={handleClose} style={{fontFamily:'Cormorant, serif'
}}  >Close</Button>
            </Dialog>
        </div>
    )
}

export default Modal