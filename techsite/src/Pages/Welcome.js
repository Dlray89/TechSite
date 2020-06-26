import React from 'react'
import { makeStyles, Button, Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle, Divider, TextField } from "@material-ui/core"
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    mainContiner: {
        border: 'solid 2px red',
        padding: '1%',
        height: '100vh',
        boxSizing: 'border-box',

    },
    introBox: {
        border: 'solid 2px green',
        width: '90%',
        height: ' 80vh',
        margin: ' 0 auto',
        boxSizing: 'border-box'
    },
    introText: {
        border: 'solid 2px purple',
        width: '15%',


    },
    intro: {
        border: 'solid 2px red',
        height: '40vh',
        boxSizing: 'border-box',
        display: 'flex'
    },
    skills: {
        border: 'solid 2px yellow',
        width: '50%'
    },
    about: {
        border: 'solid 2px red',
        width: '50%'
    },
    introTwo: {
        border: 'solid 2px blue',
        height: '40vh',
        boxSizing: 'border-box',
        display: 'flex'
    },
    experience: {
        border: 'solid 2px blue',
        width: '100%'
    },

    Nav: {
        border: 'solid 2px blue',
        width: '90%',
        margin: '0 auto',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between'

    },
    bottomNav: {
        border: 'solid 2px blue',
        width: '90%',
        margin: ' 0 auto',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between'
    },
    navContainer: {
        border: 'solid 2px red',
        width: '30%',
        boxSizing: 'border-box',
        display: 'flex'


    },
    navLinks: {
        border: 'solid 2px yellow',
        width: '40%',
        boxSizing: 'border-box',

    },
    socialmedia: {
        border: 'solid  2px red'
    },
    modalText: {
        display: 'flex',
        justifyContent:'space-evenly'
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '40%'
    },
    inputContainer: {
        textAlign: 'center',
        width: '45%'
    }

}))



const Welcome = () => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(true)

    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className={classes.mainContiner}>
            <div className={classes.Nav}>

                <div className={classes.introText}>
                    <Link><Button>David L. Ray Jr</Button></Link>
                </div>

                <div className={classes.navContainer}>
                    <Link className={classes.navLinks}><Button>Home </Button></Link>
                    <Link to='/projects' className={classes.navLinks}><Button>Projects</Button></Link>
                    <Link className={classes.navLinks} onClick={handleOpen}><Button>Contact</Button></Link>

                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>
                            Lets Chat!
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText className={classes.modalText}>
                                <div className={classes.info}>
                                    <p>Phone: 614.681.0179</p>
                                    <p>Email: dlrayjr89@gmail.com</p>
                                    <p>Location: Atlanta, GA</p>
                                    
                                    
                                </div>
                                <Divider   />
                                <div className={classes.inputContainer}>
                                    <TextField variant="outlined" type='text' label='Full Name'   />
                                    <TextField variant="outlined" type='text' label='Phone Number'   />
                                    <TextField variant="outlined" type='text' label='Email Address'   />
                                </div>

                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Send</Button>
                            <Button onClick={handleClose}>Cancel</Button>
                        </DialogActions>
                    </Dialog>
                </div>




            </div>

            <div className={classes.introBox}>
                <div className={classes.intro}>
                    <div className={classes.about}>
                        About me
                    </div>

                    <div className={classes.skills}>
                        Skills
                    </div>

                </div>
                <div className={classes.introTwo}>
                    <div className={classes.experience}>Experience</div>
                </div>


            </div>

            <div className={classes.bottomNav}>

                <div className={classes.copyright}>
                    <Link><Button>Copyright</Button></Link>
                </div>

                <div className={classes.socialmedia}>
                    <Link><Button>LinkedIn</Button>
                    </Link>
                    <Link><Button>GitHub</Button></Link>
                </div>

            </div>
        </div>
    )
}

export default Welcome