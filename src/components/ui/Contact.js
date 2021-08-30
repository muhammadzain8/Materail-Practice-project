import React,{useState} from 'react'
import {Grid,Button,Snackbar,Hidden,Dialog,DialogContent,TextField,Typography, IconButton} from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles'
import mobileBackground from '../../assets/mobileBackground.jpg'

import background from '../../assets/background.jpg'
import phoneIcon from '../../assets/phone.svg'
import emailIcon from '../../assets/email.svg'
import sendIcon from '../../assets/send.svg'


const useStyles=makeStyles((theme)=>({
    heading:{
        lineHeight:1,
    },
    text:{
        color:theme.palette.common.arcBlue,
        fontSize:'1rem',
    },
    background:{
        backgroundImage:`url(${background})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        height:'55em',
        [theme.breakpoints.down('md')]:{
            backgroundImage:`url(${mobileBackground})`,
            margin:0
        }
    },
    icon:{
        marginRight:'0.5em'
    },
    message:{
        border:`2px solid ${theme.palette.common.arcBlue}`,
        marginTop:'5em',
        borderRadius:5
    },
    sendButton:{
        backgroundColor:[theme.palette.common.onk],
        color:'white',
        borderRadius:50,
        marginTop:'2em',
        fontSize:'1em',
        '&:hover':{
            backgroundColor:[theme.palette.secondary.light],
        },
        [theme.breakpoints.down('sm')]:{
            margin:'2em'
        }
    }
}))
const Contact = () => {
    const classes=useStyles()
    const theme=useTheme()
    const matches=useMediaQuery(theme.breakpoints.down('sm'))
    const matchesXS=useMediaQuery(theme.breakpoints.down('xs'))

    const [name,setName]=useState('')
    const [nameHelper,setNameHelper]=useState('')

    const [phoneNo,setPhoneNo]=useState('')
    const [phoneNoHelper,setPhoneNoHelper]=useState('')

    const [email,setEmail]=useState('')
    const [emailHelper,setEmailHelper]=useState('')

    const [message,setMessage]=useState('')
    const [messageHelper,setMessageHelper]=useState('')

    const [open,setOpen]=useState(false)        //   for dialog box
    const [alert,setAlert]=useState({open:false,message:'',backgroundColor:''})     // for alert snakbars

    const onChange=event=>{
        let valid
        switch (event.target.id){
            case 'name':
                valid=event.target.value
                setName(valid)
                if(valid.length <=4 ){
                    setNameHelper(' name length must be greater/equal to 5 character ')
                }else{
                    setNameHelper('')
                }
                break;
            case 'email':
                setEmail(event.target.value)
                valid=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
                if(!valid){
                setEmailHelper(' Invalid Email')
                }else{
                    setEmailHelper('')
                }
                break;
            case 'phone':
                setPhoneNo(event.target.value)
                valid=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)
                if(!valid){
                    setPhoneNoHelper(' invalid phone No ')
                }else{
                    setPhoneNoHelper('')
                } 
                break;
            default:
                    break;   
        }
    }

    return (
        <>
            <Grid container direction='row'>
                <Grid item container direction='column' alignItems='center' justify='center' style={{marginTop:0}}sm={12} md={4} lg={3}>
                   <Grid item>
                   <Grid item >
                        <Typography variant='h2' className={classes.heading} > Contact US </Typography>
                        <Typography variant='body1' className={classes.text}> Whats your query </Typography>
                    </Grid>
                    <Grid item container style={{marginTop:'1em'}} >
                        <Grid item>
                            <img src={phoneIcon} alt='phone' className={classes.icon}/>
                        </Grid>
                        <Grid item>
                            <Typography variant='body1' className={classes.text} >
                                <a href='tel:03483932449' style={{  textDecoration:'none',color:'inherit'}} > 03483932449 </a> 
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container>
                        <Grid item>
                            <img src={emailIcon} alt='email' style={{verticalAlign:'bottom'}} className={classes.icon}/>
                        </Grid>
                        <Grid item>
                            <Typography variant='body1' className={classes.text} >
                                <a href='mailto:muhammadzain8@gmail.com' style={{  textDecoration:'none',color:'inherit'}}>zain8@gmail.com </a>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item contaienr direction='column'style={{maxWidth:'20em'}}  >
                        <Grid item>
                            <TextField label='name' error={nameHelper.length !==0} helperText={nameHelper}
                             fullWidth id='name' value={name} onChange={onChange} />
                        </Grid>
                        <Grid item>
                            <TextField label='email' error={emailHelper.length !== 0} helperText={emailHelper}
                             fullWidth id='email' value={email} onChange={onChange} />
                        </Grid>
                        <Grid item>
                            <TextField label='phone' error={phoneNoHelper.length !== 0} helperText={phoneNoHelper}
                             fullWidth id='phone' value={phoneNo} onChange={onChange} />
                        </Grid>
                    </Grid>
                    <Grid item style={{maxWidth:'15em'}} >
                            <TextField className={classes.message} InputProps={{disableUnderline:true}} multiline rows={5} fullWidth
                             label='message' id='message' value={message} onChange={(e)=>setMessage(e.target.value)} />
                    </Grid>
                    
                    <Grid item  >
                        <Button variant='contained'  
                        disabled={name.length === 0 || message.length===0 || phoneNoHelper === 0 || emailHelper === 0}
                        className={classes.sendButton} onClick={()=>setOpen(true)}>
                        Send Message <img src={sendIcon} alt='send image'  /> </Button>
                    </Grid>
                    <Grid item  >
                        <Button variant='contained'  
                        className={classes.sendButton} onClick={()=>setAlert({open:true,message:'message sent successfully',backgroundColor:'green'})}>
                        check alert  <img src={sendIcon} alt='send image'  /> </Button>
                    </Grid>
                    <Grid item  >
                        <Button variant='contained'  
                        className={classes.sendButton} onClick={()=>setAlert({open:true,message:'message not send',backgroundColor:'red'})}>
                        check alert  <img src={sendIcon} alt='send image'  /> </Button>
                    </Grid>

                   </Grid>
                </Grid>
                
                <Dialog open={open} onClose={()=>setOpen(false)} PaperProps={{style:{
                    paddingTop:matchesXS?'1em':'5em',
                    paddingBottom:matchesXS?'1em':'5em',
                    paddingLeft:matchesXS?'2em':matches?'5em':'10em',
                    paddingRight:matchesXS?'2em':matches?'5em':'10em',
                }}}>
                    <DialogContent>
                        <Grid container direction='column'>
                            <Grid item>
                                <Button color='primary' onClick={()=>setOpen(false)} style={{width:'100%',justifyContent:'flex-end'}}> x </Button>
                            </Grid>
                            <Grid item>
                                <Typography varaint='h4' gutterBottom> Confirm Message </Typography>
                            </Grid>
                            <Grid item>
                                <TextField label='name' error={nameHelper.length !==0} helperText={nameHelper}
                             fullWidth id='name' value={name} onChange={onChange} />
                                </Grid>
                            <Grid item>
                                <TextField label='email' error={emailHelper.length !== 0} helperText={emailHelper}
                                fullWidth id='email' value={email} onChange={onChange} />
                            </Grid>
                            <Grid item>
                                <TextField label='phone' error={phoneNoHelper.length !== 0} helperText={phoneNoHelper}
                                fullWidth id='phone' value={phoneNo} onChange={onChange} />
                            </Grid>
                        </Grid>
                        <Grid item style={{maxWidth:'15em'}} >
                                <TextField className={classes.message} InputProps={{disableUnderline:true}} multiline rows={5} fullWidth
                                label='message' id='message' value={message} onChange={(e)=>setMessage(e.target.value)} />
                        </Grid>
                        <Grid item contaienr>
                            <Grid item  >
                                <Button variant='contained'  
                                disabled={name.length === 0 || message.length===0 || phoneNoHelper === 0 || emailHelper === 0}
                                className={classes.sendButton} style={{marginLeft:'1.4em'}} onClick={()=>setOpen(true)}>
                                Send Message <img src={sendIcon} alt='send image'
                                 /> </Button>
                            </Grid>
                        </Grid>
                    </DialogContent>
                </Dialog>
                
                
                <Snackbar open={alert.open} message={alert.message} ContentProps={{style:{backgroundColor:alert.backgroundColor}}}
                anchorOrigin={{vertical:"top",horizontal:"center"}} onClose={()=>setAlert({...alert,open:false})} autoHideDuration={4000}
                />


                <Grid item container className={classes.background} sm={12} md={8} lg={9}>
                </Grid>
            </Grid>
        </>
    )
}

export default Contact
