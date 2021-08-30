import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue='#0B72B9'
const arcOrange='#FFBA60'
const arcgray='#868686'

export default createMuiTheme({
    palette: {
        common:{
            arcBlue:`${arcBlue}`,
            arcOrange:`${arcOrange}`
        },
        primary:{
            main:`${arcBlue}`
        },
        secondary:{
            main:`${arcOrange}`
        }
    },
    typography:{
        h2:{
            fontFamily:'Raleway',
            fontWeight:700,
            fontSize:'2.7rem',
            color:`${arcBlue}`
        },
        h4:{
            fontFamily:'Raleway',
            fontSize:'2.1rem',
            color:`${arcBlue}`,
            fontWeight:700,

        },
        subtitle1:{
            fontSize:'1.5rem',
            fontWeight:300,
            color:`${arcgray}`
        },
        body1:{
            fontSize:'1.2rem',
            fontWeight:250,
            color:`${arcgray}`
        }
    },
    overrides:{
        MuiInputLabel:{
            root:{
                color:arcBlue,
                font:'1rem'
            }
        },
        MuiInput:{
            root:{
                color:arcgray,
                fontWeight:200
            },
            underline:{
                '&:before':{
                    borderBottom:`2px solid ${arcBlue}`
                },
                '&:hover:not($disabled):not($focused):not($error):before':{
                    borderBottom:`2px solid ${arcBlue}`
                }
            }
        }
    }

    // breakpoints:{
    //     values:{
    //         md:1514
    //     }
    // }
    
})