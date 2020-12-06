import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, Badge, Button, Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle, TextField, Divider, List, ListItem, ListItemText } from "@material-ui/core"
import Contactops from '../../container/AJAX_Handling/contact_ops'

import LocationCityIcon from '@material-ui/icons/LocationCity';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { pictureData } from '../../container/aboutpicdata'
import './about.css'

import background from '../../images/aboutBackground.jpg'

const useStyles = makeStyles((theme) => ({
    button: {
        fontFamily: 'Cormorant, serif;',
        width:'95%',


        '&:hover': {
            background: 'linear-gradient(to right, #2980b9, #2c3e50)',
            color: 'white'
        }
    },
    modalText: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'column',

        width: '100%'

    },
    info: {
        display: 'flex',
        flexDirection: 'row',

        width: '100%',

    },
    text: {
        border: 'solid 1px black',
        margin: '0 auto',
        fontSize: '12px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        [theme.breakpoints.down('sm')]: {
            fontSizing: '12px',
            width: '90%',
            textAlign: 'center',
            margin: '0 auto'
        }
    },
    inputContainer: {

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        margin: '2% auto',
        width: '100%'
    },
    input: {
        margin: '2% auto',
        width: '100%',

    },
    buttonContainer: {

        display: 'flex',
        flexDirection: 'column'
    },
    modalButton: {
        background: 'black',
        color: 'white',
        width: '100%',
        margin: '1% auto',
        '&:hover': {
            background: 'grey',
            color: 'white'
        }
    },
    submittedButton: {

        width: '100%',
        margin: '1% auto',
        '&:hover': {
            background: 'black',
            color: 'white'
        }

    },
    modalTitle: {
        textAlign: 'center',
        background: 'black',
        color: 'white',
        fontFamily: 'Cormorant, serif;'
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        margin:'1% auto',
        textAlign:'center',
        border:'solid 1px black',
        width:'100%',
        background:'linear-gradient(to right, #2980b9, #2c3e50)',
        [theme.breakpoints.down('xs')]:{
            width:'100%',
            height:'100%'

        }
    },
    
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    aboutContainer: {
        border: 'solid 1px black',
        margin: '0% auto',
        fontFamily: 'Cormorant, serif;',

    },
    aboutContainer2: {
        justifyContent: 'space-evenly',
        display: 'flex',
        width: '80%',
        margin: '0% auto',
        
        color:'white',
        [theme.breakpoints.down('xs')]:{
            
            fontSize:'18px',
            width:'100%'
        }
    },
    aboutContainer3: {
        border: 'solid 1px black',
        background: 'grey',
        margin: '1% auto',
       
    },
    aboutTitle: {
        color: 'black',
        [theme.breakpoints.down('xs')]:{
            
            fontSize:'18px'
        }


    },
    aboutText: {
        border: 'solid 1px black',
        width: '100%',
        padding: '1%',
        textAlign: 'center',
        color: 'white',
        background: ' #2980b9',
        fontSize:'20px',
        [theme.breakpoints.down('xs')]:{
            
            fontSize:'15px',
            padding:'3%',
            textAlign:'center'
        }
    },
    pastcareers: {
        border: 'solid 1px black',
        width: '55%',
        background:'linear-gradient(to right, #2980b9, #2c3e50)',
        margin:'2% 0',
        [theme.breakpoints.down('xs')]:{
            
            fontSize:'15px',
            width:'95%',
            margin:'2% auto'
        }
    },
    careerText: {
        color: 'white',
        textAlign: 'center',

    },
    careerP: {
        fontFamily: 'Cormorant, serif;',
    },
    status: {
        border: 'solid 1px black',
        width: '45%',
        background:'black',
    },
    specText: {
        fontFamily: 'Cormorant, serif;',
        color: 'white'

    },
    specTitle: {
        fontFamily: 'Cormorant, serif;',
        color: 'white'
    },
    img: {

        '&:hover': {
            position: 'relative',
            top: '-25px',
            left: '-35px',
            width: '500px',
            height:' auto',
            display: 'block',
            zIndex: '999'

    }
},
link:{
    width:'100%',
    textDecoration:'none'
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
    fontFamily:'Cormorant, serif',
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
BN_link:{
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
rootContainer:{
    overflowX:'hidden',
    background:'white'

},

header: {
    fontSize: '20px', 
    background: 'black', 
    padding: '1%', 
    backgroundImage:'url('+ background +')',  backgroundPosition: 'start',
        backgroundPositionY: '50%',
        backgroundPositionX: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'filled',
        backgroundSize: '100%', height:'30vh',
        [theme.breakpoints.down('xs')]:{
        }

},

headerText:{
    color: 'white', 
    fontFamily: 'Cormorant, serif;', 
    background:'rgba(27, 20, 17, 0.8)', 
    width:'20%', 
    margin:'7% auto', 
    padding:'1%' ,
    [theme.breakpoints.down('xs')]:{
        
        width:'50%',
        margin:'15% auto'
    }
},
GL_content:{
    width:'20%', 
    margin:'0 auto', 
    border:'solid 1px white',
    height:'50vh',
    [theme.breakpoints.down('xs')]:{
        display:'flex',
        width:'18%',
        height:'20vh'
      
    }
},
pic:{
    width:'100%',
    [theme.breakpoints.down('xs')]:{
        
        width:'100%',
        height:'100%'
    }
},
bottomtext:{
    borderBottom:'solid 1px black',
    borderTop:'solid 1px black', 
    padding:'2%', color:'white', 
    background:'#2980b9', 
    margin:'0%',
    fontFamily:'Cormorant, serif',
    fontSize:'20px',
    [theme.breakpoints.down('xs')]:{
        
        width:'100%',
        fontSize:'15px',
        textAlign:'center'
        
    }
}
}))

