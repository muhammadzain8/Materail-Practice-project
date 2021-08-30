import React from 'react'
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import Lottie from 'react-lottie'
import animationData from '../../animations/landinganimation/data'
import customSoftwareIcon from '../../assets/Custom Software Icon.svg'
import moblieIcon from '../../assets/mobileIcon.svg'
import websiteIcon from '../../assets/websiteIcon.svg'
import infoBackground from '../../assets/infoBackground.svg'
import estimateBackground from '../../assets/background.jpg'
import mobileBackground from '../../assets/mobileBackground.jpg'

import {Grid,Button,Typography,Card,CardContent} from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles';
import revolutionbackground from '../../assets/repeatingBackground.svg'
 
const useStyles=makeStyles(theme=>({
    animation:{
        maxWidth:'50em',
        minWidth:'21em',
        marginTop:'2em',
        marginLeft:'10%'
    },
    btnStyle:{
        backgroundColor:theme.palette.common.arcOrange,
        height:45,
        width:150,
        borderRadius:50,
        color:'white',
        marginRight:20,
        "&:hover":{
            backgroundColor:theme.palette.secondary.light
        }
    },
    icon:{
        marginLeft:'1em',
        [theme.breakpoints.down('xs')]:{
            marginLeft:0
        }
    },
    servicesContainer:{
        marginTop:'12em',
    },
    revolutionbackground:{
        backgroundImage:`url(${revolutionbackground})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        height:'100%',
        width:'100%'
    },
    revolutionCard:{
        position:'absolute',
        boxShadow:theme.shadows[10],
        borderRadius:15,
        padding:'10em',
        [theme.breakpoints.down('sm')]:{
            padding:'8em 0',
            borderRadius:0,
            width:'100%'
        }
    },
    infoBackground:{
        backgroundImage:`url(${infoBackground})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        height:'100%',
        width:'100%'
    },
    estimateBackground:{
        backgroundImage:`url(${estimateBackground})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundAttachment:'fixed',
        backgroundRepeat:'no-repeat',
        height:'100%',
        width:'100%',
        [theme.breakpoints.down('sm')]:{
            backgroundImage:`url(${mobileBackground})`,   
        }
    }

}))

const Home = (props) => {
    const {setValue,setSelectedIndex}=props
    const classes=useStyles()
    const theme=useTheme()
    const matches=useMediaQuery(theme.breakpoints.down('sm'))

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
        <Grid container direction='column' className={classes.bodyContainer}>
            {/*     Home section  */}
            <Grid item >
                <Grid container justify='flex-end' alignItems='center' direction='row'>
                    <Grid sm item > 
                        <Typography variant='h2' align='center'> Development </Typography>
                        <Grid container justify='center' style={{marginTop:'1em'}}>
                            <Grid item>
                                <Button className={classes.btnStyle} component={Link} to='/estimate' variant='contained' > Estimate </Button>
                            </Grid>
                            <Grid item>
                                <Button className={classes.btnStyle} component={Link} to='/revolution' variant='contained' >  Revolution  </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>
                        <Lottie options={defaultOptions}  />
                    </Grid>
                </Grid> 
            </Grid>

            {/*  custom Software  */}
            <Grid item >
                <Grid container direction='row' justify={matches ? 'center' : undefined } className={classes.servicesContainer} >
                    <Grid item style={{marginLeft:'5em'}}>
                        <Typography variant='h4'>
                                Custom software development
                        </Typography>
                        <Typography variant='subtitle1'>
                            Save time, Save money , Save energy
                        </Typography>
                        <Typography variant='subtitle1'>
                            complete digital solution , zain,sonu,zain
                        </Typography>
                        <Button variant='contained' component={Link} to='/customSoftware' className={classes.btnStyle} > Learn more </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt='custom software icon' src={customSoftwareIcon} />
                    </Grid>
                </Grid>
            </Grid>

            {/*  Mobile app dev  */}
               <Grid item >
                <Grid container direction='row' justify={matches?'center':'flex-end'}  >
                    <Grid item style={{marginRight:'2em'}}>
                        <Typography variant='h4'>
                                Mobile App development
                        </Typography>
                        <Typography variant='subtitle1'>
                            Save time, Save money , Save energy
                        </Typography>
                        <Typography variant='subtitle1'>
                            complete digital solution , zain,sonu,zain
                        </Typography>
                        <Button variant='contained' component={Link} to='/mobileApps' className={classes.btnStyle} > Learn more </Button>
                    </Grid>
                    <Grid item >
                        <img style={{marginRight:matches ? 0 : '5em'}} alt='custom software icon' src={moblieIcon} />
                    </Grid>
                </Grid>
            </Grid>

    {/*  Website  dev  */}
            <Grid item >
                <Grid container direction='row' justify={matches ? 'center' : undefined } className={classes.servicesContainer} >
                    <Grid item style={{marginLeft:'5em'}}>
                        <Typography variant='h4'>
                                website development
                        </Typography>
                        <Typography variant='subtitle1'>
                            Save time, Save money , Save energy
                        </Typography>
                        <Typography variant='subtitle1'>
                            complete digital solution , zain,sonu,zain
                        </Typography>
                        <Button variant='contained' component={Link} to='/websites' className={classes.btnStyle} > Learn more </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} alt='custom software icon' src={websiteIcon} />
                    </Grid>
                </Grid>
            </Grid>

        {/*  revolution block  */}
            <Grid item>
                <Grid container style={{height:'100em',marginTop:'5em'}} justify='center' alignItems='center'>
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid container direction='column' style={{textAlign:'center'}}>
                                <Grid item>
                                    <Typography variant='h2' gutterBottom>
                                        card hedding defied here
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant='subtitle1'>
                                        card description defined here 
                                    </Typography>
                                    <Button variant='contained' component={Link} to='/revolution' className={classes.btnStyle} > Learn more </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <div className={classes.revolutionbackground} />
                </Grid>
            </Grid> 

            {/*  contact us bloack  */}
            <Grid item>
                <Grid container direction='row' style={{height:'50em'}} alignItems='center'>
                <Grid item container style={{position:'absolute'}} 
                    justify={matches ? 'space-around' : 'space-between'} > 
                    <Grid item style={{marginLeft:matches?0:'5em'}} >
                        <Grid container direction='column'>
                            <Typography variant='h2'> About us</Typography>
                            <Typography variant='subtitle1'> personal info </Typography>
                            <Button variant='outlined' component={Link} to='/about' style={{borderColor:'white'}} className={classes.btnStyle} > About Us</Button>
                        </Grid>
                    </Grid>
                    <Grid item style={{marginRight:matches? 0:'5em'}} >
                        <Grid container direction='column'>
                            <Typography variant='h2'> Contact-Us </Typography>
                            <Typography variant='subtitle1'> constact us here  </Typography>
                            <Button variant='outlined' component={Link} to='/contact' style={{borderColor:'white'}} className={classes.btnStyle} > Contact-Us </Button>
                        </Grid>
                    </Grid> 
                </Grid>
                    <div className={classes.infoBackground} />
                </Grid>
            </Grid>

            {/* Estimator block  */}
            <Grid item>
                <Grid container direction='row' style={{height:'50em'}} alignItems='center'>
                    <Grid item container style={{position:'absolute'}} 
                        justify={matches ? 'space-around' : 'space-between'} > 
                        <Grid item style={{marginLeft:matches?0:'5em'}} >
                            <Grid container direction='column'>
                                <Typography variant='h2'> Simple Software  </Typography>
                                <Button variant='outlined' component={Link} to='/revolution' style={{}} className={classes.btnStyle} > Learn more </Button>
                            </Grid>
                        </Grid>
                        <Grid item style={{marginRight:matches? 0:'5em'}} >
                            <Grid container direction='column'>
                                <Button variant='outlined' style={{marginTop:'4em',marginRight:'9em'}} component={Link} to='/estimate'
                                className={classes.btnStyle} > Estimate  </Button>
                            </Grid>
                        </Grid> 
                    </Grid>
                        <div className={classes.estimateBackground} />
                    </Grid> 
                </Grid>
        </Grid>
        </>
    )
}

export default Home
