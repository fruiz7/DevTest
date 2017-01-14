import React from 'react'
import Grid from 'react-bootstrap/lib/Grid';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Navbar from 'react-bootstrap/lib/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';

export const Menu = () => (
	<Grid>
		<Navbar inverse collapseOnSelect>
	    <Navbar.Header>
	      <Navbar.Brand>
	        <Link to="/asheville">Asheville City Data</Link>
	      </Navbar.Brand>
	      <Navbar.Toggle />
	    </Navbar.Header>
	    <Navbar.Collapse>
	      <Nav>
	      	<LinkContainer to="/census">
	        	<NavItem eventKey={1} title="Census">Census</NavItem>
	        </LinkContainer>
	      	<LinkContainer to="/crime">			
				<NavItem eventKey={2} title="Crime">Crime</NavItem>
	        </LinkContainer>
	      	<LinkContainer to="/">
		        <NavItem eventKey={3} title="Citizen Service Requests">Citizen Service Requests</NavItem>
	        </LinkContainer>
	      	<LinkContainer to="/neighborhoods">
				<NavItem eventKey={4} title="Neighborhoods">Neighborhoods</NavItem>
	        </LinkContainer>
	      	<LinkContainer to="/properties">			
				<NavItem eventKey={5} title="Properties">Properties</NavItem>
	        </LinkContainer>
	      </Nav>
	    </Navbar.Collapse>
	  </Navbar>
	</Grid>
)







