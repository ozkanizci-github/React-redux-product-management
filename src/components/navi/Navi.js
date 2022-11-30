import React from "react";
import "./Navi.css";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "../cart/CartSummary";

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className="dropdown-menu-right">
          <NavbarBrand className="ml-auto ">
           <Link to="/"> Northwind Story</Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse className="right-aligned" isOpen={this.state.isOpen} navbar>
            <Nav className="me-automl-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/saveProduct">Add Product</Link>
                </NavLink>
              </NavItem>
              <NavItem></NavItem>
              <CartSummary></CartSummary>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