const interest = [
    {
        id: 1,
        name: 'Comedy'
    },
    {
        id: 2,
        name: 'Anime'
    },
    {
        id: 3,
        name: 'Nature Walking'
    },
    {
        id: 4,
        name: 'Hoodies and Cardigans'
    },
    {
        id: 5,
        name: 'Reading'
    },

]






const About = () => {
    const initContact = {
        id: null,
        fullname: '',
        phonenumber: '',
        email: ''
    }


    const classes = useStyles()

    const [open, setOpen] = useState(false)
    const [count, setCount] = useState(pictureData)


    const [openCerts, setOpenCerts] = useState(false)
    const [contacts, setContacts] = useState(initContact)
    const [submitted, setSubmitted] = useState(false)

    const handleLikes = () => {
        setCount({
            count: count + 1
        })
        console.log(count)
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



    return (
        <div className={classes.rootContainer} >
            <div className={classes.header}>
                <p className={classes.headerText}>About Me</p>
            </div>


            <Divider />

            <div className='navbar'>
                <div className='linksContainer' >
                    <Link className={classes.link} to='/welcome'><Button variant='contained' className={classes.button} >Home</Button></Link>
                    <Link className={classes.link} to='/projects' ><Button variant='contained'  className={classes.button} >Projects</Button></Link>
                    <Link className={classes.link}><Button variant='contained'  className={classes.button} onClick={handleOpen}>Contact</Button></Link>
                    <Dialog open={open} onClose={handleClose} className={classes.modal}>
                        <DialogTitle className={classes.modalTitle}  >
                            <p style={{ fontFamily: 'Cormorant, serif;' }}>Need a website? or Do you want to network? Drop your information in the form below and lets network. Look forward to speaking with you.</p>
                        </DialogTitle>
                        <DialogContent className={classes.modalInner}>
                            <DialogContentText className={classes.modalText}>
                                <div className={classes.info}>
                                    <p className={classes.text}><LocationCityIcon /> Marietta, GA</p>
                                    <p className={classes.text}><PhoneIcon /> 229.735.2351</p>
                                    <p className={classes.text}><EmailIcon /> dlrayjr89@gmail.com</p>


                                </div>

                                <Divider style={{ background: 'black' }} />
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
                                <div style={{ width: '90%' }} >
                                    <Button variant='contained' className={classes.submittedButton} onClick={newContact}>Sumbit</Button>
                                </div>
                            ) : (
                                    <div style={{ width: '90%' }}>
                                        <Button variant='contained' className={classes.modalButton} onClick={savecontact}>Send</Button>

                                        <Button variant='contained' className={classes.modalButton} onClick={handleClose}>Cancel</Button>
                                    </div>
                                )}

                        </DialogActions>
                    </Dialog>
                </div>
            </div>

            <div className={classes.root}>
                    {pictureData.map((tile) => (
                        <div className={classes.GL_content} key={tile.img}>
                            <img className={classes.pic}  src={tile.img} alt={tile.title} />
                        </div>
                    ))}
            </div>

            <div className={classes.aboutContainer}>
                <h2 className={classes.aboutTitle}>Hi, Im Dave</h2>
                <div className={classes.aboutText} >
                    <p>I am a full-stack engineer born and raised out of Detroit, Michigan. I’m a man of growth and I always believed in the saying 'No Struggle, No progress'. Going through the struggle with any problem provides us a lesson about life and the path we are currently on. That’s why im always willing to challenge my creative and technical capabilities to further my knowledge not only as a human being but as a developer too. The sky is the limit and we ourselves have the power to walk the path that will take us to the reality of our dreams. My path is simple to achieve my dreams of helping people walk the path using the latest and greatest technology. </p>
                </div>


                <div className={classes.aboutContainer2} >
                    <div className={classes.pastcareers} >

<List>
    <h4 style={{ margin:'0% auto', padding:'3%',  borderBottom:'solid 1px white'}}>Interest</h4>

    {interest.map(item => (
        <div>

        <ListItem style={{ height: '7vh' }} button>
            <ListItemText className={classes.careerText}><p style={{fontFamily:'Cormorant, serif'}}>{item.name}</p></ListItemText>
        </ListItem>
        </div>
    ))}
</List>
</div>
  </div>
            </div>

           

            <div className={classes.bottomtext}>
            Soon will be starting a blog series on my journey into software development in hopes to inspire other newcomer developers that anything is possible. You just have to put the time and dedication towards it and have a strong WHY in order to keep going through the hard times.
           </div>
            <div className={classes.bottomNav}>
                <div className={classes.navTitle}>
                    &copy; A dapthedev Design 2020
                </div>

                <div className={classes.bn_Links}>
                    <Link to='/welcome' className={classes.BN_link}>Home</Link>
                    <Link to='/aboutme' className={classes.BN_link}>About</Link>
                </div>

                <div className={classes.navIcons}>
                    <a href='https://www.linkedin.com/in/dapperdave1914/'><Button className={classes.social} ><LinkedInIcon /> </Button></a>
                    <a href='https://github.com/Dlray89'><Button className={classes.social} ><GitHubIcon /></Button></a>
                    <a href='https://www.instagram.com/tapthedap'><Button className={classes.social} ><InstagramIcon /></Button></a>
                    <a href='https://www.facebook.com/ImodelIspeak15?ref=bookmarks'><Button className={classes.social}><FacebookIcon /></Button></a>
                </div>
            </div>
        </div>
    )
}

export default About