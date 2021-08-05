import React from "react";
import {Nav} from "react-bootstrap";
import { withRouter } from "react-router";

const SideBar = props => {
    return (
        <>
                <Nav className="flex-column sidebar" >
					<LinkContainer to="/strategies">
						<NavItem>Strategy List</NavItem>
					</LinkContainer>
					<LinkContainer to="/stocks">
						<NavItem>Stock List</NavItem>
					</LinkContainer>
				</Nav>

        </>
        );
  };
  const SideBar = withRouter(SideBar);
  export default SideBar