import React from 'react'
import { Link } from 'react-router-dom'
import {makeStyles, Button} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        border: 'solid 2px red',
        boxSizing: 'border-box',
    },
    projectContainer: {
        border: 'solid 2px blue',
        width: '90%',
        margin: '0 auto'
    },
    Row1: {
        border: 'solid 2px yellow',
        display:'flex',
        margin: '0 auto'
    },
    P1: {
        border: 'solid 2px green',
        width: '30%',
        height: '35vh',
        display: 'flex'
    },
    P2: {
        border: 'solid 2px blue',
        width: '30%'
    },
    btnContainer: {
        border: 'solid 2px blue',
        width: '80%',
        height: '35vh'
    },
    title: {
        border: 'solid 2px purple',
        width: '90%',
        margin: '0 auto'
    }
}))


const Projects = () => {
    const classes = useStyles()

    return(
        <div className={classes.mainContainer}>
            <div className={classes.title}>
               <div>
                   <p>
                       Project
                   </p>
               </div>
               <div>
                <Link to='/'><Button>Home</Button></Link>
               <Link><Button>Contact</Button></Link>
               </div>
               
            </div>

            <div className={classes.projectContainer}>

                <div className={classes.Row1}>
                    <div className={classes.P1}>
                        <p>
                            Sauti Africa
                        </p>
                    </div>

                    <div className={classes.btnContainer}> 

                    <p>
                        Description
                    </p>
                        <Button>Website</Button>
                        <Button>Code Source</Button>
                    </div>
                    
                </div>

                <div className={classes.Row1}>

                    <div className={classes.btnContainer}> 

                    <p>
                        Description
                    </p>
                        <Button>Website</Button>
                        <Button>Code Source</Button>
                    </div>

                    <div className={classes.P1}>
                        <p>
                            Rick and Morty
                        </p>
                    </div>
                    
                </div>

                <div className={classes.Row1}>

                    <div className={classes.P1}>
                        <p>
                            Conway Game of Life
                        </p>
                    </div>

                    <div className={classes.btnContainer}> 

                    <p>
                        Description
                    </p>
                        <Button>Website</Button>
                        <Button>Code Source</Button>
                    </div>

                    
                    
                </div>

                
            </div>
        </div>
    )
}

export default Projects