import React from 'react'
import {Grid,Button,Hidden,Typography, IconButton} from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import Lottie from 'react-lottie'

import backArrow from '../../assets/backArrow.svg'
import forwardArrow from '../../assets/forwardArrow.svg'
import lightbulb from '../../assets/bulb.svg'
import cash from '../../assets/cash.svg'
import stopwatch from '../../assets/stopwatch.svg'
import animationData from '../../animations/documentsAnimation/data'
import animationData2 from '../../animations/scaleAnimation/data'
import roots from '../../assets/root.svg'


const useStyles=makeStyles((theme)=>({
    mainContainer:{
        padding:'2em 4em 10em 4em',
        [theme.breakpoints.down('md')]:{
            padding:'1em 2em 5em 2em',
        },
        [theme.breakpoints.down('xs')]:{
            padding:'0.1em 0.5em 2em 0.5em'
        }
    },
    heading:{
        maxWidth:'40em'
    },
    arrowContainer:{
        marginTop:'0.5em'
    },
    iconContainer:{
        maxWidth:'40em',
        margin:'8em',
        [theme.breakpoints.down('md')]:{
            margin:'4em'
        }
    },
    icon:{
        width:'3em',
        margin:'1em',
        marginTop:'5em'
    },
    itemContainer:{
        maxWidth:'35em',
        [theme.breakpoints.down('md')]:{
            width:'100%',
        }
    }
}))

const CustomSoft = () => {
    const classes=useStyles()
    const theme=useTheme() 
    const matches=useMediaQuery(theme.breakpoints.down('md'))
    const matchesSM=useMediaQuery(theme.breakpoints.down('sm'))

    const defaultOptions={
        loop:true,
        autoplay:false,
        animationData:animationData,
        rendererSettings:{
            preserveAspectRatio:'xMidYMid slice'
        }
    }
    const defaultOptions2={
        loop:true,
        autoplay:false,
        animationData:animationData2,
        rendererSettings:{
            preserveAspectRatio:'xMidYMid slice'
        }
    }
    

    return (
        <>
            <Grid container diraction='column' className={classes.mainContainer}>
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
                            <Typography variant='h2' > Custom software development </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='body1' paragraph>  dasd adsd info about the category info about the category info about the category info about the category info about the category
                                info about the category < br />info about the category info about the category info about the category <br/>  info about the category info about the category info about the category info about the category info about the category
                                info about the category info about the dasd dasda <br /> category info abo dasd dsaut the category info about the category  info about the category info about the category info about the category info about the category info about the category
                                info about the category info about the category info about the category info about the category</Typography>
                        </Grid>
                    </Grid>
                    <Hidden smDown>
                        <Grid item className={classes.arrowContainer} component={Link} to='/websites' >
                            <IconButton style={{backgroundColor:'transparent'}} >
                                <img src={forwardArrow} alt='forword to services' />
                            </IconButton>                    
                        </Grid>
                    </Hidden>
                </Grid>

                <Grid item container direction='row' justify='center'>
                    <Grid item container direction='column' md alignItems='center' className={classes.iconContainer}  >
                        <Grid item>
                            <Typography variant='h4'> Save Energy </Typography>
                        </Grid>
                        <Grid item>
                            <img className={classes.icon} src={lightbulb} alt='lightbulb' />
                        </Grid>
                    </Grid>
                    <Grid item container direction='column' md alignItems='center' className={classes.iconContainer}>
                        <Grid item>
                            <Typography variant='h4'> Save Time </Typography>
                        </Grid>
                        <Grid item>
                            <img className={classes.icon} src={stopwatch} alt='stopwatch' />
                        </Grid>
                    </Grid>
                    <Grid item container direction='column' md alignItems='center' className={classes.iconContainer}>
                        <Grid item>
                            <Typography variant='h4'> Save Money </Typography>
                        </Grid>
                        <Grid item>
                            <img className={classes.icon}  src={cash} alt='cash' />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container direction={matches?'column':'row'} alignItems={matches?'center':undefined} justify='space-around'> 
                    <Grid item container className={classes.itemContainer} >
                        <Grid item container direction='column' md>
                            <Grid item>
                                <Typography variant='h4'> Digital Document data </Typography>
                            </Grid>
                            <Grid item>
                            <Typography variant='body1' paragraph>  dasd adsd info about the category info about the category info about the category info about the category info about the category
                                info about the category < br />info about the category info about the category info about the category <br/>  info about the category info about the category info about the category info about the category info about the category
                                info about the category info about the dasd dasda <br /> category info abo dasd dsaut the category info about the category  info about the category info about the category info about the category info about the category info about the category
                                info about the category info about the category info about the category info about the category</Typography>                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options={defaultOptions}  style={{maxWidth:250,maxHeight:250,minHeight:210,marginRight:'15em'}} />
                    </Grid>
                    <Grid item container className={classes.itemContainer} justify={matchesSM?'center':undefined}>
                        <Grid item md>
                            <Lottie options={defaultOptions2} style={{maxWidth:250,maxHeight:250}}/>
                        </Grid>
                        <Grid item container direction='column' md>
                            <Grid item>
                                <Typography variant='h4' align='right'> Scale </Typography>
                            </Grid>
                            <Grid item>
                            <Typography variant='body1' align='right' paragraph>  dasd adsd info about the category info about the category info about the category info about the category info about the category
                                info about the category <br/>  info about the category info about the category info about the category info about the category info about the category
                                info about the category info about the dasd dasda </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container direction='row'>
                    <Grid item contaienr direction='column' style={{textAlign:'center'}}  >
                        <Grid item >
                            <img src={roots} alt='tree with roots'  style={{height:'30em',width:'30rem'}}/>
                        </Grid>
                        <Grid item align='center'>
                            <Typography variant='h4'  gutterBottom > Root Cause analysis</Typography>
                            <Typography variant='body1' paragraph>  dasd adsd info about the category info about the category info about the category info about the category info about the category
                                info about the categorut the category
                                info about the category info about the dasd dasda </Typography>
                            <Typography variant='body1'  paragraph>  dasd adsd info about the category info about the category info about the category info about the category info about the category
                            info about the category <br/>  info about the category info about the category info about the category info about the category info about the category
                            info about the category info about the dasd dasda </Typography>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}

export default CustomSoft
 