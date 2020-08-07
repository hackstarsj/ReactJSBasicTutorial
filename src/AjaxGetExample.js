import React from 'react'
import axios from 'axios'

class AjaxGetExample extends React.Component{

    state={
        input:[]
    }

    componentDidMount(){

        var currenthis=this;

        axios.get("http://localhost/js_ajax_tutorial/api.php")
        .then(function(response){
            console.log("Success");
            console.log(response);
            //Access Data Only
            console.log(response.data);
            //this.setState Not Work Because You are Already Inside Promise Call
            //this.setStatate()
            currenthis.setState({input:response.data});
        })
        .then(function(error){
            console.log("Run on Error ");
            console.log(error);
        })
        .then(function(){
            console.log("Run Always");
        })
    
    }

    filterData = (event) =>{
        console.log(event.target.value);

        var currenthis=this;

        axios.get("http://localhost/js_ajax_tutorial/api.php?name="+event.target.value)
        .then(function(response){
            console.log("Success");
            console.log(response);
            //Access Data Only
            console.log(response.data);
            //this.setState Not Work Because You are Already Inside Promise Call
            //this.setStatate()
            currenthis.setState({input:response.data});
        })
        .then(function(error){
            console.log("Run on Error ");
            console.log(error);
        })
        .then(function(){
            console.log("Run Always");
        })
    

    }


    render(){
        return (<React.Fragment>
                <h1>AJAX GET EXAMPLE</h1>
                <input type='text' onChange={this.filterData}/>
                <table border='1'>
                    <tbody>
        {this.state.input.map( data => <tr key={data.id}><td>{data.id}</td><td>{data.name}</td><td>{data.email}</td></tr> )}
        </tbody>
                </table>
            </React.Fragment>)
    }

}

export default AjaxGetExample;