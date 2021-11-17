import React from "react";

//Style
import '../styles/Header.style.scss'

const Header = ({ setDisplayStatus }) => {
    const setDisplayStatusHandler = (e) => {
        //console.log(e.target.value)
        setDisplayStatus(e.target.value)
    }

    return (
        <nav>
            <div className='left ctn-btn'>
                <input onClick={setDisplayStatusHandler} type="submit" value='all' />
            </div>
            
            <h1>Tasks</h1>

            <div className='right ctn-btn'>
                <input onClick={setDisplayStatusHandler} type="submit" value='completed' />
                <input onClick={setDisplayStatusHandler} type="submit" value='uncompleted' />
            </div>
        </nav>
    )
}

export default Header;