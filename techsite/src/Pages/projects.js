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
import Modal from '../components/Modal'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const projects = [

    { "id": 1, name: 'Sauti', details: "Sauti is a Mobile-based trade and market information platform to trade legally and safely across borders. Empowering East Africa's women to make a better life for themselves and their families. Sauti provides tools for simplifying access to information on trading procedures, market information, and voicing incidents of corruption and harassment.", link: "https://dlray89.github.io/SautiAfrica/", githublink: "https://github.com/Dlray89/SautiAfrica", tech_stack: "HTML - LESS", img: Sauti },

    { "id": 2, name: 'Prohash', details: "ProHash is a project management application that will allow you create projects and tasks to get you closer to your short and long term goals. You able to create an account, create, delete and update your projects. Stay organized and focus to your dreams and accomplishements.", link: "https://prohash.vercel.app/", githublink: "https://github.com/Dlray89/ProTask-RESTFul-API", tech_stack: "React - Material-UI - NodeJS", img: Prohash },

    { "id": 3, name: 'Conway', details: "The Game of Life is not your typical computer game. It is a 'cellular automaton', and was invented by Cambridge mathematician John Conway.This game became widely known when it was mentioned in an article published by Scientific American in 1970. It consists of a collection of cells which, based on a few mathematical rules, can live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the course of the gam", link: "https://the-conway-game-of-life.vercel.app/", githublink:'https://github.com/Dlray89/The-Conway_game-of_life', tech_stack: "React - Javascript - Material-UI", img:Conway },
    {
        "id": 4, name:"notes.IO", details:"A terminal note-taking feature to take notes and save them to a JSON file. You can create, delete, see a listing of all your notes or read a specific one. It's your choice! Typing commands in the terminal can get out of control. There will be a time you may forget specific commands you did hours ago but have no worries notes.IO got your back.",tech_stack: "Node.JS", img:Coming_Soon
    }
    
]

const useStyles = makeStyles((theme) => ({
    button: {
        fontFamily: 'Cinzel, serif',


        '&:hover': {
            background: 'black',
            color:'white'
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

            <div style={{fontSize: '20px', background: 'black', padding: '1%'}}>
                <p style={{color:'white'}}>Project Board</p>
            </div>


            <Divider />

            <div className='navbar'>
                <div className='linksContainer' >
                    <Link to='/welcome'><Button className={classes.button} >Home</Button></Link>
                    <Link><Button className={classes.button} >About</Button></Link>
                    <Link><Button className={classes.button}>Contact</Button></Link>
                    <Dialog open={open} onClose={handleClose} className={classes.modal}>
                                    <DialogTitle>
                                        Lets Chat!
                        </DialogTitle>
                                    <DialogContent className={classes.modalInner}>
                                        <DialogContentText className={classes.modalText}>
                                            <div className={classes.info}>
                                                <p className={classes.text}>Phone: 229.735.2351</p>
                                                
                                                    </div>
                                            <Divider />
                                            <div className={classes.inputContainer}>
                                                <TextField
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
                                    <DialogActions>
                                        {submitted ? (
                                            <div>
                                                <Button onClick={newContact}>Sumbit</Button>
                                            </div>
                                        ) : (
                                                <div>
                                                    <Button onClick={savecontact}>Send</Button>
                                                    <Button onClick={handleClose}>Cancel</Button>
                                                </div>
                                            )}

                                    </DialogActions>
                                </Dialog>
                </div>

                


            </div>
            <Divider />

            <div className='projects'  >
                {searchResults.map(result => (
                    <div className='roll-in-left' variant="outlined">
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
            <Divider style={{margin:' 5% 0% 0% 0%'}} />
            <div style={{display:'flex', justifyContent:'space-between', width:'98%',  margin:' 0% auto'}}>
                <div style={{}}>
                    &copy; 2020 DAPTHEDEV
                </div>

                <div style={{width:'50%', display:'flex', justifyContent:'space-evenly'}}>
                    <LinkedInIcon />
                    <GitHubIcon />
                    <InstagramIcon />
                    <FacebookIcon />
                </div>
            </div>
            <Divider />
        </div>
    )
}

export default Projects