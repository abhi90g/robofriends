import CardList from './CardList'
import SearchBox from './SeachBox'
import { Component } from 'react'
import Scroll from './Scroll'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(r => this.setState({robots: r })
        )
        
    }

    onSearchChange = (e) => {
        this.setState({searchfield: e.target.value})
    }

    render() {
        const filterRobots = this.state.robots.filter(r => {
            return r.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.robots.length === 0) {
            return <h1 className='tc'> Loading... </h1>
        } else {
          return (
                <div className='tc'>
                    <h1>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filterRobots} />
                    </Scroll>
                </div>
            )  
        }
        
    }
}

export default App;