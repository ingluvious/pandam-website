import React from "react"
import './Home.css'
import under_construction from '../images/under_construction.png';

const Home: React.FC = () => {
    return(
        <div className = "under-construction">
            <img src = {under_construction} alt = "under construction"/>
        </div>
    )
}

export default Home;