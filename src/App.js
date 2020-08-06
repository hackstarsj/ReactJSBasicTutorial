import React from 'react'
import Main from './Main'
import About from './About'
import Contact from './Contact'
import BasicExample from './BasicExample'
import { BrowserRouter as Router ,Route,Link,Switch } from 'react-router-dom'

class App extends React.Component{

    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Main}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                    <Route exact path="/basicexample" component={BasicExample}></Route>
                </Switch>
            </Router>
        )        
    }

}

export default App