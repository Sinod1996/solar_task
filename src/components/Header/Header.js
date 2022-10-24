import React from 'react';
import '../../assets/styles/Header.css'
import logo from '../../assets/images/solar.jpeg';
import '../../assets/styles/media.css';

function Header(props) {
    return (
        <div className={'header'}>

                <div className={'logo'}>
                        <img src={logo} alt=""/>
                       
                </div>

                <div className='logo_name'>
                     <h2><sup>SOLAR</sup>TASKS</h2>
                </div>
            <nav>
                <ul>
                    <li className={'active'}>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                   
                        <button>Contacts</button>
                    
                </ul>
            </nav>
        </div>
    );
}

export default Header;