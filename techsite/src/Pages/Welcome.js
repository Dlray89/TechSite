import React, {useState} from 'react'
import { makeStyles, Button, Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle, Divider, TextField, List, ListItem, ListItemText, Typography } from "@material-ui/core"
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub';
import Contactops from '../crudhandle/contact_ops'
import { Link } from 'react-router-dom'
import DavidPic from "../images/DavidLandscape.jpg"
const useStyles = makeStyles((theme) => ({
    mainContiner: {
        padding: '1%',
        height: '100vh',
        boxSizing: 'border-box',
        background: '#3a6073',
        


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
        display: 'flex'
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
        width: '30%',
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
        color: 'white'
    },
    bottomLinks: {
        textDecoration: 'none'
    },
    introP: {
        padding:'2%',
        boxSizing:'border-box',
        marginBottom:'5%',
        testAlign:'center'
        
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
    greetingBox:{
        width: '100%',
        backgroundImage: 'url('+ DavidPic +')',
        backgroundPosition: 'bottom',
        backgroundPositionY:'85%',
        backgroundRepeat:'no-repeat',
        backgroundSize:'100%'
    },
    greeting: {
        
        background: '#3a6073 ',
        width: '10%',
        position: 'relative',
        top: '60%',
        color:'white',
        textAlign:'center'

    },
    aboutTextContainer:{
    width: '50%',
    color: 'white',
    fontSize: '1rem',
    padding: '',
    boxSizing: 'border-box',
    background: 'linear-gradient(to bottom, #16222a, #3a6073)',

    },
    aboutTitle: {
        padding:'0.6%',
        textAlign:'center'
    },
    backendSkills:{
    width: '50%',
    textAlign: 'center',
    color: 'white',
    background: 'linear-gradient(to left, #16222a, #3a6073)'
    },
    backendSkillList:{
        textAlign:'center'
    },
    frontEnd:{
    width: '50%',
    textAlign: 'center',
    fontSize: '16px',
    color: 'white',
    background: 'linear-gradient(to right, #16222a, #3a6073)'
    },
    Davidpicture:{
        width:'20vw'
    },
    ListItems: {
        textAlign:'center'
    }

}))



const Welcome = () => {

    const initContact = {
        id: null,
        fullname:'',
        phonenumber:'',
        email:''
    }

    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [contacts, setContacts] = useState(initContact)
    const [submitted, setSubmitted] = useState(false)

    const handleOpen = () => {
        setOpen(true)

    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleContacts = e => {
        const {name, value} = e.target
        setContacts({...contacts, [name]: value })
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
            <div className={classes.Nav}>

                <div className={classes.introText}>
                    <Link className={classes.introTextLink}><Button className={classes.buttons}>Full Stack developer</Button></Link>
                </div>

                <div className={classes.navContainer}>
                    <Link className={classes.navLinks}><Button className={classes.buttons}>Home </Button></Link>
                    <Link to='/projects' className={classes.navLinks}><Button className={classes.buttons}>Projects</Button></Link>
                    <Link className={classes.navLinks} onClick={handleOpen}><Button className={classes.buttons}>Contact</Button></Link>
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
                                      type='text' 
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

            <div className={classes.introBox}>
                <div className={classes.intro}>
                    <div className={classes.greetingContainer}>
                        <div className={classes.greetingBox}>
                            
                            <p className={classes.greeting}>HI IM DAVE</p>
                        </div>


                    </div>





                </div>


                <div className={classes.introTwo}>
                    <div className={classes.experience}>

                        <div className={classes.frontEnd}>
                            <List className='FEskills'>
                                
                                <Divider className={classes.divider} />
                                <ListItem button>
                                    <ListItemText className={classes.ListItems} >Front-End Development</ListItemText>
                                </ListItem>
                                <Divider className={classes.divider} />

                                <ListItem button>
                                    <ListItemText className={classes.ListItems}> Design Pattern</ListItemText>
                                </ListItem>
                                <Divider className={classes.divider} />
                                <ListItem button>
                                    <ListItemText className={classes.ListItems}> State Management</ListItemText>
                                </ListItem>
                                <Divider className={classes.divider} />

                                <ListItem button>
                                    <ListItemText className={classes.ListItems}>Object-Oriented Programming</ListItemText>
                                </ListItem>
                                <Divider className={classes.divider} />

                            </List>
                        </div>

                        <div className={classes.aboutTextContainer}>
                            <p className={classes.aboutTitle}>Welcome to my house!</p>
                            <Divider className={classes.divider} />
                            <p className={classes.introP}>
                                A house of creativity, passion, and ambition. I’m dedicated to bringing your vision to life using the latest and greatest technology. I create develop things from websites to web applications, so tell me about your vision and together we will bring it to life. 
                            </p>
                        </div>

                        <div className={classes.backendSkills}>
                            <List className={classes.backendSkillList}>
                                
                                <Divider className={classes.divider} />
                                <ListItem button>
                                    <ListItemText className={classes.ListItems}>API design</ListItemText>
                                </ListItem>
                                <Divider className={classes.divider} />

                                <ListItem button>
                                    <ListItemText className={classes.ListItems}> Front-End and Back-End Testing </ListItemText>
                                </ListItem>
                                <Divider className={classes.divider} />
                                <ListItem button>
                                    <ListItemText className={classes.ListItems}> Security </ListItemText>
                                </ListItem>
                                <Divider className={classes.divider} />
                                <ListItem button>
                                    <ListItemText className={classes.ListItems}> Database Development </ListItemText>
                                </ListItem>
                                <Divider className={classes.divider} />


                            </List>

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

export default Welcome