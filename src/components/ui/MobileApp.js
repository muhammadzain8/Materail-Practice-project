import React from 'react'
import {Grid,Button,Hidden,Typography, IconButton} from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import Lottie from 'react-lottie'

import backArrow from '../../assets/backArrow.svg'
import forwardArrow from '../../assets/forwardArrow.svg'

import animationData from '../../animations/integrationAnimation/data'
import swiss from '../../assets/swissKnife.svg'
import access from '../../assets/extendAccess.svg'
import engagment from '../../assets/increaseEngagement.svg'


const useStyles=makeStyles(theme=>({
    mainContainer:{
        padding:'1em 3em 8em 3em',
        [theme.breakpoints.down('md')]:{
            padding:'1em 2em 5em 2em',
        },
        [theme.breakpoints.down('xs')]:{
            padding:'0.5em 1em 2em 1em'
        }
    },
    heading:{
        maxWidth:'45em'
    },
    arrowContainer:{
        marginTop:'0.5em'
    },
    lottie:{
        marginLeft:'auto',
        [theme.breakpoints.down('sm')]:{
            marginRight:'10em'
        }
    },
    icon:{
        margin:'2em',
        width:'16em',
        [theme.breakpoints.down('md')]:{
            width:'10em',
            alignItems:'center',
        }
    },
    iconContainer:{
        [theme.breakpoints.down('xs')]:{
            marginTop:'5em'
        }
    },
    context:{
        [theme.breakpoints.down('xs')]:{
            justify:'start',
            padding:'1em',
            margin:0
        }
    }
}))
const MobileApp = () => {
    const classes=useStyles()
    const theme=useTheme() 
    const matches=useMediaQuery(theme.breakpoints.down('md'))
    const matchesSM=useMediaQuery(theme.breakpoints.down('sm'))
    const matchesXS=useMediaQuery(theme.breakpoints.down('xs'))

    const defaultOptions={
        loop:true,
        autoplay:false,
        animationData:animationData,
        rendererSettings:{
            preserveAspectRatio:'xMidYMid slice'
        }
    }
    
    return (
        <>
            <Grid container diraction='column' className={classes.mainContainer} >
                <Grid item container direction='row'>
                    <Hidden smDown>
                        <Grid item className={classes.arrowContainer} component={Link} to='/services' style={{marginRight:'1em',marginLeft:'-2.5em'}}>
                            <IconButton style={{backgroundColor:'transparent'}} >
                                <img src={backArrow} alt='back to services' />
                            </IconButton>
                        </Grid>
                    </Hidden>
                    <Grid item container direction='column' className={classes.heading}>
                        <Grid item>
                            <Typography variant='h2' > MobileApp development </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='body1' paragraph>  dasd adsd info about the category info about the category info about the category info about the category info about the category
                                info about the category < br />info about the category info about the category info about the category <br/>  info about the category info about the category info about the category info about the category info about the category
                                info about the category info about the dasd dasda <br /> category info abo dasd dsaut the category info about the category  info about the category info about the category info about the category info about the category info about the category
                                info about the category info about the category info about the category info about the category</Typography>
                        </Grid>
                    </Grid>
                    <Hidden smDown>
                        <Grid item className={classes.arrowContainer} component={Link} to='/customSoftware' style={{marginLeft:'auto'}}>
                            <IconButton style={{backgroundColor:'transparent'}} >
                                <img src={forwardArrow} alt='forword to services' />
                            </IconButton>                    
                        </Grid>
                    </Hidden>
                </Grid>
            </Grid>

            <Grid container direction='row' className={classes.mainContainer} >
                <Grid item container className={classes.contentContainer} >
                    <Grid item container className={classes.context} style={{width:'25em',marginLeft:matchesSM?'2em':undefined}} >
                        <Grid item>
                            <Typography variant='h2' > Integration </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='body1' paragraph>  dasd adsd info about the category info about the category info about the category info about the category info about the category
                                <br />   the category
                                info about the category info about the category info about the category info about the category</Typography>
                        </Grid>
                    </Grid>
                    <Grid item  className={classes.lottie}>
                        <Lottie options={defaultOptions}  style={{maxWidth:290,maxHeight:360,minHeight:200}} />
                    </Grid>
                    <Grid item container direction='column' className={classes.context} style={{width:'25em',marginLeft:matches?'2em':'auto',marginRight:matchesSM?'5.5em':undefined}} >
                        <Grid item>
                            <Typography variant='h2' > Plateform support </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='body1' paragraph>  dasd adsd info about the category info about the category info about the category info about the category info about the category
                                <br />  e category
                                info about the category info about the category info about the category info about the category</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        <Grid container direction='row' justify='space-evenly' className={classes.mainContainer} style={{textAlign:'center'}} >
            <Grid item container direction='column' sm={4} xs={12} className={classes.iconContainer}> 
                <Grid item>
                    <Typography variant='h4' direction='column' md style={{textSize:'5em'}} > Extend Functionality </Typography>
                </Grid>
                <Grid item>
                    <img className={classes.icon} src={swiss} alt='swiss knife' /> 
                </Grid>
            </Grid>
            <Grid item container direction='column' sm={4} xs={12} className={classes.iconContainer}>
                <Grid item>
                    <Typography variant='h4' direction='column' md> Extend Access </Typography>
                </Grid>
                <Grid item>
                    <img className={classes.icon} src={access} alt='swiss knife' /> 
                </Grid>
            </Grid>
            <Grid item container direction='column' sm={4} xs={12} className={classes.iconContainer} >
                <Grid item>
                    <Typography variant='h4' direction='column' md> increase Engagement</Typography>
                </Grid>
                <Grid item >
                    <img className={classes.icon} src={engagment} alt='swiss knife' /> 
                </Grid>
            </Grid>
        </Grid>

        </>
    )
}

export default MobileApp
