import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, Button, Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle, TextField, Divider, Typography, Card, CardHeader } from "@material-ui/core"

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

    { "id": 2, name: 'prohash', details: "ProHash is a project management application that will allow you create projects and tasks to get you closer to your short and long term goals. You able to create an account, create, delete and update your projects. Stay organized and focus to your dreams and accomplishements.", link: "https://prohash.vercel.app/", githublink: "https://github.com/Dlray89/ProTask-RESTFul-API", tech_stack: "React - Material-UI - NodeJS", img: Prohash },

    { "id": 3, name: 'Conway', details: "The Game of Life is not your typical computer game. It is a 'cellular automaton', and was invented by Cambridge mathematician John Conway.This game became widely known when it was mentioned in an article published by Scientific American in 1970. It consists of a collection of cells which, based on a few mathematical rules, can live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the course of the gam", link: "https://the-conway-game-of-life.vercel.app/", githublink:'https://github.com/Dlray89/The-Conway_game-of_life', tech_stack: "React - Javascript - Material-UI", img:Conway },
    {
        "id": 4, name:"notes.IO", details:"A terminal note-taking feature to take notes and save them to a JSON file. You can create, delete, see a listing of all your notes or read a specific one. It's your choice! Typing commands in the terminal can get out of control. There will be a time you may forget specific commands you did hours ago but have no worries notes.IO got your back.",tech_stack: "Node.JS", img:Coming_Soon
    }
    
]

const useStyles = makeStyles((theme) => ({
    button: {

        '&:hover': {
            background: 'black',
            color:'white'
        }
    }
}))

const Projects = () => {

    const classes = useStyles()

    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    
    const [openSauti, setOpenSauti] = useState(false)

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

            <div>
                <p>Project Board</p>
            </div>


            <Divider />

            <div className='navbar'>
                <div className='linksContainer' >
                    <Link to='/welcome'><Button className={classes.button} >Home</Button></Link>
                    <Link><Button className={classes.button} >About</Button></Link>
                    <Link><Button className={classes.button}>Contact</Button></Link>
                </div>

                


            </div>
            <Divider />

            <div className='projects'  >
                {searchResults.map(result => (
                    <div className='roll-in-left' variant="outlined">
                        <Divider />
                        <div className='projectContent' >
                            

                            <p className='text'>{result.name} <br /> {result.tech_stack}</p>

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
            <Divider />
            <div style={{display:'flex', justifyContent:'space-between', width:'98%',  margin:' 0 auto'}}>
                <div style={{}}>
                    &copy; 2020 DAPTHEDEV
                </div>

                <div style={{width:'20%', display:'flex', justifyContent:'space-evenly'}}>
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