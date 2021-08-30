import React,{useState} from 'react'
import Header from './ui/Header'
import Footer from './ui/Footer'
import {ThemeProvider} from '@material-ui/styles'
import theme from './ui/Theme'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './ui/Home.js'
import Services from './ui/Services'
import CustomSoft from './ui/CustomSoft'
import About from './ui/About'
import Contact from './ui/Contact'
import Website from './ui/Website'
import MobileApps from './ui/MobileApp'
import Revolution from './ui/Revolution'
import Estimate from './ui/Estimate'

const App = () => {
  const [value,setValue]=useState(0)
  const [selectedIndex,setSelectedIndex]=useState(0)

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/customSoftware' component={CustomSoft} />
          <Route exact path='/mobileApps' component={MobileApps} />
          <Route exact path='/websites' component={Website} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/revolution' component={Revolution} />
          <Route exact path='/estimate' component={Estimate} />

        </Switch>
        <Footer  setValue={setValue}  setSelectedIndex={setSelectedIndex} />
      </Router>
    </ThemeProvider>
  )
}

export default App
