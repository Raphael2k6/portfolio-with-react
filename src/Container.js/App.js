import React, {Component} from 'react'
import Navbar from '../Components.js/Navbar'
import Main from '../Components.js/Main'
import About from '../Components.js/About'
import '../Container.js/App.css'

class App extends Component {
    render () {
        return (
            <div>
                <Navbar />
                <Main />
                <About />
            </div>
        )
    }
}

export default App