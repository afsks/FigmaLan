import React from 'react';
import { createGlobalStyle } from 'styled-components';

// import Navbar from '../components/layout/navbar'
import Home from '../components/layout/home'
import Product from '../components/layout/product'
import NewsLetter from '../components/layout/newsletter'
import About from '../components/layout/about'
import Testimonials from '../components/layout/testimonials'
import Pricing from '../components/layout/pricing'
import Contact from '../components/layout/contact'
import Map from '../components/layout/map'


const Globalstyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
        font-family: 'Roboto', sans-serif;
    }
`

class Landing extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Globalstyle />
                <Home/>
                <Product/>
                <NewsLetter/>
                <About/>
                <Testimonials/>
                <Pricing/>
                <Contact/>
                <Map/>
            </React.Fragment>
        )
    }
}

export default Landing;