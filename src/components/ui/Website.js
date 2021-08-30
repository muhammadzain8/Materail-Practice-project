import React from 'react'
import {Grid,Button,Hidden,Typography, IconButton} from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import Lottie from 'react-lottie'

import backArrow from '../../assets/backArrow.svg'
import forwardArrow from '../../assets/forwardArrow.svg'
import analytics from '../../assets/analytics.svg'
import seo from '../../assets/seo.svg'
import outreach from '../../assets/outreach.svg'
import ecommerce from '../../assets/ecommerce.svg'


const useStyles=makeStyles(theme=>({
    mainContainer:{
        padding:'2em 3em 10em 3em',
        [theme.breakpoints.down('md')]:{
            padding:'1em 2em 6em 2em',
        },
        [theme.breakpoints.down('xs')]:{
            padding:'0.5em 1em 3em 1em'
        }
    },
    heading:{
        maxWidth:'45em'
    },
    arrowContainer:{
        marginTop:'0.5em'
    },
    
}))

const Website = () => {
    const classes=useStyles()
    const theme=useTheme() 
    const matches=useMediaQuery(theme.breakpoints.down('md'))
    const matchesSM=useMediaQuery(theme.breakpoints.down('sm'))
    const matchesXS=useMediaQuery(theme.breakpoints.down('xs'))

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
                            <Typography variant='h2' > Website  development </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='body1' paragraph>  dasd adsd info about the category info about the category info about the category info about the category info about the category
                                info about the category < br />info about the category info about the category info about the category <br/>  info about the category info about the category info about the category info about the category info about the category
                                info about the category info about the dasd dasda <br /> category info abo dasd dsaut the category info about the category  info about the category info about the category info about the category info about the category info about the category
                                info about the category info about the category info about the category info about the category</Typography>
                        </Grid>
                    </Grid>
                    <Hidden smDown>
                        <Grid item className={classes.arrowContainer} style={{marginLeft:'auto'}} component={Link} to='/mobileApps'>
                            <IconButton style={{backgroundColor:'transparent'}} >
                                <img src={forwardArrow} alt='forword to services' />
                            </IconButton>                    
                        </Grid>
                    </Hidden>
                </Grid>

                <Grid item container diraction='row' alignItems='center'  >
                    <Grid item>  
                        <Grid item container direction='column'>
                            <Grid item >
                                <Typography variant='h4' > Analytics </Typography>
                            </Grid>
                            <Grid item>
                                <img src={analytics} alt='graph image'/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                    <Typography variant='body1'> dasd adsd info about the category info about the category info about the category info about the category info about the category
                                info about the category < br />info about the category info about</Typography>
                    </Grid>
                </Grid>

                <Grid item container diraction='row' alignItems='center' justify='flex-end' >
                    <Grid item>  
                        <Grid item container direction='column'>
                            <Grid item >
                                <Typography align='center' variant='h4' > Ecommerence </Typography>
                            </Grid>
                            <Grid item>
                                <img src={ecommerce} alt='ecommerece image'/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{marginLeft:'1em'}}>
                    <Typography variant='body1'> dasd adsd info about the category info aboutegory info about the category </Typography>
                    </Grid>
                </Grid>

                <Grid item container diraction='row' alignItems='center'  >
                    <Grid item>  
                        <Grid item container direction='column'>
                            <Grid item >
                                <Typography variant='h4' > Outreach </Typography>
                            </Grid>
                            <Grid item>
                                <img src={outreach} alt='outreach image'/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{marginleft:'1em'}}>
                    <Typography variant='body1'> dasd adsd info about the category info about the category info about the category info about the category info about the category
                                info about the category < br />info about the category info about</Typography>
                    </Grid>
                </Grid>


                <Grid item container diraction='row' alignItems='center' justify='flex-end'>
                    <Grid item>  
                        <Grid item container direction='column'>
                            <Grid item >
                                <Typography align='center' variant='h4' > SEO </Typography>
                            </Grid>
                            <Grid item>
                                <img src={seo} alt='seo image'/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item style={{marginLeft:'1em'}}>
                    <Typography variant='body1'> dasd adsd info about the category info aboutegory info about the category </Typography>
                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}

export default Website
