import * as React from 'react';
import '../styles/css/header.css';
import search_icon from '../styles/image/search-strong.png';
function Header() {
    return (
        <div className="header navbar-light bg-light">
            <div className="left-header">
                <a className="navbar-brand" href="home"><div className="block-nav">Home</div></a>
                <div className="navbar-brand">
                    <form className="form-search form-inline">
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <input type="text" className="search-form form-control" placeholder="Search..." />
                            <div className="search-button input-group-addon"><a href="toannv"><img className="search-icon" src={search_icon}/></a></div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="right-header">
                <a className="navbar-brand" href="news"><div className="block-nav">Top</div></a>
                <a className="navbar-brand" href="login"><div className="block-nav">User</div></a>
            </div>
        </div>
    );
}

export default Header;
