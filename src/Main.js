import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Footer from './Footer'

class Main extends React.Component{

    render(){
        return (
            <React.Fragment>
            <Header></Header>
            <div>
            <Sidebar></Sidebar> 
            <div>
            <Section1></Section1>
            <Section2></Section2> 
            <Section3></Section3>
            </div>
            </div>
            <Footer></Footer>      
            </React.Fragment>
        )        
    }

}

export default Main