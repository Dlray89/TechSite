import React from 'react'
import { makeStyles, Button, Typography } from "@material-ui/core"
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    mainContiner: {
        border: 'solid 2px red',
        padding: '1%',
        height: '100vh',
        boxSizing: 'border-box',

    },
    introBox: {
        border: 'solid 2px green',
        width: '90%',
        height: ' 80vh',
        margin: ' 0 auto',
        boxSizing: 'border-box'


    },
    introText: {
        border: 'solid 2px purple',
        width: '15%',


    },

    Nav: {
        border: 'solid 2px blue',
        width: '90%',
        margin: '0 auto',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between'

    },
    bottomNav: {
        border: 'solid 2px blue',
        width: '90%',
        margin: ' 0 auto',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between'
    },
    navContainer: {
        border: 'solid 2px red',
        width: '30%',
        boxSizing: 'border-box',
        display: 'flex'


    },
    navLinks: {
        border: 'solid 2px yellow',
        width: '40%',
        boxSizing: 'border-box',

    },
    socialmedia: {
        border: 'solid  2px red'
    }

}))



const Welcome = () => {
    const classes = useStyles()

    return (
        <div className={classes.mainContiner}>
            <div className={classes.Nav}>

                <div className={classes.introText}>
                    <Link><Button>David L. Ray Jr</Button></Link>
                </div>

                <div className={classes.navContainer}>
                    <Link className={classes.navLinks}><Button>Home </Button></Link>
                    <Link className={classes.navLinks}><Button>Projects</Button></Link>
                    <Link className={classes.navLinks}><Button>Contact</Button></Link>
                </div>




            </div>

            <div className={classes.introBox}>
                Welcome
            </div>

            <div className={classes.bottomNav}>

                <div className={classes.copyright}>
                    <Link><Button>Copyright</Button></Link>
                </div>

                <div className={classes.socialmedia}>
                    <Link><Button>LinkedIn</Button>
                    </Link>
                    <Link><Button>GitHub</Button></Link>
                </div>

            </div>
        </div>
    )
}

export default Welcome