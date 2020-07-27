import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, Button, Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle, TextField, Divider, Typography } from "@material-ui/core"
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub';
import './projects.css'
import Sauti from '../images/sauti.PNG'
import Prohash from '../images/prohash.PNG'
import Conway from '../images/conway.PNG'

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        boxSizing: 'border-box',
        background: '#3a6073',
        padding: '1%',
        
        
    },
    projectContainer: {
        border: 'solid 2px black',
        width: '90%',
        margin: '0 auto',
        
    },

    P1: {
        color: 'white',
        width: '30%',
        height: '35vh',
        background: 'black',
        border: 'solid 1px black',
        textAlign: 'center',
       
    },
    Sauti: {
        color: 'white',
        width: '30%',
        
        backgroundImage: 'url('+ Sauti +')',
        border: 'solid 1px black',
        textAlign: 'center',
        backgroundPosition:'center',
        backgroundPositionY:'100%',
        backgroundRepeat:'no-repeat',
        backgroundSize:'100%'
    },
    SautiTitle: {
        background:'#16222a',
        padding:'3.5%'
    },
    SautiContent: {
        padding:'2%',
       
        textAlign:'center'
    },
    SautiButtonContainer:{
        
        display:"flex",
        justifyContent:'space-evenly'
    },
    SautiButtons:{
        border:'solid 1px white',
        color:'white'
    },
    Prohash:{
        color: 'white',
        width: '30%',
        backgroundImage: 'url('+ Prohash +')',
        border: 'solid 1px black',
        textAlign: 'center',
        backgroundPosition:'center',
        backgroundPositionY:'95%',
        backgroundRepeat:'no-repeat',
        backgroundSize:'100%'
    },
    ProhashTitle:{
        background:'#16222a',        
        padding:'3%'
    },
    ProhashContent:{
        padding:'2%',
        textAlign:'center'
    },
    ProhashButtonContainer: {
       
        display:"flex",
        justifyContent:'space-evenly'
    },
    ProhashButtons:{
        border:'solid 1px white',
        color:'white'
    },
    Conway:{
        color: 'white',
        width: '30%',
        backgroundImage: 'url('+ Conway +')',
        border: 'solid 1px black',
        textAlign: 'center',
        backgroundPosition:'center',
        backgroundPositionY:'100%',
        backgroundRepeat:'no-repeat',
        backgroundSize:'100%'
    },
    ConwayTitle:{
        background:'#16222a',
        padding:'3.5%'
    },
    ConwayContent: {
        padding:'2%',       
        textAlign:'center'
    },
    ConwayButtonContainer: {      
        display:"flex",
        justifyContent:'space-evenly'
    },
    ConwayButtons:{
        border:'solid 1px white',
        color:'white'
    },
    P2: {
        width: '30%'
    },
    btnContainer: {
        color: 'white',
        width: '80%',
        height: '35vh',
        background: 'linear-gradient(to right, #16222a, #3a6073)',
       
    },
    title: {
        color: 'white',
        border: 'solid 2px black',
        borderBottom: 'none',
        width: '90%',
        margin: '0 auto',
        background: 'linear-gradient(to bottom, #16222a, #3a6073)',
       
    },



    Divider: {
        background: 'black'
    },
    P1Text: {
        textAlign: 'center'
    },
    
    RickandmortyImg: {
        width: '100%',
    },
    Links: {
        textDecoration: 'none'
    },
    buttons: {
        color: 'white',  
    },
    
    modalText: {
        display: 'flex',
        justifyContent: 'space-evenly',
        
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '40%',
       
    },
    inputContainer: {
        textAlign: 'center',
        width: '45%',
        
    },
    NavTitle:{
        
        padding:'1%',
        textAlign:'center',
        fontSize:'20px',
        width:'50%'
    },
    Nav:{
        
        display:'flex',
        justifyContent:'space-evenly',
        
    },
    NavButtons:{
        
        width:'60%',
        padding:'2%',
        display:'flex',
        justifyContent:'space-evenly',
        boxSizing:"border-box"
    },
    bottomNav: {
        width: '90%',
        margin: ' 0 auto',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        
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
                
                <div className={classes.Nav}>
                    <h1 className={classes.NavTitle}>
                        Projects
                   </h1>
                   <div className={classes.NavButtons}>
                    <Link to='/' className={classes.Links}><Button className={classes.buttons}>Home</Button></Link>

                    <Link className={classes.Links}><Button className={classes.buttons} onClick={handleOpen} >Contact</Button></Link>
                    </div>

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
                                <Divider orientation='vertical' />
                                
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
                    <div className={classes.Sauti}>
                        <div className={classes.SautiTitle}>
                        <Typography>
                            Sauti
                        </Typography>
                        <Typography>
                            HTML - LESS
                        </Typography>
                        </div>
                    </div>
                    <Divider className={classes.Divider}  />

                    <div className={classes.btnContainer}>

                        <p className={classes.SautiContent}>

                        Sauti is a Mobile-based trade and market
                        information platform to trade legally and safely across borders. Empowering East Africa's women to make a better life for themselves and their families. Sauti provides tools for simplifying access to information on trading procedures, market information, and voicing incidents of corruption and harassment. 
                        
                    </p>

                        <div className={classes.SautiButtonContainer}>
                            <a className={classes.Links} href='https://dlray89.github.io/SautiAfrica/'><Button className={classes.SautiButtons} variant='outlined'>Website</Button></a>
                            <a className={classes.Links} href='https://github.com/Dlray89/SautiAfrica'><Button variant='outlined' className={classes.SautiButtons}>Code Source</Button></a>
                        </div>

                    </div>

                </div>
                <Divider className={classes.Divider} />

                <div className='row2 '>

                    <div className={classes.btnContainer}>

                        <p className={classes.ProhashContent}>
                            ProHash is a project management application that will allow you create projects and tasks to get you closer to your short and long term goals. You able to create an account, create, delete and update your projects. Stay organized and focus to your dreams and accomplishements.
                        </p>
                        <div className={classes.ProhashButtonContainer}>
                            <a href='https://prohash.vercel.app/' className={classes.Links}> <Button variant='outlined' className={classes.ProhashButtons}>Website</Button></a>
                            <a href='https://github.com/Dlray89/ProTask-RESTFul-API' className={classes.Links}><Button variant='outlined' className={classes.ProhashButtons}>Code Source</Button></a>
                        </div>


                    </div>


                    <div className={classes.Prohash}>
                        <div className={classes.ProhashTitle}>
                            <Typography>
                                Prohash | Project Management 
                            </Typography>
                            <Typography>
                                React - Material-UI - NodeJS
                            </Typography>
                        </div>
                        
                        
                    </div>

                </div>

                <Divider className={classes.Divider} />

                <div className='row '>

                    <div className={classes.Conway}>
                        <div className={classes.ConwayTitle}>
                            <Typography>
                                Conway Game of life
                            </Typography>

                            <Typography>
                                React - Javascript - Material-UI
                            </Typography>
                        </div>
                       
                        
                    </div>

                    <div className={classes.btnContainer}>

                        <p className={classes.ConwayContent}>

                            The Game of Life is not your typical computer game. It is a 'cellular automaton', and was invented by Cambridge mathematician John Conway.
                            This game became widely known when it was mentioned in an article published by Scientific American in 1970. It consists of a collection of cells which, based on a few mathematical rules, can live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the course of the game
                    </p>
                        <div className={classes.ConwayButtonContainer}>
                            <a href='https://the-conway-game-of-life.vercel.app/' className={classes.Links}><Button variant='outlined' className={classes.ConwayButtons}>Website</Button></a>
                            <a href='https://github.com/Dlray89/The-Conway_game-of_life' className={classes.Links}><Button variant='outlined' className={classes.ConwayButtons}>Code Source</Button></a>
                        </div>


                    </div>



                </div>


            </div>
            <div className={classes.bottomNav}>

                <div className={classes.copyright}>
                    <Link className={classes.bottomLinks}><Button className={classes.buttons}>&copy; Dapthedev</Button></Link>
                </div>

                <div className={classes.socialmedia}>
                    <a href='https://www.linkedin.com/in/dapperdave1914/' className={classes.bottomLinks}><Button className={classes.buttons}><LinkedInIcon /></Button>
                    </a>
                    <a href='https://github.com/Dlray89' className={classes.bottomLinks}><Button className={classes.buttons}><GitHubIcon /></Button></a>
                </div>

            </div>
        </div>
    )
}

export default Projects