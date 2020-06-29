import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, Button, Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle, TextField, Divider } from "@material-ui/core"
import './projects.css'
import Sauti from '../images/sauti.PNG'
import RickandMorty from '../images/rick.PNG'
import Conway from '../images/conway.PNG'

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        boxSizing: 'border-box',
        background: '#3a6073',
        padding: '1%',
        [theme.breakpoints.down('sm')]:{
            height: '240vh'
        },
        [theme.breakpoints.down('sm')]:{
            height: '240vh'
        }
    },
    projectContainer: {
        border: 'solid 2px black',
        width: '90%',
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '0 auto',
            height: '211.3vh'
            
        }
    },

    P1: {
        color: 'white',
        width: '30%',
        height: '35vh',
        background: 'black',
        border: 'solid 1px black',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    },
    P2: {
        width: '30%'
    },
    btnContainer: {
        color: 'white',
        width: '80%',
        height: '35vh',
        background: 'linear-gradient(to right, #16222a, #3a6073)',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '0 auto',
            fontSizing:'1px'
            
            
        }
    },
    title: {
        color: 'white',
        border: 'solid 2px black',
        borderBottom: 'none',
        width: '90%',
        margin: '0 auto',
        background: 'linear-gradient(to bottom, #16222a, #3a6073)',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '0 auto'
            
        }
    },
    
    
    
    Divider: {
        background: 'black'
    },
    P1Text: {
        textAlign: 'center'
    },
    sauti: {
        textAlign: 'center'
    },
    sautiImg: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }

    },
    Links: {
        textDecoration: 'none'
    },
    buttons: {
        color: 'white'
    },
    text: {
    [theme.breakpoints.down('sm')]: {
        fontSizing: '12px',
            width: '90%',
                textAlign: 'center',
                    margin: '0 auto'
    }
},
    buttonsCont: {
        [theme.breakpoints.down('sm')]: {
        }
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
modal: {
    [theme.breakpoints.down('sm')]: {
        fontSizing: '12px',
        }
},

}))


const Projects = () => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className={classes.mainContainer}>
            <div className={classes.title}>
                <div>
                    <p>
                        Project
                   </p>
                </div>
                <div>
                    <Link to='/' className={classes.Links}><Button className={classes.buttons}>Home</Button></Link>
                    <Link className={classes.Links}><Button className={classes.buttons} onClick={handleOpen} >Contact</Button></Link>

                    <Dialog className={classes.modal} open={open} onClose={handleClose}>
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

            <div className={classes.projectContainer}>

                <div className='row '>
                    <div className={classes.P1}>
                        <p>Sauti</p>
                        <p className={classes.sauti}>
                            <img alt='sauit page'className={classes.sautiImg} src={Sauti} />
                        </p>
                    </div>
                    <Divider className={classes.Divider} orientation='vertical' />

                    <div className={classes.btnContainer}>

                        <p className={classes.text}>
                            Tech Stack: HTML - LESS <br />
                            <br />
                        Sauti is a Mobile-based trade and market
                        information
                        Empowering East Africa's women-led SMEs <br />
                        to trade legally and safely across borders.
                    </p>

                        <div className={classes.buttonsCont}>
                            <a  className={classes.Links} href='https://dlray89.github.io/SautiAfrica/'><Button className={classes.buttons} variant='outlined'>Website</Button></a>
                        <a className={classes.Links} href='https://github.com/Dlray89/SautiAfrica'><Button variant='outlined'className={classes.buttons}>Code Source</Button></a>
                        </div>
                        
                    </div>

                </div>
                <Divider className={classes.Divider} />

                <div className='row2 '>

                    <div className={classes.btnContainer}>

                        <p  className={classes.text}>
                            Tech Stack: React - Material-UI - Javascript <br /> <br />

                            This project is a fan site of the most popular show Rick and Morty. <br /> You can see all avaliable characters and videos.

                    </p>
                    <div className={classes.buttonsCont}>
                        <a href='https://rickand-morty-fanpage.now.sh/' className={classes.Links}> <Button variant='outlined'className={classes.buttons}>Website</Button></a>
                        <a href='https://github.com/Dlray89/RickandMortyFanpage' className={classes.Links}><Button variant='outlined'  className={classes.buttons}>Code Source</Button></a>
                        </div>
                        
                        
                    </div>


                    <div className={classes.P1}>
                        <p>Rick and Morty Fan Site</p>
                        <p>
                            <img alt='pic for rick and morty' className={classes.sautiImg} src={RickandMorty}   />
                        </p>
                    </div>

                </div>

                <Divider className={classes.Divider} />

                <div className='row '>

                    <div className={classes.P1}>
                        <p>Conway Game of life</p>
                        <p>
                            <img alt='conway pic' className={classes.sautiImg} src={Conway}  />
                        </p>
                    </div>

                    <div className={classes.btnContainer}>

                        <p  className={classes.text}>
                            Tech Stack: Javascript - React - Material-UI - CSS  <br  />
                              <br  /> 

                              The Game of Life (an example of a cellular automaton) is played on an infinite two-dimensional rectangular <br />grid of cells. 
                    </p>
                    <div className={classes.buttonsCont}>
                        <a href='https://the-conway-game-of-life.vercel.app/' className={classes.Links}><Button variant='outlined'className={classes.buttons}>Website</Button></a>
                        <a href='https://github.com/Dlray89/The-Conway_game-of_life' className={classes.Links}><Button variant='outlined' className={classes.buttons}>Code Source</Button></a>
                        </div>
                        
                        
                    </div>



                </div>


            </div>
        </div>
    )
}

export default Projects