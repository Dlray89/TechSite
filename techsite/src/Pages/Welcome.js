import React, { useState } from 'react'
import { makeStyles, Button, Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle, Divider, TextField, List, ListItem, ListItemText } from "@material-ui/core"
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import Contactops from '../crudhandle/contact_ops'
import { Link } from 'react-router-dom'
import LOGO from "../images/dapthedev.gif"
import Resume from '../resume/david_resume.pdf'
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



const useStyles = makeStyles((theme) => ({
    mainContiner: {
        padding: '1%',
        height: '100vh',
        boxSizing: 'border-box',
        [theme.breakpoints.down('xs')]: {
            
        },
    },
    introText: {
        width: '20%',
        color: 'white',

    },
    introTextLink: {
        textDecoration: 'none'
    },
    intro: {
        height: '40vh',
        boxSizing: 'border-box',
        display: 'flex',

    },
    skills: {
        width: '50%',
        display: 'flex'
    },
    greetingContainer: {
        width: '100%',
        display: 'flex',
        background: 'lightgrey',

    },
    introTwo: {
        height: '40vh',
        boxSizing: 'border-box',
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'reverse-column',
            width:'100%',
            height: '70vh'
            
        }

    },
    experience: {
        width: '100%',
        display: 'flex',

    },

    Nav: {
        width: '90%',
        margin: '0 auto',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',



    },
    bottomNav: {
        width: '90%',
        margin: ' 0 auto',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',

    },
    navContainer: {
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',


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
    divider: {
        background: 'white'
    },
    buttons: {
        color: 'black', 
        '&:hover': {
            color:'red'
        },
        [theme.breakpoints.down('xs')]: {
           fontSize:'12px',
            width: '30%'
        }

    },
    bottomLinks: {
        textDecoration: 'none',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            fontSize:'15px'
        }
    },
    copyright: {
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            margin: '0% auto',
            boxSizing:'border-box',
        }

    },
    introP: {
        padding: '2%',
        boxSizing: 'border-box',
        marginBottom: '5%',
        testAlign: 'center'

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
    modal: {

    },
    greetingBox: {
        width: '100%',
        backgroundImage: 'url(' + LOGO + ')',
        backgroundPosition: 'start',
        backgroundPositionY: '50%',
        backgroundPositionX: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'filled',
        backgroundSize: '70%',
        
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
    greeting: {
        background: '#3a6073 ',
        width: '10%',
        position: 'relative',
        top: '60%',
        color: 'white',
        textAlign: 'center'

    },
    aboutTextContainer: {
        width: '50%',
        color: 'white',
        fontSize: '1rem',
        padding: '',
        boxSizing: 'border-box',
        background: 'linear-gradient(to bottom, #16222a, #3a6073)',

    },
    aboutTitle: {
        padding: '0.6%',
        textAlign: 'center'
    },
    news: {
        width: '50%',
        textAlign: 'center',

        background: 'white',
        [theme.breakpoints.down('xs')]: {
            width:'60%',
            height:'66vh'
        }

    },
    backendSkillList: {
        textAlign: 'center'
    },
    frontEnd: {
        width: '50%',
        textAlign: 'center',
        fontSize: '16px',
        color: 'white',
        background: 'lightgrey',
        [theme.breakpoints.down('xs')]: {
            width:'87.3%',
            margin:' 0 auto',
            position:'absolute',
            top:"84%"
        }

    },
    Davidpicture: {
        width: '20vw'
    },
    
    button: {
        width: '80%',
        '&:hover': {
            color: 'white',
            background: 'black'
        },
        [theme.breakpoints.down('xs')]: {
            
            textAlign:'center'
        }
    },
    list:{
        height: '7vh', 
        width: '100%', 
        textAlign: 'center',
        margin:'0 auto',
        
        '&:hover': {
            color: 'white',
            background: 'black'
        },
        [theme.breakpoints.down('xs')]: {
            width:'100%%',
            fontSize:'small',
        },
        [theme.breakpoints.down('sm')]: {//this is at 960px
        
            width:'100%'
        }

    },
    line: {
        background:'black',
        [theme.breakpoints.down('xs')]:{
            visibility:'hidden'
        }
    
    },
    link: {
        textDecoration: 'none',
        fontFamily: 'Cinzel, serif'
       
    },
    Certs: {
        '&:hover': {
            color: 'white',
            background: 'black'
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
        
    }

}))



const Welcome = () => {

    const initContact = {
        id: null,
        fullname: '',
        phonenumber: '',
        email: ''
    }

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
                <Divider style={{background:'black'}} />


                <div className={classes.introTwo}>
                    <div className={classes.news}>

                        <p style={{ fontSize: '20px', margin: '0 0 1% 0', padding: '1%', boxSizing: 'border-box' }}>Specializations & Career</p>
                        <Divider style={{width:'40%', margin:'0 auto', background: 'black'}} />

                        

                        <List className='servicesandcareer' >

                            <div className='services' >
                                <ListItem button className={classes.list} >
                                    <ListItemText className='jello-horizontal'><p className='welcomeText'> Online Portfolio's</p></ListItemText>
                                </ListItem>
                                <Divider style={{margin:'0 auto', width:'100%', background:'black'}} />

                                <ListItem button className={classes.list}>
                                    <ListItemText className='jello-horizontal' ><p className='welcomeText'>E-Commerce Website's</p></ListItemText>
                                </ListItem>
                                <Divider style={{margin:'0 auto', width:'100%', background:'black'}} />

                                <ListItem button className={classes.list} >
                                    <ListItemText className='jello-horizontal'><p className='welcomeText'>Application development</p></ListItemText>
                                </ListItem>
                                <Divider style={{margin:'0 auto', width:'100%', background:'black'}} />

                                <ListItem button className={classes.list}>
                                    <ListItemText className='jello-horizontal'><p className='welcomeText'>Server-Side Applications</p></ListItemText>
                                </ListItem>
                                <Divider style={{margin:'0 auto', width:'100%', background:'black'}} />
                            </div>

                            <Divider style={{background: 'black', color:'black'}} orientation='vertical' />

                            <div className='careers'>
                               

                                <ListItem button className={classes.list}>
                                    <ListItemText className='jello-horizontal'><p className='welcomeText'>Full-Stack Engineer</p></ListItemText>
                                </ListItem>
                                <Divider  style={{margin:'0 auto', width:'100%', background:'black'}} />
                                <ListItem button className={classes.list} >
                                    <ListItemText className='jello-horizontal' ><p className='welcomeText'>View my <a className={classes.specButton}  href={Resume}> Resume</a></p></ListItemText>
                                </ListItem>
                                <Divider  style={{margin:'0 auto', width:'100%', background:'black'}} />

                                <ListItem button  className={classes.list} onClick={handleCert}>
                                    <ListItemText className='jello-horizontal'><p className='welcomeText' >Click to see <span className={classes.specButton} >Certification</span> </p></ListItemText>
                                </ListItem>
                                <Dialog open={openCerts} onClose={certClose} className={classes.modal}>
                                    <DialogTitle><p style={{fontFamily: 'Cinzel, serif', textAlign:'center'}} >Certification gained during my web development journey.</p> </DialogTitle>
                                    <Divider  />
                                        <DialogContent>
                                            <DialogContentText style={{display:'flex', flexDirection:'column', textAlign:'center'}}>
                                            <div>
                                            <a className={classes.link} href='https://www.sololearn.com/Certificate/1014-15919711/pdf/'><Button style={{fontFamily: 'Cinzel, serif'}} className={classes.Certs} >SoloLearn - HTML5 Course</Button></a>
                                            </div>
                                                    
                                            <div>
                                                <a className={classes.link}  href='https://www.sololearn.com/Certificate/1023-15919711/pdf/' ><Button style={{fontFamily: 'Cinzel, serif'}} className={classes.Certs}>SoloLearn - CSS Course</Button></a>
                                            </div>

                                            <div>
                                                <a className={classes.link} href='https://www.sololearn.com/Certificate/1024-15919711/pdf/'><Button style={{fontFamily: 'Cinzel, serif'}} className={classes.Certs}>SoloLearn - Javascript Course</Button></a>

                                            </div>
                                            <div>
                                                <a className={classes.link} href='https://www.sololearn.com/Certificate/1060-15919711/pdf/'><Button style={{fontFamily: 'Cinzel, serif'}} className={classes.Certs}>SoloLearn - SQL Course</Button></a>

                                            </div>

                                            <div>
                                                <a className={classes.link}  href='https://www.udemy.com/certificate/UC-5Y7T5P6J/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email'><Button style={{fontFamily: 'Cinzel, serif'}} className={classes.Certs}>Udemy - Beginner guide to Cyber Security Courses</Button></a>

                                            </div>

                                            <div>
                                                <a className={classes.link}  href='https://www.udemy.com/certificate/UC-34PB162X/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email'><Button style={{fontFamily: 'Cinzel, serif'}}className={classes.Certs}>Udemy - Ethical Hacking BootCamp Courses</Button></a>

                                            </div>

                                                    
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>

                                        <Button style={{fontFamily: 'Cinzel, serif'}} onClick={certClose} >Close</Button>
                                        </DialogActions>

                                   
                                </Dialog>
                                <Divider  style={{margin:'0 auto', width:'100%', background:'black'}} />

                                <ListItem button className={classes.list}>
                                    <ListItemText className='jello-horizontal'><p className='welcomeText' >Lambda Grad Student</p></ListItemText>
                                </ListItem>
                                <Divider  style={{margin:'0 auto', width:'100%', background:'black'}} />


                            </div>
                            
                        </List>

                    </div>
<Divider className={classes.line}  orientation='vertical' />

                    <div className='langandsocial'>

                        <div>
                            <div style={{ padding: '0%', color: 'black' }}>
                                <p>Primary Languages</p>
                            </div>

                            <Divider style={{background:'black', width:'90%', margin:'0 auto'}} />

                            <div className='bounce-in-right'>

                                <img className='jello-horizontal pic1'  src={HTML} />

                                <img className='jello-horizontal pic1'  src={CSS} />
                                <img className='jello-horizontal pic1'  src={JS} />
                                <img className='jello-horizontal  pic1'  src={REACT} />
                                <img className='jello-horizontal pic1'  src={NODE} />
                                <img className='jello-horizontal pic1'  src={PY} />
                            </div>
                        </div>

                         <Divider style={{background:'black', width:'90%', margin:'0 auto'}} />



                        <div className='socialMediaContainer'>
                            <div>
                                <p className='socialMedialTitle'>Social Platforms</p>

                            </div>

                           <Divider style={{background:'black', width:'50%', margin:'0 auto'}} />

                            <div>
                                <a href='https://www.linkedin.com/in/dapperdave1914/' className={classes.bottomLinks}><Button className={classes.buttons}><LinkedInIcon style={{}} /></Button>
                                </a>

                                <a href='https://www.instagram.com/tapthedap' className={classes.bottomLinks}><Button className={classes.buttons}><InstagramIcon  /></Button></a>

                                <a href='https://www.facebook.com/ImodelIspeak15?ref=bookmarks' className={classes.bottomLinks}><Button className={classes.buttons}><FacebookIcon  /></Button>
                                </a>
                                <a href='https://github.com/Dlray89' className={classes.bottomLinks}><Button className={classes.buttons}><GitHubIcon  /></Button></a>

                            </div>



                        </div> 
                        <div className={classes.copyright}>
                    <Link className={classes.bottomLinks}><Button className={classes.buttons}>&copy; 2020; A dapthedev development</Button></Link>
                </div>
                    </div>

                </div>


            </div>

            <div className={classes.bottomNav}>

                



            </div>
        </div>
    )
}

export default Welcome