import * as React from 'react';
import '../styles/css/header.css';
import search_icon from '../styles/image/search-strong.png';
import { Link } from 'react-router';
import user_icon from '../styles/image/icon_user.png';

function Header() {
    return (
        <div className="header navbar-light bg-light">
            <div className="left-header">
                <div className="block-nav navbar-brand"><Link to="/">Home</Link></div>
                <div className="search-container navbar-brand">
                    <form className="form-search form-inline">
                        <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                            <input type="text" className="search-form form-control" placeholder="Search..." />
                            <div className="search-button input-group-addon"><a href="toannv"><img className="search-icon" src={search_icon} /></a></div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="right-header">
                <div className="block-nav navbar-brand"><Link to="/top">Top</Link></div>
                <div className="block-nav navbar-brand"><Link to="/user"><div><img className="user-icont" src={user_icon} /></div></Link></div>
            </div>
        </div>

    );
}

export default Header;
