import React from 'react'
import Grid from 'react-bootstrap/lib/Grid';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Navbar from 'react-bootstrap/lib/Navbar';

export const Header = () => (
	<Grid>
		<Navbar inverse collapseOnSelect>
	    <Navbar.Header>
	      <Navbar.Brand>
	        <a href="#">Asheville City Data</a>
	      </Navbar.Brand>
	      <Navbar.Toggle />
	    </Navbar.Header>
	    <Navbar.Collapse>
	      <Nav>
	        <NavItem eventKey={1} title="Census">Census</NavItem>
	        <NavItem eventKey={2} title="Neighborhoods">Citizen Service Requests</NavItem>
			<NavItem eventKey={3} title="Neighborhoods">Neighborhoods</NavItem>
			<NavItem eventKey={4} title="Crime">Crime</NavItem>
			<NavItem eventKey={5} title="Properties">Properties</NavItem>
	      </Nav>
	    </Navbar.Collapse>
	  </Navbar>
	</Grid>
)







