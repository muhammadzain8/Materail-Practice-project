import React from 'react'
import {Grid,Typography} from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles';
import Lottie from 'react-lottie'
import {makeStyles} from '@material-ui/core/styles'

import mockup from '../../assets/mockupIcon.svg'


const useStyles=makeStyles((theme)=>({
    mainContainer:{
        padding:'2em 5em 10em 5em',
        [theme.breakpoints.down('md')]:{
            padding:'1em 2em 6em 2em',
        },
        [theme.breakpoints.down('xs')]:{
            padding:'0.5em 1em 3em 1em'
        }
    },
    rowContainer:{
        paddingLeft:'8em',
        paddingRight:'8em',
        [theme.breakpoints.down('sm')]:{
            paddingLeft:'2.5em',
            paddingRight:'2.5em'
        }
    },
    text:{
        color:'#0B81B9',
        margin:'4em'
    },  
    allIcons:{
        width:'25em',
        marginTop:'5em',
        [theme.breakpoints.down('md')]:{
            width:'20em',
            marginTop:'2em'
        }
    }
}))
const About = () => {
    const classes=useStyles()

    return (
        <>
            <Grid item container direction='column' className={classes.mainContainer}>
                <Grid item>
                    <Typography variant='h2' > About Us </Typography>
                </Grid>
                <Grid item container justify='center' >
                    <Grid item>
                        <Typography variant='body1' align='center' className={classes.text}>
                            adsasdassssssssssssss saddddddd das  adda s ds ad sa ds d ads d dsa dsads ad da ad da a d
                            ds d da da a ad  dsad  dadsa dsa da d a  dasdsa da dsada das dsa dsadsa asddsa dsa
                            adsasdassssssssssssss saddddddd das  adda s ds ad sa ds d ads d dsa dsads ad da ad da a d
                            ds d da da a ad  dsad  dadsa dsa da d a  dasdsa da dsada das dsa dsadsa asddsa dsa
                            adsasdassssssssssssss saddddddd das  adda s ds ad sa ds d ads d dsa dsads ad da ad da a d ds d da da a ad  dsad  dadsa dsa da d a  dasdsa da dsada das dsa dsadsa asddsa dsa
                            adsasdassssssssssssss saddddddd das  adda s ds ad sa ds d ads d dsa dsads ad da ad da a d
                            ds d da da a ad  dsad  dadsa dsa da d a  dasdsa da dsada das dsa dsadsa asddsa dsa
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item container direction='row' className={classes.rowContainer}>
                <Grid item container direction='column' lg xs={12}>
                    <Grid item>
                        <Typography variant='h4' > History </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='body1' paragraph>s d da da a ad  dsad  dadsa dsa da d a  dasdsa da dsada das dsa dsadsa asddsa dsa
                            adsasdassssssssssssss saddddddd das  adda s ds ad sa ds d ads d dsa dsads ad da ad da
                            adsasdassssssssssssss saddddddd das  adda s ds ad sa ds d ads d dsa dsads ad da ad da a d ds d da da a ad  dsad  dadsa dsa da d a  dasdsa da dsada das dsa dsadsa asddsa dsa
                            adsasdassssssssssssss saddddddd das  adda s ds ad sa ds d ads d dsa dsads ad da ad da a d </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='body1' paragraph> s d da da a ad  dsad  dadsa dsa da d a  dasdsa da dsada das dsa dsadsa asddsa dsa
                            adsasdassssssssssssss saddddddd das  adda s ds ad sa ds d ads d dsa dsads ad da ad da
                            adsasdassssssssssssss saddddddd das  adda s ds ad sa ds d ads d dsa dsads ad da ad da a d ds d da da a ad  dsad  dadsa dsa da d a  dasdsa da dsada das dsa dsadsa asddsa dsa
                            adsasdassssssssssssss saddddddd das  adda s ds ad sa ds d ads d dsa dsads ad da ad da a d </Typography>
                    </Grid>
                </Grid>
                <Grid item lg style={{textAlign:'center'}} xs={12}>
                    <img src={mockup}     className={classes.allIcons} alt='book image' />
                </Grid>
            </Grid>
        </>
    )
}

export default About
