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



const useStyles = makeStyles((theme) => ({
    mainContiner: {
        padding: '1%',
        height: '100vh',
        boxSizing: 'border-box',
        background: 'white',



    },
    introBox: {
        border: 'solid 2px black',
        width: '90%',
        margin: ' 0 auto',
        boxSizing: 'border-box',

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
    divider: {
        background: 'white'
    },
    buttons: {
        color: 'black',

    },
    bottomLinks: {
        textDecoration: 'none'
    },
    introP: {
        padding: '2%',
        boxSizing: 'border-box',
        marginBottom: '5%',
        testAlign: 'center'

    },
    text: {
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
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'filled',

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

    },
    Davidpicture: {
        width: '20vw'
    },
    
    button: {
        width: '90%',
        '&:hover': {
            color: 'white',
            background: 'black'
        }
    },
    list:{
        height: '6vh', 
        width: '100%', 
        textAlign: 'center',
        
        '&:hover': {
            color: 'white',
            background: 'black'
        }
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
    const [openCerts, setOpenCerts] = useState(false)
    const [contacts, setContacts] = useState(initContact)
    const [submitted, setSubmitted] = useState(false)

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


    return (
        <div className={classes.mainContiner}>


            <div className={classes.introBox}>
                <div className={classes.intro}>
                    <div className={classes.greetingContainer}>

                        <div className={classes.greetingBox}>
                             
                            <div style={{ boxSizing: 'border-box', width: '40%', position: 'absolute', top: '10%', left: '50%', display: 'flex', flexDirection: 'column', justifyContent: "space-evenly", height: '25vh' }}>

                                <Link className='flip-in-hor-top' ><Button variant='outlined' className={classes.button}  ><bold>Projects</bold></Button></Link>

                                <Link className='flip-in-ver-right' ><Button className={classes.button} variant='outlined' >About</Button></Link>

                                <Link className='flip-in-ver-left' ><Button className={classes.button} variant='outlined' onClick={handleOpen} >Contact</Button></Link>



                                <Dialog open={open} onClose={handleClose} className={classes.modal}>
                                    <DialogTitle>
                                        Lets Chat!
                        </DialogTitle>
                                    <DialogContent className={classes.modalInner}>
                                        <DialogContentText className={classes.modalText}>
                                            <div className={classes.info}>
                                                <p className={classes.text}>Phone: 229.735.2351</p>
                                                <p className={classes.text}>Email: dlrayjr89@gmail.com</p>
                                                <p className={classes.text}>Location: Marietta, GA</p>


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
                                                    label='Full Name' />

                                                <TextField
                                                    className={classes.input} variant="outlined"
                                                    type='text'
                                                    id='phonenumber'
                                                    name='phonenumber'
                                                    onChange={handleContacts}
                                                    value={contacts.phonenumber}
                                                    label='Phone Number' />

                                                <TextField
                                                    variant="outlined"
                                                    type='text'
                                                    label='Email Address'
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
                    </div>
                </div>
                <Divider style={{background:'black'}} />


                <div className={classes.introTwo}>
                    <div className={classes.news}>

                        <p style={{ fontSize: '20px', margin: '0 0 1% 0', padding: '1%', boxSizing: 'border-box' }}>Services & Career</p>
                        <Divider style={{width:'40%', margin:'0 auto', background: 'black'}} />

                        

                        <List style={{ display: 'flex', justifyContent: 'space-evenly' }}>

                            <div style={{ width: '48%' }} >
                                <ListItem button className={classes.list} >
                                    <ListItemText  >Application Development</ListItemText>
                                </ListItem>
                                <Divider />

                                <ListItem button className={classes.list}>
                                    <ListItemText>Personal Web Design</ListItemText>
                                </ListItem>
                                <Divider />

                                <ListItem button className={classes.list} >
                                    <ListItemText>Server-Side Application</ListItemText>
                                </ListItem>
                                <Divider />

                                <ListItem button className={classes.list}>
                                    <ListItemText>Website Refactoring</ListItemText>
                                </ListItem>
                                <Divider />
                            </div>

                            <Divider style={{background: 'red', color:'red'}} orientation='vertical' />

                            <div style={{ width: '48%' }}>
                               

                                <ListItem button className={classes.list}>
                                    <ListItemText>Full-Stack Developer</ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button className={classes.list} >
                                    <ListItemText  >View my <a href={Resume} > resume</a></ListItemText>
                                     
                                </ListItem>
                                <Divider />

                                <ListItem button  className={classes.list}>
                                    <ListItemText >See my <button onClick={handleCert} >certification</button></ListItemText>
                                </ListItem>
                                <Dialog open={openCerts} onClose={certClose} className={classes.modal}>
                                    <DialogTitle>Certification gained during my web development journey</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>
                                                    <a href='https://www.sololearn.com/Certificate/1014-15919711/pdf/'>HTML5</a>
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>

                                        <Button onClick={certClose} ></Button>
                                        </DialogActions>

                                   
                                </Dialog>
                                <Divider />

                                <ListItem button className={classes.list}>
                                    <ListItemText>Lambda Student</ListItemText>
                                </ListItem>
                                <Divider />


                            </div>
                            
                        </List>

                    </div>
<Divider style={{background:'black'}} orientation='vertical' />
                    <div className={classes.frontEnd}>
                        <div style={{}}>
                            <div style={{ padding: '0%', color: 'black' }}>
                                <p>Primary Languages</p>
                            </div>

                            <Divider />

                            <div style={{ width: '100%', margin: '3% auto', color: 'black', display: 'flex', justifyContent: 'space-evenly' }}>

                                <img className='heartbeat' style={{ width: '6%' }} src={HTML} />

                                <img className='heartbeat' style={{ width: '6%' }} src={CSS} />
                                <img className='heartbeat' style={{ width: '6%' }} src={JS} />
                                <img className='heartbeat' style={{ width: '6%' }} src={REACT} />
                                <img className='heartbeat' style={{ width: '6%' }} src={NODE} />
                                <img className='heartbeat' style={{ width: '6%' }} src={PY} />
                            </div>
                        </div>
                         <Divider />



                        <div style={{ width: '100%', margin: '0 auto', color: 'black' }}>
                            <div>
                                <p>Social Platforms</p>

                            </div>

                            <Divider />

                            <div>
                                <a href='https://www.linkedin.com/in/dapperdave1914/' className={classes.bottomLinks}><Button className={classes.buttons}><LinkedInIcon style={{}} /></Button>
                                </a>

                                <a href='https://www.instagram.com/tapthedap' className={classes.bottomLinks}><Button className={classes.buttons}><InstagramIcon /></Button></a>

                                <a href='https://www.facebook.com/ImodelIspeak15?ref=bookmarks' className={classes.bottomLinks}><Button className={classes.buttons}><FacebookIcon /></Button>
                                </a>
                                <a href='https://github.com/Dlray89' className={classes.bottomLinks}><Button className={classes.buttons}><GitHubIcon /></Button></a>

                            </div>
                             <Divider />


                        </div>

                    </div>

                </div>


            </div>

            <div className={classes.bottomNav}>

                <div className={classes.copyright}>
                    <Link className={classes.bottomLinks}><Button className={classes.buttons}>&copy; Dapthedev</Button></Link>
                </div>



            </div>
        </div>
    )
}

export default Welcome