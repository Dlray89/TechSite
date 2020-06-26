import React from 'react'
import { makeStyles, Button, Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle, Divider, TextField, List, ListItem, ListItemText, Typography } from "@material-ui/core"
import { Link } from 'react-router-dom'
import './Welcome.css'

const useStyles = makeStyles((theme) => ({
    mainContiner: {
        padding: '1%',
        height: '100vh',
        boxSizing: 'border-box',

    },
    introBox: {
        border: 'solid 2px black',
        width: '90%',
        height: ' 80vh',
        margin: ' 0 auto',
        boxSizing: 'border-box'
    },
    introText: {
        width: '15%',
    },
    intro: {
        height: '40vh',
        boxSizing: 'border-box',
        display: 'flex'
    },
    skills: {
        width: '50%',
        display: 'flex'
    },
    about: {
        width: '50%',
        display: 'flex'
    },
    introTwo: {
        height: '40vh',
        boxSizing: 'border-box',
        display: 'flex'
    },
    experience: {
        width: '100%'
    },

    Nav: {
        width: '90%',
        margin: '0 auto',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between'

    },
    bottomNav: {
        width: '90%',
        margin: ' 0 auto',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between'
    },
    navContainer: {
        width: '30%',
        boxSizing: 'border-box',
        display: 'flex'


    },
    navLinks: {
        width: '40%',
        boxSizing: 'border-box',

    },
    socialmedia: {
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
    },
    divider: {
        background: 'black'
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
                        <div className='aboutpic'>
                            <p>Hi im dave</p>
                        </div>

                        
                    </div>
                    <Divider className={classes.divider} orientation='vertical'  />


                    <div className={classes.skills}>
                        <div className="FE">
                            <List className='FEskills'>
                                <Typography>Front End Skills</Typography>
                                <Divider />
                                <ListItem button>
                                    <ListItemText>Javascript/React</ListItemText>
                                </ListItem>
                                <Divider />
                               
                                <ListItem button>
                                    <ListItemText> HTML/CSS/LESS</ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText> Redux/Context-API</ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText> Python</ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText> GrpahQL/Apollo-Client</ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText> AJAX/HTTP REQUEST</ListItemText>
                                </ListItem>
                                <Divider />
                            </List>
                            </div>

                            <Divider className={classes.divider}  />
                        <div className='BE'>
                            <List className='BEskills'>
                                <Typography>Back End Skills</Typography>
                                <Divider />
                                <ListItem button>
                                    <ListItemText>Node.js/Express.js</ListItemText>
                                </ListItem>
                                <Divider />
                               
                                <ListItem button>
                                    <ListItemText> SQLITE/POSTGRES</ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText> GraphQL</ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText> Prisma</ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText> Apollo</ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText> Hashing/JWT</ListItemText>
                                </ListItem>
                                <Divider />
                            </List>
                        
                        </div>
                    </div>

                </div>

                <Divider className={classes.divider}   />
                
                <div className={classes.introTwo}>
                    <div className={classes.experience}>
                        <div>
                            About me
                        </div>

                        <div>
                            experience
                        </div>
                    </div>
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