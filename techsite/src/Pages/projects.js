import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, Button, Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle, TextField, Divider, Typography, Card, CardHeader } from "@material-ui/core"
import Contactops from '../crudhandle/contact_ops.js'
import { useSpring, animated } from "react-spring"
import './projects.css'
import Sauti from '../images/sauti.PNG'
import Prohash from '../images/prohash.PNG'
import Conway from '../images/conway.PNG'
import Coming_Soon from '../images/comingsoon.jpg'
import SAA from '../images/saa.PNG'
import Modal from '../components/Modal'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

import bg from '../images/backgroud.jpg'
import bg2 from '../images/background2.jpg'

const projects = [

    { "id": 1, name: 'Sauti', details: "Sauti is a Mobile-based trade and market information platform to trade legally and safely across borders. Empowering East Africa's women to make a better life for themselves and their families. Sauti provides tools for simplifying access to information on trading procedures, market information, and voicing incidents of corruption and harassment.", link: "https://dlray89.github.io/SautiAfrica/", githublink: "https://github.com/Dlray89/SautiAfrica", tech_stack: "HTML - LESS", img: Sauti },

    { "id": 2, name: 'Prohash', details: "ProHash is a project management application that will allow you create projects and tasks to get you closer to your short and long term goals. You able to create an account, create, delete and update your projects. Stay organized and focus to your dreams and accomplishements.", link: "https://prohash.vercel.app/", githublink: "https://github.com/Dlray89/ProTask-RESTFul-API", tech_stack: "React - Material-UI - NodeJS", img: Prohash },

    { "id": 3, name: 'Conway', details: "The Game of Life is not your typical computer game. It is a 'cellular automaton', and was invented by Cambridge mathematician John Conway.This game became widely known when it was mentioned in an article published by Scientific American in 1970. It consists of a collection of cells which, based on a few mathematical rules, can live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the course of the gam", link: "https://the-conway-game-of-life.vercel.app/", githublink:'https://github.com/Dlray89/The-Conway_game-of_life', tech_stack: "React - Javascript - Material-UI", img:Conway },
    {
        "id": 4, name:"notes.IO", details:"A terminal note-taking feature to take notes and save them to a JSON file. You can create, delete, see a listing of all your notes or read a specific one. It's your choice! Typing commands in the terminal can get out of control. There will be a time you may forget specific commands you did hours ago but have no worries notes.IO got your back.",tech_stack: "Node.JS", img:Coming_Soon
    },
    {
        "id": 5, name:'Stay Alive Artistry', details:"Stay Alive Artistry is art that feeds the soul. Angel Price passion for art comes from knowing that art heals the soul. she make pieces that have the power to let people know that they are the creator of their own reality. Everyone should feel like they can be whatever they want to be, no dream is too big! \n COMING SOON! UNDER DEVELOPMENT" , img: SAA, tech_stack:'React - Material-UI'

    }
    
]

