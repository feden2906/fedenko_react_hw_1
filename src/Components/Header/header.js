import React, {Component} from 'react';
import './header.css'

class Header extends Component {
    render() {
        return (
            <div className='title'>
                {<h1><b>My Shops</b></h1>}
            </div>
        );
    }
}

export default Header;