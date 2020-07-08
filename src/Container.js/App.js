import React, {Component} from 'react'
import Navbar from '../Components.js/Navbar'
import Main from '../Components.js/Main'
import About from '../Components.js/About'
import '../Container.js/App.css'
import Footer from '../Components.js/Footer'
import Scroll from '../Components.js/Scroll'

class App extends Component {
    render () {
        return (
            <div>
                <Navbar />
                <Scroll>
                    <Main />
                    <About />
                    <Footer />
                </Scroll>
                
            </div>
        )
    }
}

export default App