const useStyles = makeStyles((theme) => ({
    button: {
        fontFamily: 'Cinzel, serif',
        width:'98%',
      


        '&:hover': {
            background: 'linear-gradient(to right, #2980b9, #2c3e50)',
            color:'white',
            
        }
    },
    links:{
        width:'100%',
        textDecoration:'none'
    },
    social: {
        color:'white',
        '&:hover': {
            color: 'black'
        }
    },
    modalText: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection:'column',
        
        width:'100%'

    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        
        width: '100%',

    },
    text: {
        border:'solid 1px black',
        margin:'0 auto',
        fontSize:'12px',  
        width:'100%',      
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        
        [theme.breakpoints.down('sm')]: {
            fontSizing: '12px',
            width: '90%',
            textAlign: 'center',
            margin: '0 auto'
        }
    },
    inputContainer:{
       
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        margin:'2% auto',
        width:'100%'
    },
    input:{
        margin:'2% auto',
        width:'100%',
        
    },
     buttonContainer: {
       
        display:'flex',
        flexDirection:'column'
    },
    modalButton: {
        background:'linear-gradient(to right, #2980b9, #2c3e50)',
        color:'white',
        width:'100%',
        margin:'1% auto',
        '&:hover':{
            background:'grey',
            color:'white'
        }
    },
    submittedButton: {
        
        width:'100%',
        margin:'1% auto',
        '&:hover':{
            background:'black',
            color:'white'
        }

    },
    modalTitle: {
        textAlign:'center',
        background:'linear-gradient(to right, #2980b9, #2c3e50);',
        color:'white',
        fontFamily: 'Cinzel, serif'
    },
    bottomNav:{
        display:'flex', 
        justifyContent:'space-between', 
        width:'100%',  
        margin:' 0% auto',
        border: 'solid 1px black',
        alignContent:'center',
        background:'linear-gradient(to left, #2980b9, #2c3e50)',
        color:'white'
    },
    navTitle:{
        width: '30%',
        padding:'0.6%'
    },
    navIcons:{
        width:'20%', 
        display:'flex', 
        justifyContent:'space-evenly',
    },
    bn_Links:{
        width:'50%',
        display:'flex',
        justifyContent:'space-evenly',
        padding:'0.6%',
    },
    link:{
        textDecoration:'none',
        color:'white',
        '&:hover': {
            color:'black'
        }
    }
}))

