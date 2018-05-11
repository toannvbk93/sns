import * as React from 'react';
import '../styles/css/header.css';
function Header() {
    return (
        <div className="header navbar-light bg-light">
            <a className="block-nav navbar-brand" href="#">Home</a>
            <a className="block-nav navbar-brand" href="#">News</a>
            <a className="block-nav navbar-brand" href="#">Login</a>
        </div>
    );
}

export default Header;
