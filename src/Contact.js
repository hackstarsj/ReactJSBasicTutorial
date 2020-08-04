import React from 'react'
import { BrowserRouter as Router ,Route,Link,Switch } from 'react-router-dom'

class Contact extends React.Component{

    render(){
        var data1=(new URLSearchParams(window.location.search)).get("data1")
        var data2=(new URLSearchParams(window.location.search)).get("data2")

        if((new URLSearchParams(window.location.search)).has("data1")){
            console.log("Value Exist");
        }
        else{
            console.log("Value not Exist")
        }

        console.log(data1)
        console.log(data2)
        return (
            <h1>Contact Page</h1>
        )        
    }

}

export default Contact