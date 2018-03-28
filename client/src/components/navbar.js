import React, {Component} from 'react';
import logo from '../kcecell.png';
export default class Navigation extends Component {
    // constructor(props) {   super(props); }
    render() {
        return (
            <div>
                <div className="overlay"></div>
                <nav
                    className="navbar navbar-expand-lg navbar-light fixed-top scrolling-navbar bg-faded"
                    id="white-bg">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#1"><img className="nav-logo" src={logo} alt=""/></a>
                        </div>
                        <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarCollapse"
                                aria-controls="navbarCollapse"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto w-100 justify-content-end">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#hero-area">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/blog">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/lorem">Lorem</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/dorem">Dorem</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/florem">Florem</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/login">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}