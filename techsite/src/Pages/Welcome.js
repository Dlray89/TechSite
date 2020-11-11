import React, { useState } from 'react'
import { makeStyles, Button, Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle, Divider, TextField, List, ListItem, ListItemText } from "@material-ui/core"
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import Contactops from '../crudhandle/contact_ops'
import { Link } from 'react-router-dom'
import LOGO from "../images/dave_gif.gif"

import Resume from '../resume/davidray_resume_update.pdf'
import './Welcome.css'

//icons
import HTML from '../icons/html-5.png'
import CSS from '../icons/css.png'
import JS from '../icons/javascript.png'
import NODE from '../icons/nodejs.png'
import REACT from '../icons/react.png'
import PY from '../icons/python.png'
import LocationCityIcon from '@material-ui/icons/LocationCity';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

//images

import box1 from "../images/front_end_pic.jpg"
import box2 from "../images/website_design.jpg"
import box3 from "../images/server_side.jpg"



const useStyles = makeStyles((theme) => ({
   
  
   
   
    greetingContainer: {
        width: '100%',
        display: 'flex',
        background: 'lightgrey',

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
    inputContainer: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        margin:'2% auto',
        width:'100%'

    },
  
  
    text: {
        border:'solid 1px black',
        margin:'0 auto',
        fontSize:'15px',  
        width:'100%',      
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        fontFamily: 'Cinzel, serif',
        color:'black',

        [theme.breakpoints.down('sm')]: {
            fontSizing: '12px',
            width: '90%',
            textAlign: 'center',
            margin: '0 auto'
        }
    },
    greetingBox: {
        width: '100%',
        backgroundImage: 'url(' + LOGO + ')',
        backgroundPosition: 'start',
        backgroundPositionY: '50%',
        backgroundPositionX: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'filled',
        backgroundSize: '100%',
        
        [theme.breakpoints.down('xs')]: {
            width:'105%',
            
            backgroundPosition: 'start',
            backgroundPositionY: '50%',
            backgroundPositionX: '50%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'filled',
            
        },
        [theme.breakpoints.down('sm')]: {
            width:'100%',
            backgroundPositionX: '50%'
        },

    },
    Davidpicture: {
        width: '20vw'
    },
    
    button: {
        width: '80%',
        '&:hover': {
            color: 'white',
            background: 'linear-gradient(to left, #2980b9, #2c3e50)'
        },
        [theme.breakpoints.down('xs')]: {
            
            textAlign:'center'
        }
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
        background:'black',
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
        background:'black',
        color:'white',
        fontFamily: 'Cinzel, serif'
    },
    specButton: {
        color:'red',
        textDecoration:'none',
        
    },
    iconContainer:{
        display:'flex',
        justifyContent:'space-evenly',
        width:'100%',
        margin:'2% 0%',
        alignContent:'center',
    },
    icons: {
    },
    Special:{
     
        textAlign:'center',
        background: 'linear-gradient(to right, #2980b9, #2c3e50)'
    },
    bottomNav:{
        display:'flex',
       
        justifyContent:'space-between',
    },
    intro:{
       
        padding:'1%',
        background:'linear-gradient(to right, #2980b9, #2c3e50)',
        color:'white'
    },
    box_one:{
        borderTop:'solid 1px black',
        borderBottom:'solid 1px black',
        padding:'3.5%',
        backgroundImage: 'url('+ box1  +')',
        backgroundPosition: 'start',
        backgroundPositionY: '50%',
        backgroundPositionX: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'filled',
        backgroundSize: '100%',
    },
    box_one_info:{
        background:'rgba(27, 20, 17, 0.8)', 
        color:'white', 
        width:'20%', 
        padding:'1%',
        margin: '0 auto'
    },
    box2:{
        borderTop:'solid 1px black',
        borderBottom:'solid 1px black',
        padding:'3.5%',
        backgroundImage: 'url('+ box2  +')',
        backgroundPosition: 'start',
        backgroundPositionY: '28%',
        backgroundPositionX: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'filled',
        backgroundSize: '100%',
        margin:'1% 0%'
    },
    box_two_info:{
        background:'rgba(27, 20, 17, 0.8)', 
        color:'white', 
        width:'20%', 
        padding:'1%',
        margin:'0 auto'
    },
    box_three:{
        borderTop:'solid 1px black',
        borderBottom:'solid 1px black',
        padding:'3.5%',
        backgroundImage: 'url('+ box3 +')',
        backgroundPosition: 'start',
        backgroundPositionY: '50%',
        backgroundPositionX: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'filled',
        backgroundSize: '100%',
        
    
    },
    box_three_info:{
        background:'rgba(27, 20, 17, 0.8)', 
        color:'white', 
        width:'20%', 
        padding:'1%',
        margin:'0 auto'
    },
    title_special:{
        padding:'2%',
        color:'white',
        fontSize:'22px'
    },
    socialButtonContainer:{
        width:'30%',
        display:'flex',
        justifyContent:'space-between',
        padding:'0.2%',
        

    }
    

}))



