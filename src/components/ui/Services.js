import React from 'react'
import customSoftwareIcon from '../../assets/Custom Software Icon.svg'
import moblieIcon from '../../assets/mobileIcon.svg'
import websiteIcon from '../../assets/websiteIcon.svg'
import {Grid,Button,Typography} from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'

const useStyles=makeStyles((theme)=>({
    servicesContainer:{
        marginTop:'5em',
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
        },
    },

}))
const Services = () => {
    const classes=useStyles()
    const theme=useTheme() 
    const matches=useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <>
        <Grid container direction='column'>
            <Grid item>
                <Typography variant='h2' gutterBottom style={{marginLeft:matches?0:'1em'}}align={matches ? 'center' : undefined}>
                    Services
                </Typography>
            </Grid>
            {/*  Mobile app dev  */}
            <Grid item >
                <Grid container direction='row' justify={matches?'center':'flex-end'} style={{marginTop:'5em'}}  >
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
                        <img style={{marginRight:matches ? 0 : '5em',width:'12em'}} alt='custom software icon' src={moblieIcon} />
                    </Grid>
                </Grid>
            </Grid>
            {/*  custom Software  */}
            <Grid item >
                <Grid container direction='row'  className={classes.servicesContainer} justify={matches? 'center':undefined} >
                    <Grid item style={{marginLeft:'2em'}}>
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
                        <img className={classes.icon} style={{width:'12em'}} alt='custom software icon' src={customSoftwareIcon} />
                    </Grid>
                </Grid>
            </Grid>

    {/*  Website  dev  */}
            <Grid item >
                <Grid container direction='row' style={{marginBottom:'3em',marginTop:'5em'}}justify={matches ? 'center' : 'flex-end' } >
                    <Grid item style={{marginRight:'2em'}}>
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
                        <img style={{marginRight:matches ? 0 : '5em',width:'12em'}} alt='custom software icon' src={websiteIcon} />
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
        </>
    )
}

export default Services
