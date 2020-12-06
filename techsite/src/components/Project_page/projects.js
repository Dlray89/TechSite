import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, Button, Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle, TextField, Divider, Typography, Card, CardHeader } from "@material-ui/core"
import Contactops from '../../container/AJAX_Handling/contact_ops'
import { useSpring, animated } from "react-spring"
import './projects.css'

import Sauti from '../../images/sauti.PNG'
import Conway from '../../images/conway.PNG'
import Coming_Soon from '../../images/comingsoon.jpg'
import testimonial_Pic from '../../images/testimonial_Cards.PNG'
import JSFurniture from '../../images/tc_shoot.PNG'
import Insure from '../../images/insure.png'

import Modal from '../Modal'

import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

import bg2 from '../../images/background2.jpg'

const projects = [

    { id: 1, name: 'Sauti', details: "Sauti is a Mobile-based trade and market information platform to trade legally and safely across borders. Empowering East Africa's women to make a better life for themselves and their families. Sauti provides tools for simplifying access to information on trading procedures, market information, and voicing incidents of corruption and harassment.", link: "https://dlray89.github.io/SautiAfrica/", githublink: "https://github.com/Dlray89/SautiAfrica", tech_stack: "HTML | LESS", img: Sauti },
    {id: 2, name: 'Testimonal Cards', details:'These is a basic site for rendering Testimonal Cards using React, HTML, and CSS. This was a front end challenge to test my basic creativity', link: 'https://testimonial-cards-two.vercel.app/', githublink:'https://github.com/Dlray89/testimonial-_cards', tech_stack:'HTML | CSS | React', img: testimonial_Pic},
    {id: 3, name: 'JSFurniture', details:'A Project creating a landing page for a furniture store called JSFurniture. Shop for the latest, most modern design in home decor all while keeping you budget intact This was a front end challenge provided buy frontend mentors.', link: 'https://js-furnitures.vercel.app/', githublink:'https://github.com/Dlray89/JS_Furnitures', tech_stack:'HTML | CSS | React | Material-UI | Javascript', img:JSFurniture},
    {id: 4, name: 'Insure Insurance', details:'Insure Insurance Landing Page project. Insure is a life insurance company that ensure you and your loved ones are protected. User friendly process, great prices and they put there people first.', link:'https://insure-insurance.vercel.app/', githublink:'https://github.com/Dlray89/insure_insurance', img: Insure, tech_stack:'HTML | React | Material-UI'},

    { id: 5, name: 'Conway', details: "The Game of Life is not your typical computer game. It is a 'cellular automaton', and was invented by Cambridge mathematician John Conway.This game became widely known when it was mentioned in an article published by Scientific American in 1970. It consists of a collection of cells which, based on a few mathematical rules, can live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the course of the gam", link: "https://the-conway-game-of-life.vercel.app/", githublink:'https://github.com/Dlray89/The-Conway_game-of_life', tech_stack: "React | Javascript | Material-UI", img:Conway },
    {
    id: 6, name:"notes.IO", details:"A terminal note-taking feature to take notes and save them to a JSON file. You can create, delete, see a listing of all your notes or read a specific one. It's your choice! Typing commands in the terminal can get out of control. There will be a time you may forget specific commands you did hours ago but have no worries notes.IO got your back. If you want to check out this simple feature for your terminal feel free to click on the source and get started. Start keeping notes while you do work in the same enviroment.",tech_stack: "Node.JS", img:Coming_Soon
    },
    
]

const useStyles = makeStyles((theme) => ({
    button: {
        fontFamily: 'Cormorant, serif',
        width:'98%',
        [theme.breakpoints.down('xs')]:{
            width:'100%'
        },
        '&:hover': {
            background: 'linear-gradient(to right, #2980b9, #2c3e50)',
            color:'white',
            
        }
    },
    links:{
        width:'100%',
        textDecoration:'none',
        [theme.breakpoints.down('xs')]:{
            width:'100%',
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
        fontFamily: 'Cormorant, serif'
    },
    bottomNav:{
        display:'flex', 
        justifyContent:'space-between', 
        width:'100%',  
        margin:' 0% auto',
        border: 'solid 1px black',
        alignContent:'center',
        background:'linear-gradient(to left, #2980b9, #2c3e50)',
        color:'white',
        [theme.breakpoints.down('xs')]:{
            padding:'5%',
            width:'100%',
            display:'flex',
            flexDirection:'column-reverse'
        }
    },
    navTitle:{
        width: '30%',
        padding:'0.6%',
        [theme.breakpoints.down('xs')]:{
            fontSize:'10px',
            width:'100%'
        }
    },
    navIcons:{
        width:'20%', 
        display:'flex', 
        justifyContent:'space-evenly',
        [theme.breakpoints.down('xs')]:{
            fontSize:'10px',
            width:'100%',
            display:'flex',
            flexWrap:'wrap'
        
        }
        
    },
    bn_Links:{
        width:'50%',
        display:'flex',
        justifyContent:'space-evenly',
        padding:'0.6%',
        [theme.breakpoints.down('xs')]:{
            
            fontSize:'15px',
            width:'100%',
            display:'flex',
        }
    },
    link:{
        textDecoration:'none',
        color:'white',
        '&:hover': {
            color:'black'
        }
    },
    social: {
        color:'white',
        '&:hover': {
            color: 'black'
        },
        [theme.breakpoints.down('xs')]:{
            fontSize:'15px',
            width:'100%',
      }
    },
    header:{
        fontSize: '20px',
         background:'url('+ bg2 +')', 
         padding: '1%' ,
        backgroundPositionY: '50%',
        backgroundPositionX: '10%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'filled',
        backgroundSize: '100%',
        height:'30vh',
        [theme.breakpoints.down('xs')]:{
            
            height:'20vh',
            backgroundPositionY: '50%',
            backgroundPositionX: '10%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'filled',
            backgroundSize: '100%',
        }
    },
    headerText:{
        color:'white', 
        border:'solid 2px white', 
        width:'20%', 
        margin:'5% auto',
        [theme.breakpoints.down('xs')]:{
            
            width:'70%',
            background:'rgba(27, 20, 17, 0.8)',
            margin:'9% auto',
            padding:'3%',
            fontSize:'18px'
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
          

            <div className={classes.header}>
                <p className={classes.headerText}>Project Board</p>
            </div>



            <div className='navbar'>
                <div className='linksContainer' >
                    <Link className={classes.links} to='/welcome'><Button variant='contained' className={classes.button} >Home</Button></Link>
                    <Link className={classes.links} to='/aboutme' ><Button variant='contained' className={classes.button} >About</Button></Link>
                    <Link className={classes.links}><Button variant='contained' className={classes.button} onClick={handleOpen}>Contact</Button></Link>
                    <Dialog open={open} onClose={handleClose} className={classes.modal}>
                                   <DialogTitle className={classes.modalTitle}  >
                                       <p style={{fontFamily:'Cormorant, serif'}}>Need a website? or Do you want to network? Drop your information in the form below and lets network. Look forward to speaking with you.</p>
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