const Welcome = () => {

    const initContact = {
        id: null,
        fullname: '',
        phonenumber: '',
        email: ''
    }

    const SpecializeData = [
        {id:1,name:'Front-End Applications'},
        {id:2, name: 'Website Development'},
        {id:3, name: 'Server-Side Application'},
        {id:3, name: 'E-Commerce Platform'},
       
    ]

    const codingLang = [
        {id:1, icon: HTML},
        {id:2, icon: CSS},
        {id:3, icon: JS},
        {id:4, icon: REACT},
        {id:5, icon: NODE},
        {id:6, icon: PY},
        
    ]

    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [sending, setSending] = useState(false)
    const [openCerts, setOpenCerts] = useState(false)
    const [contacts, setContacts] = useState(initContact)
    const [submitted, setSubmitted] = useState(false)
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(true)
    }

  

    const handleOpen = () => {
        setOpen(true)

    }

    const handleClose = () => {
        setOpen(false)
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
                setSending(true)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const newContact = () => {
        setContacts(initContact)
        setSubmitted(false)
    }


    return (
        <div className='mainContainer'>

                
            <div className='introBox'>
             <div className='greetingBoxLinks' >

                                <Link to='/projects' style={{textDecoration:'none'}} className='flip-in-hor-top' ><Button variant='contained' className={classes.button}  ><span className='jello-horizontal' >Projects</span></Button></Link>
                                
                              
                                   
                            <Link to='/aboutme' style={{textDecoration:'none'}} className='flip-in-ver-right' ><Button onClick={handleToggle} className={classes.button} variant='contained' ><span className='jello-horizontal'>About</span></Button></Link>
                                   
                              

                                <Link className='flip-in-ver-left' style={{textDecoration:'none'}} ><Button className={classes.button} variant='contained' onClick={handleOpen} ><span className='jello-horizontal'>Contact</span></Button></Link>



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
                            <Divider style={{background: 'black' }}/>
                <div className='intro'>
                    <div className='greetingContainer'>

                        <div className={classes.greetingBox}>
                             
                           
                        </div>
                    </div>

                    
                </div>
                <Divider />

                <div className={classes.intro}> Full Stack Developer with a passion for creativity and solution seeking. My mission is to develop and design a robust, user-friendly, handicap accessible, and easy to use User Interface for all. Your vision for your business/organization is very
                    important not only to me but to the user as well. Lets chat abour your vision and turn it into a reality because thats what I do. </div>
                <div className={classes.iconContainer}>
                   {codingLang.map(img => (
                       <img className={classes.icons} width={70} src={img.icon} />
                   ))}
                </div>

                <div className={classes.Special} >
                        <p class={classes.title_special}>What I specialize In:</p>

                        <div>

                            <div className={classes.box_one}>
                                <p className={classes.box_one_info}> Front-End Applications</p>
                                </div>
                            <div className={classes.box2}>
                                <p className={classes.box_two_info}>Website Development</p>
                            </div>
                            <div className={classes.box_three}>
                                <p className={classes.box_three_info}>Server-side Applications</p>
                            </div>
                        </div>
                        
                    </div>

                <div className={classes.bottomNav}>
                    <p> &copy; A dapthedev Design 2020</p>
                    <div className={classes.socialButtonContainer}>
                           <a  href='https://github.com/Dlray89'>
                               <Button><GitHubIcon /></Button>
                               
                           </a>
                           <a href='https://www.linkedin.com/in/dapperdave1914/'>
                               <Button><LinkedInIcon /></Button>
                           </a>

                           <a href='http://instagram.com/tapthedap'>
                               <Button><InstagramIcon  /></Button>
                           </a>

                           <a href='https://www.facebook.com/ImodelIspeak15'><Button><FacebookIcon  /></Button></a>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Welcome