import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';


//Any component that has 'state' uses the 'class' syntax they can use
// the contructur function to create 'this.state' and this 'state' is what 
// changes in an app

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: " "
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => { this.setState({ robots: users }) });
    }



    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }


    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ?
            <h1>Loanding...</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>ROBOT FRIENDS</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
    }
}

export default App;