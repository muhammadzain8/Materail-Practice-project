import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import footerLine from '../../assets/Footer Adornment.svg'
import {Grid,Hidden} from '@material-ui/core'
import {Link} from 'react-router-dom'

import {Facebook,Twitter,Instagram} from '@material-ui/icons';

const useStyles=makeStyles(theme=>({
    footer:{
        backgroundColor:theme.palette.common.arcBlue,
        width:"100%",
        zIndex:1302,
        position:'relative',
    },
    imgStyle:{
        width:'20em',
        verticalAlign:'bottom',
        [theme.breakpoints.down('md')]:{
            width:'16em'
        },
        [theme.breakpoints.down('xs')]:{
            width:'10em'
        }
    },
    mainContainer:{
        position:'absolute'
    },
    link:{
        color:'white',
        fontSize:'1rem',
        fontWeight:'bold',
        textDecoration:'none'
    },
    gridItem:{
        margin:'3em',
        [theme.breakpoints.down('md')]:{
            margin:'1em',
            paddingLeft:'5em'
        },
        
    },
    icon:{
        height:'4em',
        width:'4em',
        color:'white',
        [theme.breakpoints.down('md')]:{
            height:'3em',
            width:'3em'
        }
    },
    socialContainer:{
        position:'absolute',
        marginTop:'-6em'
    }
}))

const Footer = ({setValue,setSelectedIndex}) => {
    const classes=useStyles()
    return (
        <footer className={classes.footer}>
            <Hidden smDown>
            <Grid container justify='center'  className={classes.mainContainer}>
                <Grid item className={classes.gridItem} >
                    <Grid container direction='column' spacing={2}>
                        <Grid item component={Link} to='/' onClick={()=>setValue(0)} className={classes.link}>
                            Home
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item component={Link} to='/services' onClick={()=>setValue(3)} className={classes.link}>
                            services
                        </Grid>
                        <Grid item component={Link} to='/customSoftware' onClick={()=>{setValue(3);setSelectedIndex(3)}} className={classes.link}>
                            custom software dev
                        </Grid>
                        <Grid item component={Link} to='/websites' onClick={()=>{setValue(3);setSelectedIndex(3)}} className={classes.link}>
                            websites dev
                        </Grid>
                        <Grid item component={Link} to='/mobileApps' onClick={()=>{setValue(3);setSelectedIndex(3)}} className={classes.link}>
                            mobileApp dev
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction='column' spacing={2}>
                        <Grid item component={Link} to='/contact' onClick={()=>setValue(1)} className={classes.link}>
                            contact
                        </Grid>
                        <Grid item component={Link} to='/about' onClick={()=>setValue(2)} className={classes.link}>
                            about
                        </Grid>
                        <Grid item component={Link} to='/revolution' onClick={()=>setValue(4)} className={classes.link}>
                            revolution
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Hidden>
            <img alt="balck line" src={footerLine} className={classes.imgStyle}/>
            <Grid container justify='flex-end' className={classes.socialContainer} >
                <Grid item component={'a'} href='https://www.facebook.com' rel='noopener noreferrer' target='_blank' >
                    <Facebook color='primary' className={classes.icon} />
                </Grid>
                <Grid item component={'a'} href='https://www.twitter.com' rel='noopener noreferrer' target='_blank' >
                    <Twitter color='primary' className={classes.icon} />
                </Grid>
                <Grid item component={'a'} href='https://www.instagram.com' rel='noopener noreferrer' target='_blank' >
                    <Instagram color='primary' className={classes.icon} />
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer
