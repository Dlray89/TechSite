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
        padding: '1%'
    },
    projectContainer: {
        border: 'solid 2px black',
        width: '90%',
        margin: '0 auto'
    },

    P1: {
        color: 'white',
        width: '30%',
        height: '35vh',
        background: 'black',
        border: 'solid 1px black',
        textAlign: 'center'
    },
    P2: {
        width: '30%'
    },
    btnContainer: {
        color: 'white',
        width: '80%',
        height: '35vh',
        background: 'linear-gradient(to right, #16222a, #3a6073)'
    },
    title: {
        color: 'white',
        border: 'solid 2px black',
        borderBottom: 'none',
        width: '90%',
        margin: '0 auto',
        background: 'linear-gradient(to bottom, #16222a, #3a6073)'
    },
    modalText: {
        display: 'flex',
        justifyContent: 'space-evenly'

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

    },
    Links: {
        textDecoration: 'none'
    },
    buttons: {
        color: 'white'
    }
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
                                <Divider />
                                <div className={classes.inputContainer}>
                                    <TextField variant="outlined" type='text' label='Full Name' />
                                    <TextField variant="outlined" type='text' label='Phone Number' />
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
                            <img className={classes.sautiImg} src={Sauti} />
                        </p>
                    </div>
                    <Divider className={classes.Divider} orientation='vertical' />

                    <div className={classes.btnContainer}>

                        <p>
                            Tech Stack: HTML - LESS <br />
                            <br />
                        Sauti is a Mobile-based trade and market
                        information
                        Empowering East Africa's women-led SMEs <br />
                        to trade legally and safely across borders.
                    </p>

                        <div>
                            <a  className={classes.Links} href='https://dlray89.github.io/SautiAfrica/'><Button className={classes.buttons}>Website</Button></a>
                        <a className={classes.Links} href='https://github.com/Dlray89/SautiAfrica'><Button className={classes.buttons}>Code Source</Button></a>
                        </div>
                        
                    </div>

                </div>
                <Divider className={classes.Divider} />

                <div className='row '>

                    <div className={classes.btnContainer}>

                        <p>
                            Tech Stack: React - Material-UI - Javascript <br /> <br />

                            This project is a fan site of the most popular show Rick and Morty. <br /> You can see all avaliable characters and videos.

                    </p>
                        <Button>Website</Button>
                        <Button>Code Source</Button>
                    </div>


                    <div className={classes.P1}>
                        <p>Rick and Morty Fan Site</p>
                        <p>
                            <img className={classes.sautiImg} src={RickandMorty}   />
                        </p>
                    </div>

                </div>

                <Divider className={classes.Divider} />

                <div className='row '>

                    <div className={classes.P1}>
                        <p>Conway Game of life</p>
                        <p>
                            <img className={classes.sautiImg} src={Conway}  />
                        </p>
                    </div>

                    <div className={classes.btnContainer}>

                        <p>
                            Tech Stack: Javascript - React - Material-UI - CSS  <br  />
                              <br  /> 

                              The Game of Life (an example of a cellular automaton) is played on an infinite two-dimensional rectangular <br />grid of cells. Each cell can be either alive or dead.  The status of each  cell changes each turn of the game  <br />depending on the statuses of that cell's 8 neighbors. Neighbors of a cell are  cells that touch <br /> that cell, either horizontal, vertical, or diagonal from that cell. 
                    </p>
                        <Button>Website</Button>
                        <Button>Code Source</Button>
                    </div>



                </div>


            </div>
        </div>
    )
}

export default Projects