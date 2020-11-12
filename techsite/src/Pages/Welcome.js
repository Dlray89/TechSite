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
        fontFamily: 'Cormorant, serif',
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
        height:'50vh',
        
        [theme.breakpoints.down('xs')]: {
            width:'105%',
            backgroundPosition: 'start',
            backgroundPositionY: '50%',
            backgroundPositionX: '50%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'filled',
            height:'20vh'
        },
        [theme.breakpoints.down('xm')]: {
            width:'100%',
            backgroundPositionX: '50%',
        },
        [theme.breakpoints.down('sm')]:{
            height:'20vh'
        }

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
            width:'100%'
        },
        [theme.breakpoints.down('sm')]:{
            width:'100%',
            padding:'6%',
            fontSize:'14px'
        },
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
        fontFamily: 'Cormorant, serif'
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
        [theme.breakpoints.down('xs')]:{
        }
    },
    icons: {
        [theme.breakpoints.down('xs')]:{
            width:'15%'
        }
    },
    Special:{
     
        textAlign:'center',
        background: 'linear-gradient(to right, #2980b9, #2c3e50)',
        [theme.breakpoints.down('xs')]:{
            
        }
    },
    intro:{
       
        padding:'1%',
        background:'linear-gradient(to right, #2980b9, #2c3e50)',
        color:'white',
        fontSize:'20px',
        [theme.breakpoints.down('xs')]:{
            padding:'1%',
            textAlign:'center',
            fontSize:'15px'   
        },
        [theme.breakpoints.down('sm')]:{
            fontSize:'22px'
        }
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
        [theme.breakpoints.down('xs')]:{
            width:'100%',
            padding:'5%'
        },
        [theme.breakpoints.down('sm')]:{
            width:'100%',
            padding:'6%'
        },
    },
    box_one_info:{
        background:'rgba(27, 20, 17, 0.8)', 
        color:'white', 
        width:'20%', 
        padding:'1%',
        margin: '0 auto',
        [theme.breakpoints.down('xs')]:{
            width:'70%',
            fontSize:'14px'
        },
        [theme.breakpoints.down('sm')]:{
           fontSize:'20px'
        },
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
        margin:'1% 0%',
        [theme.breakpoints.down('xs')]:{
            width:'100%',
            padding:'5%'
        },
        [theme.breakpoints.down('sm')]:{
            width:'100%',
            padding:'6%'
        },
    },
    box_two_info:{
        background:'rgba(27, 20, 17, 0.8)', 
        color:'white', 
        width:'20%', 
        padding:'1%',
        margin:'0 auto',
        [theme.breakpoints.down('xs')]:{
            width:'70%',
            fontSize:'14px'

        },
        [theme.breakpoints.down('sm')]:{
            fontSize:'20px'
         },
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
        [theme.breakpoints.down('xs')]:{
            width:'100%',
            padding:'5%'
        },
        [theme.breakpoints.down('sm')]:{
            width:'100%',
            padding:'6%'
        },
        
    
    },
    box_three_info:{
        background:'rgba(27, 20, 17, 0.8)', 
        color:'white', 
        width:'20%', 
        padding:'1%',
        margin:'0 auto',
        [theme.breakpoints.down('xs')]:{
            width:'70%',
            fontSize:'14px'

        },
        [theme.breakpoints.down('sm')]:{
            fontSize:'20px'
         },
    },
    title_special:{
        padding:'2%',
        color:'white',
        fontSize:'22px',
        [theme.breakpoints.down('xs')]:{
            fontSize:'18px'
        },
        [theme.breakpoints.down('sm')]:{
            fontSize:'23px'
        }
    },
    socialButtonContainer:{
        width:'30%',
        display:'flex',
        justifyContent:'space-between',
        padding:'0.2%',
        

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
        },
        [theme.breakpoints.down('sm')]:{
            width:'100%',
            padding:'6%',
            fontSize:'17px'
        },
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

                                <Link to='/projects' className='flip-in-hor-top' ><Button variant='contained' className={classes.button}  ><span className='jello-horizontal' >Projects</span></Button></Link>
                                
                              
                                   
                            <Link to='/aboutme' className='flip-in-ver-right' ><Button onClick={handleToggle} className={classes.button} variant='contained' ><span className='jello-horizontal'>About</span></Button></Link>
                                   
                              

                                <Link className='flip-in-ver-left' ><Button className={classes.button} variant='contained' onClick={handleOpen} ><span className='jello-horizontal'>Contact</span></Button></Link>



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

                <div className={classes.intro}> Full Stack Developer with a passion for creativity and solution-seeking. My mission is to develop and design a robust, user-friendly, handicap accessible, and easy to use User Interface for all. Your vision for your business/organization is very important not only to me but to the user as well. Let’s chat about your vision and turn it into a reality because that’s what I do. </div>
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
                <div className={classes.navTitle}>
                    &copy; A dapthedev Design 2020
                </div>

                <div className={classes.bn_Links}>
                    <Link to='/welcome' className={classes.link}>Home</Link>
                    <Link to='/projects' className={classes.link}>Projects</Link>
                </div>

                <div className={classes.navIcons}>
                    <a href='https://www.linkedin.com/in/dapperdave1914/'><Button className={classes.social} ><LinkedInIcon /> </Button></a>
                    <a href='https://github.com/Dlray89'><Button className={classes.social} ><GitHubIcon /></Button></a>
                    <a href='https://www.instagram.com/tapthedap'><Button className={classes.social} ><InstagramIcon /></Button></a>
                    <a href='https://www.facebook.com/ImodelIspeak15?ref=bookmarks'><Button className={classes.social}><FacebookIcon /></Button></a>
                </div>
            </div>
               
            </div>
        </div>
    )
}

export default Welcome