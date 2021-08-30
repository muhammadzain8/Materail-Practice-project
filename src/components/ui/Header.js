import React,{useState,useEffect} from 'react'
import {AppBar,Toolbar,Tabs,Tab,Button,Menu,MenuItem,List,ListItem,ListItemText} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import logo from '../../assets/logo.svg'
import {Link} from 'react-router-dom'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'

const useStyles=makeStyles(theme=>({
    toolbarMargin:{
        ...theme.mixins.toolbar,
        [theme.breakpoints.up("md")]:{
            marginBottom:"1rem"
        },
        [theme.breakpoints.up("xs")]:{
            marginBottom:"2rem"
        }
    },
    logoStyle:{
        height:"6rem",
        [theme.breakpoints.down("md")]:{
            height:"5rem"
        },
    },
    tabsStyle:{
        marginLeft:'auto',
    },
    tabStyle:{
        fontSize:'1rem',
        fontWeight:500,
        textTransform:'none',
        minWidth:10
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
    logoContainer:{
        padding:0,
        "&:hover":{
            backgroundColor:"transparent"
        }
    },
    menu:{
        backgroundColor:theme.palette.common.arcBlue,
        color:'white',
        // marginLeft:'1650px',
        borderRadius:'0px'
    },
    menuItems:{
        opacity:0.5,
        "&:hover":{
            opacity:1
        }
    },
    drawerIconcontainer:{
        marginLeft:'auto',
        "&:hover":{
            backgroundColor:'transparent'
        }
    },
    drawerStyle:{
        backgroundColor:theme.palette.common.arcBlue,
        color:'white',
        opacity:0.7
    },
    drawerItemSelected:{
        opacity:1
    },
    listContainer:{
        width:'150px'
    },
    listItemStyle:{
        "&:hover":{
            opacity:1
        }
    },
    appbar:{
      zIndex:theme.zIndex.modal+1       //  add +1 zindex to appbar   
    },
    
}))

const Header = ({value,setValue,selectedIndex,setSelectedIndex}) => {
    const classes=useStyles()
    const theme=useTheme()
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    
    const matches=useMediaQuery(theme.breakpoints.down("sm"))

    const [openDrawer,setOpenDrawer]=useState(false)
    const [anchorEl,setAnchorEl]=useState(null)
    const [open,setOpen]=useState(false)

    const tabHandler=(e,value)=>{
        setValue(value)
    }
    const clickHandler=e=>{
        setAnchorEl(e.currentTarger)
        setOpen(true)
    }
    const closeHandler=e=>{
        setAnchorEl(null)
        setOpen(false)
    }
    const menuItemHandler=(e,index)=>{
        setAnchorEl(null)
        setOpen(false)
        setSelectedIndex(index)
    }
    const menuOptions=[
        {name:'Services',link:'/services',activeIndex:3,selectedIndex:0},
        {name:'Custom Softwares Dev',link:'/customSoftware', activeIndex:3,selectedIndex:1},
        {name:'Websites dev',link:'/websites' , activeIndex:3,selectedIndex:2},
        {name:'Mobiel App Dev',link:'/mobileApps' , activeIndex:3,selectedIndex:3}
    ]
    const routes=[
        {name:'Home',link:'/',activeIndex:0},
        {name:'Contact',link:'/contact',activeIndex:1},
        {name:'About',link:'/about',activeIndex:2},
        {name:'services',link:'/services',activeIndex:3,ariaOwns:anchorEl ? "simple-menu" : undefined,
            ariaPopup:anchorEl ? 'true':undefined,mouseOver:(e=>clickHandler(e))},
        {name:'Revolution',link:'/revolution',activeIndex:4},

    ]

    useEffect(()=>{
        [...menuOptions,...routes].forEach(route =>{
            switch(window.location.pathname){
                case `${route.link}`:
                    if(value !== route.activeIndex){
                        setValue(route.activeIndex)
                        if(route.selectedIndex && route.selectedIndex !== selectedIndex){
                            setSelectedIndex(route.selectedIndex)
                        }
                    }
                    break;
                case '/estimate':
                    setValue(5)
                    break;
                default:
                    break;    
            }   
        })
    },[value,menuOptions,selectedIndex,routes])

    const tabs=(
        <>
            <Tabs value={value} onChange={tabHandler} className={classes.tabsStyle} indicatorColor='primary'>
              {routes.map((route,index)=>(
                  <Tab key={`${route}${index}`} className={classes.tabStyle} component={Link} to={route.link} label={route.name} 
                        aria-owns={route.ariaOwns} aria-haspopup={route.ariaPopup} onMouseOver={route.mouseOver} />
              ))}
            </Tabs>
            
            <Button color='secondary' variant='contained' component={Link} to='estimate' onClick={()=>setValue(5)} className={classes.btnStyle} > Estimate </Button>

            <Menu id='simple-menu' elevation={0} classes={{paper:classes.menu}}  anchorEl={anchorEl} open={open} 
                    onClose={closeHandler} MenuListProps={{onMouseLeave:closeHandler}}>
                {menuOptions.map((option,index)=>(
                    <MenuItem key={option} component={Link} to={option.link} classes={{root:classes.menuItems}}
                         onClick={e=>{menuItemHandler(e,index);setValue(3);closeHandler()}} selected={index===selectedIndex && value===3}>
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
    
    const drawer=(
        <>
        <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} classes={{paper:classes.drawerStyle}}
        open={openDrawer} onClose={()=>setOpenDrawer(false)} onOpen={()=>setOpenDrawer(true)}>
            
            <div className={classes.toolbarMargin} />

            <List disablePadding className={classes.listContainer}> 
            {routes.map(route=>(
                <ListItem selected={value===route.activeIndex} onClick={()=>{setOpenDrawer(false);setValue(route.activeIndex)}} 
                        divider button component={Link} to={route.link}>
                    <ListItemText> {route.name} </ListItemText>
                </ListItem>
            ))}
            </List>
        </SwipeableDrawer>
        <IconButton className={classes.drawerIconcontainer} onClick={()=> setOpenDrawer(!openDrawer)} disableRipple> 
            <MenuIcon className={classes.drawerIcon} />
        </IconButton>
        </>
    )
    return (
        <>
        <AppBar position='fixed' className={classes.appbar}>
            <Toolbar disableGutters>

               <Button disableRipple component={Link} to='/' onClick={()=>setValue(0)} className={classes.logoContainer}>
                   <img className={classes.logoStyle} alt='company logo' src={logo} /> </Button>
                
                {matches ? drawer : tabs}

            </Toolbar>
        </AppBar>
        <div className={classes.toolbarMargin} />
        </>
    )
}

export default Header
