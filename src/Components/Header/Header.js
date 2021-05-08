import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap'
import Logo from '../../assets/logo.png'


const mapStateToProps = state => {
    return {
        token: state.token,
    }
}

const Header = props => {
    let links = null
    if (props.token === null) {
        links = (
            <Nav className="mr-md-5">
                <NavItem>
                    <NavLink className="NavLink" exact to="/login">Login</NavLink>
                </NavItem>
            </Nav>
        )
    } else {
        links = (
            <Nav className="mr-md-5">
                <NavItem>
                    <NavLink className="NavLink" exact to="/">Burger Builder</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="NavLink" exact to="/orders">Orders</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="NavLink" exact to="/logout">Logout</NavLink>
                </NavItem>
            </Nav>
        )

    }
    return (
        <div className="Navigation">
            <Navbar style={{ backgroundColor: "#D70F64", height: "70PX", }}>
                <NavbarBrand href='/' className="mr-auto ml-md-5 Brand">
                    <img src={Logo} alt="Logo" width="80px"></img>
                </NavbarBrand>
                {links}
            </Navbar>
        </div>
    )
}
export default connect(mapStateToProps)(Header)