import React from 'react'
import {Grid,Typography} from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles';
import Lottie from 'react-lottie'
import {makeStyles} from '@material-ui/core/styles'
import vision from '../../assets/vision.svg'
import animationData from '../../animations/technologyAnimation/data.json'
import consultation from '../../assets/consultationIcon.svg'
import mockup from '../../assets/mockupIcon.svg'
import reiview from '../../assets/reviewIcon.svg'
import build from '../../assets/buildIcon.svg'

const useStyles=makeStyles((theme)=>({
    rowContainer:{
        paddingLeft:'5em',
        paddingRight:'5em',
        [theme.breakpoints.down('sm')]:{
            paddingLeft:'1.5em',
            paddingRight:'1.5em'
        }
    },
    icon1:{
        width:'30em',
        [theme.breakpoints.down('sm')]:{
            width:'25em'
        }
    },
    animation1:{
        maxWidth:'40em',
        maxHeight:'45em',
        minWidth:'20em',
        [theme.breakpoints.down('sm')]:{
            marginInline:'auto'
        }
    },
    icon1Container:{
        textAlignLast:'center',
        [theme.breakpoints.down('sm')]:{
            marginInline:'auto'
        }
    },
    allIcons:{
        width:'25em',
        [theme.breakpoints.down('md')]:{
            width:'20em',
            marginTop:'2em'
        }
    }
}))
const Revolution = () => {
    const classes=useStyles()
    const theme=useTheme() 
    const matchesMD=useMediaQuery(theme.breakpoints.down('md'))

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
            <Grid container direction='column'>
                <Grid item className={classes.rowContainer} style={{marginTop:'4em'}}>
                    <Typography variant='h2' > The Revolution  </Typography>
                </Grid>
                <Grid item container direction='row' className={classes.rowContainer}>
                    <Grid item lg md={12} className={classes.icon1Container} >
                        <img className={classes.icon1} src={vision} alt='vision image'/>
                    </Grid>
                    <Grid item container direction='column' lg md={12} >
                        <Grid item > 
                            <Typography variant='h4' align='right' gutterBottom> heading</Typography>
                        </Grid>
                        <Grid item>
                        <Typography variant='body1' align='right' paragraph>  dasd adsd info about the category info about the category info about the category info about the category info about the category
                                info about the category < br /></Typography>
                        <Typography variant='body1' align='right' paragraph>  dasd adsd info about the category info about the category info about the category info about the category info about the category
                        info about the category < br /></Typography>
                        <Typography variant='body1' align='right' paragraph>  dasd adsd info about the category info about the category info about the category info about the category info about the category
                        info about the category < br /></Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item className={classes.rowContainer} style={{marginTop:'4em'}} >
                    <Typography variant='h2' > The Technology  </Typography>
                </Grid>
                <Grid item container direction='row' className={classes.rowContainer}>
                    <Grid item container direction='column' lg md={12}>
                        <Grid item > 
                            <Typography variant='h4'  gutterBottom> heading</Typography>
                        </Grid>
                        <Grid item>
                        <Typography variant='body1'  paragraph>  dasd adsd info about the category info about the category info about the category info about the category info about the category
                                info about the category < br /></Typography>
                        <Typography variant='body1'  paragraph>  dasd adsd info about the category info about the category info about the category info about the category info about the category
                        info about the category < br /></Typography>
                        <Typography variant='body1'  paragraph>  dasd adsd info about the category info about the category info about the category info about the category info about the category
                        info about the category < br /></Typography>
                        </Grid>
                    </Grid>
                    <Grid item lg md={12} className={classes.animation1}>
                        <Lottie options={defaultOptions}  src={vision} />

                    </Grid>
                </Grid>

                <Grid item  container direction='row' justify='center' className={classes.rowContainer} style={{backgroundColor:'#B3B3B3',eight:matchesMD?'45em':'60em'}}>
                    <Grid item>
                        <Typography variant='h4' style={{marginTop:'2em'}}> Process </Typography>
                    </Grid>
                    <Grid item container direction='row' className={classes.rowContainer} justify='center' style={{margin:'7em 0 3em 0'}} >
                        <Grid item container direction='column' lg style={{alignItems:'center'}}>
                            <Grid item>
                                <Typography variant='h4' gutterBottom style={{color:'#000'}} > Consultaion </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' style={{color:'#fff',maxWidth:'25em'}}>dasd adsd info about the category info about the category info about the category info about the category info about the categorydasd adsd info about the category info about the category info about the category info about the category info about the category </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' style={{color:'#fff',maxWidth:'25em'}}>dasd adsd info about the category info about the category info about the category info about the category info about the category dasd adsd info about the category info about the category info about the category info about the category info about the category Consultaion </Typography>
                            </Grid>
                        </Grid>
                        <Grid item lg  >
                        <img src={consultation} className={classes.allIcons} alt='consultaion image' />
                    </Grid>
                    </Grid>
                </Grid>

                <Grid item  container direction='row' justify='center' className={classes.rowContainer} style={{backgroundColor:'#FF7373',eight:matchesMD?'45em':'60em'}}>
                    
                    <Grid item container direction='row' className={classes.rowContainer} justify='center' style={{margin:'7em 0 3em 0'}} >
                        <Grid item container direction='column' lg style={{alignItems:'center'}}>
                            <Grid item>
                                <Typography variant='h4' gutterBottom style={{color:'#000'}} > Mockup </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' style={{color:'#fff',maxWidth:'25em'}}>dasd adsd info about the category info about the category info about the category info about the category info about the categorydasd adsd info about the category info about the category info about the category info about the category info about the category </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' style={{color:'#fff',maxWidth:'25em'}}>dasd adsd info about the category info about the category info about the category info about the category info about the category dasd adsd info about the category info about the category info about the category info about the category info about the category Consultaion </Typography>
                            </Grid>
                        </Grid>
                        <Grid item lg  >
                        <img src={mockup} className={classes.allIcons} alt='mockup image' />
                    </Grid>
                    </Grid>
                </Grid>

                <Grid item  container direction='row' justify='center' className={classes.rowContainer} style={{backgroundColor:'#39B54A',eight:matchesMD?'45em':'60em'}}>
                    
                    <Grid item container direction='row' className={classes.rowContainer} justify='center' style={{margin:'7em 0 3em 0'}} >
                        <Grid item container direction='column' lg style={{alignItems:'center'}}>
                            <Grid item>
                                <Typography variant='h4' gutterBottom style={{color:'#000'}} > Review </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' style={{color:'#fff',maxWidth:'25em'}}>dasd adsd info about the category info about the category info about the category info about the category info about the categorydasd adsd info about the category info about the category info about the category info about the category info about the category </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' style={{color:'#fff',maxWidth:'25em'}}>dasd adsd info about the category info about the category info about the category info about the category info about the category dasd adsd info about the category info about the category info about the category info about the category info about the category Consultaion </Typography>
                            </Grid>
                        </Grid>
                        <Grid item lg  >
                        <img src={reiview} className={classes.allIcons} alt='review image' />
                    </Grid>
                    </Grid>
                </Grid>

                
                <Grid item  container direction='row' justify='center' className={classes.rowContainer} style={{backgroundColor:'#A67c52',height:matchesMD?'50em':'50em'}} >
                    
                    <Grid item container direction='row' className={classes.rowContainer} justify='center' style={{margin:'7    em 0 3em 0'}} >
                        <Grid item container direction='column' lg style={{alignItems:'center'}}>
                            <Grid item>
                                <Typography variant='h4' gutterBottom style={{color:'#000'}} > Build </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' style={{color:'#fff',maxWidth:'25em'}}>dasd adsd info about the category info about the category info about the category info about the category info about the categorydasd adsd info about the category info about the category info about the category info about the category info about the category </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='body1' style={{color:'#fff',maxWidth:'25em'}}>dasd adsd info about the category info about the category info about the category info about the category info about the category dasd adsd info about the category info about the category info about the category info about the category info about the category Consultaion </Typography>
                            </Grid>
                        </Grid>
                        <Grid item lg  >
                        <img src={build} className={classes.allIcons}  alt='build image' />
                    </Grid>
                    </Grid>
                </Grid>



            </Grid>
        </>
    )
}

export default Revolution