const Projects = () => {

    const initContact = {
        id: null,
        fullname: '',
        phonenumber: '',
        email: ''
    }

    const classes = useStyles()

    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [sending, setSending] = useState(false)
    const [openSauti, setOpenSauti] = useState(false)
    const [open, setOpen] = useState(false)
    const [openCerts, setOpenCerts] = useState(false)
    const [contacts, setContacts] = useState(initContact)
    const [submitted, setSubmitted] = useState(false)
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(true)
    }

    const toggleOff = () => {
        setToggle(false)
    }

    const handleOpen = () => {
        setOpen(true)

    }

    const handleClose = () => {
        setOpen(false)
    }
    
    const handleCert = () => {
        setOpenCerts(true)
    }


    const certClose = () => {
        setOpenCerts(false)
    }
    const handleContacts = e => {
        const { name, value } = e.target
        setContacts({ ...contacts, [name]: value })
    }

    const savecontact = () => {
        let data = {
            fullname: contacts.fullname,
            phonenumber: contacts.phonenumber,
            email: contacts.email
        }

        Contactops.createContact(data)
            .then(res => {
                setContacts({
                    id: res.data.id,
                    fullname: res.data.fullname,
                    phonenumber: res.data.phonenumber,
                    email: res.data.email
                })
                setSubmitted(true)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const newContact = () => {
        setContacts(initContact)
        setSubmitted(false)
    }

    const handleChnage = e => {
        setSearch(e.target.value)
    }

    const SautiOpen = () => {
        setOpenSauti(true)
    }
    const SautiClose = () => {
        setOpenSauti(false)
    }

    React.useEffect(() => {
        const results = projects.filter(project =>
            project.name.toLowerCase().includes(search.toLowerCase())
        )
        setSearchResults(results)
    }, [search])

    return (
        <div className='projectContainer' >
          

            <div style={{fontSize: '20px', background:'url('+ bg2 +')', padding: '1%' ,
        backgroundPositionY: '50%',
        backgroundPositionX: '10%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'filled',
        backgroundSize: '100%',
        padding:'1%', height:'30vh'}}>
                <p style={{color:'white', border:'solid 2px white', width:'20%', margin:'5% auto' }}>Project Board</p>
            </div>



            <div className='navbar'>
                <div className='linksContainer' >
                    <Link className={classes.links} to='/welcome'><Button variant='contained' className={classes.button} >Home</Button></Link>
                    <Link className={classes.links} to='/aboutme' ><Button variant='contained' className={classes.button} >About</Button></Link>
                    <Link className={classes.links}><Button variant='contained' className={classes.button} onClick={handleOpen}>Contact</Button></Link>
                    <Dialog open={open} onClose={handleClose} className={classes.modal}>
                                   <DialogTitle className={classes.modalTitle}  >
                                       <p style={{fontFamily:'Cinzel, serif'}}>Need a website? or Do you want to network? Drop your information in the form below and lets network. Look forward to speaking with you.</p>
                        </DialogTitle>
                                    <DialogContent className={classes.modalInner}>
                                         <DialogContentText className={classes.modalText}>
                                            <div className={classes.info}>
                                                <p className={classes.text}><LocationCityIcon /> Marietta, GA</p>
                                                <p className={classes.text}><PhoneIcon  /> 229.735.2351</p>
                                                <p className={classes.text}><EmailIcon /> dlrayjr89@gmail.com</p>
                                                
                                                
                                                    </div>
                                                   
                                            <Divider style={{background:'black'}} />
                                            <div className={classes.inputContainer}>
                                                
                                                <TextField
                                                className={classes.input}
                                                    type='text'
                                                    id="fullname"
                                                    name='fullname'
                                                    value={contacts.fullname}
                                                    onChange={handleContacts}
                                                    variant="outlined"
                                                    placeholder='Full Name' />

                                                <TextField
                                                    className={classes.input} variant="outlined"
                                                    type='text'
                                                    id='phonenumber'
                                                    name='phonenumber'
                                                    onChange={handleContacts}
                                                    value={contacts.phonenumber}
                                                    placeholder='Phone Number' />

                                                <TextField
                                                className={classes.input}
                                                    variant="outlined"
                                                    type='text'
                                                    placeholder='Email Address'
                                                    name='email'
                                                    id='email'
                                                    onChange={handleContacts}
                                                    value={contacts.email}
                                                />
                                            </div>

                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions className={classes.buttonContainer}>
                                        {submitted ? (
                                            <div style={{width:'90%'}} >
                                                <Button variant='contained' className={classes.submittedButton} onClick={newContact}>Sumbit</Button>
                                            </div>
                                        ) : (
                                                <div style={{width:'90%'}}>
                                                    <Button variant='contained' className={classes.modalButton} onClick={savecontact}>Send</Button>    
                                                    
                                                    <Button variant='contained' className={classes.modalButton} onClick={handleClose}>Cancel</Button>
                                                </div>
                                            )}

                                    </DialogActions>
                                </Dialog>
                </div>
            </div>
            <Divider />
            <div className='mainContainer'>

            <div className='projects'  >
                {searchResults.map(result => (
                    <div className='tilt-in-fwd-tr' variant="outlined">
                        <Divider />
                        <div className='projectContent' >
                            

                            <p className='projecttext'>{result.name} <br /> {result.tech_stack}</p>

                        </div>
                        <div style={{background: `url(${result.img})`, height:'30vh', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
                            


                        </div>

                        
                        <Divider />
                        <div style={{  width: '100%' }}>
                            <Modal key={result.id} name={result.name} img={result.img} tech_stack={result.tech_stack} details={result.details} link={result.link} github={result.githublink} />
                        </div> 
                    </div>
                ))}
            </div>

            </div>

            <div className={classes.bottomNav}>
                <div className={classes.navTitle}>
                    &copy; A dapthedev Design 2020
                </div>

                <div className={classes.bn_Links}>
                    <Link to='/welcome' className={classes.link}>Home</Link>
                    <Link to='/aboutme' className={classes.link}>About</Link>
                </div>

                <div className={classes.navIcons}>
                    <a href='https://www.linkedin.com/in/dapperdave1914/'><Button className={classes.social} ><LinkedInIcon /> </Button></a>
                    <a href='https://github.com/Dlray89'><Button className={classes.social} ><GitHubIcon /></Button></a>
                    <a href='https://www.instagram.com/tapthedap'><Button className={classes.social} ><InstagramIcon /></Button></a>
                    <a href='https://www.facebook.com/ImodelIspeak15?ref=bookmarks'><Button className={classes.social}><FacebookIcon /></Button></a>
                </div>
            </div>
            <Divider />
        </div>
    )
}

export default Projects