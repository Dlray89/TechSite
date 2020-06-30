import React from 'react'
import { makeStyles, Button, Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle, Divider, TextField, List, ListItem, ListItemText, Typography } from "@material-ui/core"
import { Link } from 'react-router-dom'
import './Welcome.css'

const useStyles = makeStyles((theme) => ({
    mainContiner: {
        padding: '1%',
        height: '100vh',
        boxSizing: 'border-box',
        background: '#3a6073',
        [theme.breakpoints.down('sm')]: {
            height: '190vh',
            boxSizing: 'border-box'
        },
        [theme.breakpoints.up('sm')]: {
            height: '38%',
        },
        [theme.breakpoints.down('md')]: {
            height: '167vh',
            boxSizing: 'border-box',
        }


    },
    introBox: {
        border: 'solid 2px black',
        width: '90%',
        height: ' 80.8vh',
        margin: ' 0 auto',
        boxSizing: 'border-box',
        [theme.breakpoints.down('sm')]: {
            height: '84%'
        },
        [theme.breakpoints.up('sm')]: {
            height: '80%',
        },
    },
    introText: {
        width: '20%',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    introTextLink: {
        textDecoration: 'none'
    },
    intro: {
        height: '40vh',
        boxSizing: 'border-box',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
        }
    },
    skills: {
        width: '50%',
        display: 'flex'
    },
    about: {
        width: '100%',
        display: 'flex'
    },
    introTwo: {
        height: '40vh',
        boxSizing: 'border-box',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {

            width: '100%',

        }
    },
    experience: {
        width: '100%',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            height: '121.5vh',
            width: '100%'
        }
    },

    Nav: {
        width: '90%',
        margin: '0 auto',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
        }

    },
    bottomNav: {
        width: '90%',
        margin: ' 0 auto',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            margin: '0 auto'
        }
    },
    navContainer: {
        width: '30%',
        boxSizing: 'border-box',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }


    },
    navLinks: {
        width: '40%',
        boxSizing: 'border-box',
        textDecoration: 'none'

    },
    socialmedia: {
    },
    modalText: {
        display: 'flex',
        justifyContent: 'space-evenly',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            flexDirection: 'column',
            margin: '0 auto'
        }
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '40%',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            margin: '0 auto'
        }
    },
    inputContainer: {
        textAlign: 'center',
        width: '45%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '2% auto'
        }
    },
    divider: {
        background: 'black'
    },
    buttons: {
        color: 'white'
    },
    bottomLinks: {
        textDecoration: 'none'
    },
    introP: {
        [theme.breakpoints.down('sm')]: {
            fontSizing: '0.5em',
            padding: '2%',
            textAlign: 'center',
            boxSizing: 'border-box'
        }
    },

    modalInner: {
        [theme.breakpoints.down('sm')]: {
            width: '81%',
            margin: '0 auto'
        }
    },
    input: {
        [theme.breakpoints.down('sm')]: {
            margin: '2% auto',
        }

    },
    text: {
        [theme.breakpoints.down('sm')]: {
            fontSizing: '12px',
            width: '90%',
            textAlign: 'center',
            margin: '0 auto'
        }
    },
    modal: {
        [theme.breakpoints.down('sm')]: {
            fontSizing: '12px',
        }
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
                    <Link className={classes.introTextLink}><Button className={classes.buttons}>Full Stack developer</Button></Link>
                </div>

                <div className={classes.navContainer}>
                    <Link className={classes.navLinks}><Button className={classes.buttons}>Home </Button></Link>
                    <Link to='/projects' className={classes.navLinks}><Button className={classes.buttons}>Projects</Button></Link>
                    <Link className={classes.navLinks} onClick={handleOpen}><Button className={classes.buttons}>Contact</Button></Link>

                    <Dialog open={open} onClose={handleClose} className={classes.modal}>
                        <DialogTitle>
                            Lets Chat!
                        </DialogTitle>
                        <DialogContent className={classes.modalInner}>
                            <DialogContentText className={classes.modalText}>
                                <div className={classes.info}>
                                    <p className={classes.text}>Phone: 614.681.0179</p>
                                    <p className={classes.text}>Email: dlrayjr89@gmail.com</p>
                                    <p className={classes.text}>Location: Atlanta, GA</p>


                                </div>
                                <Divider />
                                <div className={classes.inputContainer}>
                                    <TextField variant="outlined" type='text' label='Full Name' />
                                    <TextField className={classes.input} variant="outlined" type='text' label='Phone Number' />
                                    <TextField variant="outlined" type='text' label='Email Address' />
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
                        <div className='tilt-in-fwd-tr'>
                            <p className='slide-in-tr'>HI IM DAVE</p>
                        </div>


                    </div>





                </div>

                <Divider className={classes.divider} />

                <div className={classes.introTwo}>
                    <div className={classes.experience}>

                        <div className="FE">
                            <List className='FEskills'>
                                <Typography>Front End Skills</Typography>
                                <Divider />
                                <ListItem button>
                                    <ListItemText>Javascript - React - Python</ListItemText>
                                </ListItem>
                                <Divider />

                                <ListItem button>
                                    <ListItemText> HTML - CSS - LESS</ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText> Redux - Context-API</ListItemText>
                                </ListItem>
                                <Divider />

                                <ListItem button>
                                    <ListItemText> GraphQL - Apollo-Client - Prisma</ListItemText>
                                </ListItem>
                                <Divider />

                            </List>
                        </div>

                        <div className='about'>
                            <p className='text-flicker-in-glow'>About me</p>
                            <p className={classes.introP}>
                                My name is David L. Ray Jr and I am a software developer. I develop beautiful and dynamic applications for users so they can enhance their day to day life. I am BOLD with a curiosity like no other when it comes to life and looking for solutions to help the world or person reach their potential in life. I let my creativity take over and that's what leads my vision for success along with having a lot of zest to getting the job done.
                            </p>
                        </div>

                        <div className='BE'>
                            <List className='BEskills'>
                                <Typography>Back End Skills</Typography>
                                <Divider />
                                <ListItem button>
                                    <ListItemText>Node.js - Express.js - Bcrypt - Hashing</ListItemText>
                                </ListItem>
                                <Divider />

                                <ListItem button>
                                    <ListItemText> Sqlite - Postgres</ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText> GraphQL</ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText> Prisma - Apollo</ListItemText>
                                </ListItem>
                                <Divider />


                            </List>

                        </div>
                    </div>
                </div>


            </div>

            <div className={classes.bottomNav}>

                <div className={classes.copyright}>
                    <Link className={classes.bottomLinks}><Button className={classes.buttons}>&copy; Dapthedev</Button></Link>
                </div>

                <div className={classes.socialmedia}>
                    <Link className={classes.bottomLinks}><Button className={classes.buttons}>LinkedIn</Button>
                    </Link>
                    <Link className={classes.bottomLinks}><Button className={classes.buttons}>GitHub</Button></Link>
                </div>

            </div>
        </div>
    )
}

export default Welcome