import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg m-0">
                    {/*<ul className="navbar-nav mr-auto"}>*/}
                    {/*    <li className="nav-item active">*/}
                    <Link to='/light'>
                        <a className="nav-link" href="#">Light</a>
                    </Link>
                    <Link to='/'>
                        <a className="nav-link" href="#">Dark</a>
                    </Link>
                    {/*    </li>*/}
                    {/*</ul>*/}
                </nav>
            </div>
        );
    }
}

export default Navbar;