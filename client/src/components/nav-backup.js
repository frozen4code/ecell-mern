import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
export default class Navigation extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render(){
        return(
            <div>
                <Navbar light expand="md">
                    <NavbarBrand href="/" className="nav-logo">KC ECELL</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} className="nav-toggle"/>
                        <Collapse isOpen={this.state.isOpen} navbar className="nav-logo">
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-button">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-button">Blog</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav className="nav-button">
                                    Account
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Login
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Register
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                </Navbar>
            </div>
        );
    }
}