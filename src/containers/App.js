import React, { useState, useEffect } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'


const App = () => {
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => setRobots(users))
    }, []) 

    const onSearchChange = (event) => setSearchfield(event.target.value)
    

  
       
    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

        return !robots.length ?
            <p>Loading..</p> :
            (
                <div className="tc">
                    <h1>Robot Cards</h1>
                    <SearchBox searchChange={onSearchChange} searchfield={searchfield} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
    
        
        

        
    
    
}

export default App