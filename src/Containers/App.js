import React, {Component} from "react";
import CardList from "../Components/CardList";
import {houses} from '../Houses';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';

class App extends Component{
    constructor(){
        super();
        this.state = {
            houses: houses,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){
        const {houses, searchfield}= this.state
        const filteredHomes = houses.filter(house => {
            return house.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return(
            <div className='tc'> 
                <div>
                    <h1>Sweet Home</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                </div>
                <Scroll>
                    <ErrorBoundary>
                        <CardList houses = {filteredHomes}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }
}
export default App;