import React from 'react'
import Grid from 'react-bootstrap/lib/Grid';
import DatePicker from 'react-bootstrap-date-picker';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import Accordion from 'react-bootstrap/lib/Accordion';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import AshevilleLike from 'react-icons/lib/md/account-balance';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import { PropTypes } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

export const FilterCitizenServiceRequests = ({filters=[]}) => (
	<div>
        <Grid>
        	<Row>
				<Col sm={12}>
					<h1><AshevilleLike /> Citizen Service Requests</h1>
					<h3>Filter selections</h3>
					<Form horizontal>
					<Accordion>
						<Panel collapsible header="Primary filters" bsStyle="info" eventKey="1">
							<Col sm={6}>
								<FormGroup controlId="type">
									<Col componentClass={ControlLabel} sm={4}>Request type:</Col>
									<Col sm={8}>
										<FormControl componentClass="select" multiple size="15">
											{filters.serviceTypes.map((item) => <option value={item}>{item}</option>)}		
										</FormControl>
									</Col>
								</FormGroup>
							</Col>
							<Col sm={6}>
						    <FormGroup controlId="status">
								<Col componentClass={ControlLabel} sm={4}>Status:</Col>
								<Col sm={8}>
								  <FormControl componentClass="select" placeholder="Any">
								    <option value="Any">Any</option>
								    <option value="submitted">Submitted</option>
								    <option value="received">Received</option>
								    <option value="progress">In progress</option>
								    <option value="completed">Completed</option>
								  </FormControl>
								</Col>
						    </FormGroup>
							<FormGroup controlId="submitted">
									<Col componentClass={ControlLabel} sm={4}>Submitted:</Col>
									<Col sm={8}>
										<Col sm={12}>
											<ControlLabel>From</ControlLabel>
											<DatePicker value={filters.openDate1}/>
										</Col>
										<Col sm={12}>
											<ControlLabel>to</ControlLabel>
											<DatePicker value={filters.openDate2}/>
										</Col>
									</Col>
								</FormGroup>				
					         	<FormGroup controlId="priority">
									<Col componentClass={ControlLabel} sm={4}>Priority:</Col>
									<Col sm={8}>
									  <FormControl componentClass="select" multiple>
									    <option value="none">None</option>
									    <option value="low">Low</option>
									    <option value="meduim">Medium</option>
									    <option value="high">High</option>
									  </FormControl>
									</Col>
							    </FormGroup>
							</Col>
						</Panel>
					    <Panel collapsible header="Additional filters" bsStyle="info" eventKey="2">
				            <Col sm={12}>
					         	<FormGroup>
									<Col componentClass={ControlLabel} sm={3}>Title:</Col>
									<Col sm={9}>
										<FormGroup>
											<Col xs={4}>
											  <FormControl componentClass="select">
											    <option value="like">Contains</option>
											    <option value="equals">Equals</option>
											  </FormControl>
											</Col>
											<Col xs={8}>
											  <FormControl type="text"/>
											</Col>
										</FormGroup>
									</Col>
							    </FormGroup>									    									
					         	<FormGroup>
									<Col componentClass={ControlLabel} sm={3}>Description:</Col>
									<Col sm={9}>
										<FormGroup>
											<Col xs={4}>
											  <FormControl componentClass="select">
											    <option value="like">Contains</option>
											    <option value="equals">Equals</option>
											  </FormControl>
											</Col>
											<Col xs={8}>
											  <FormControl type="text"/>
											</Col>
										</FormGroup>
									</Col>
							    </FormGroup>	
					         	<FormGroup>
									<Col componentClass={ControlLabel} sm={3}>Comments:</Col>
									<Col sm={9}>
										<FormGroup>
											<Col xs={4}>
											  <FormControl componentClass="select">
											    <option value="like">Contain</option>
											    <option value="equals">Equal</option>
											  </FormControl>
											</Col>
											<Col xs={8}>
											  <FormControl type="text"/>
											</Col>
										</FormGroup>
									</Col>
							    </FormGroup>	
					         	<FormGroup controlId="satisfaction">
									<Col componentClass={ControlLabel} sm={3}>Satisfaction:</Col>
									<Col sm={9}>
									  <FormControl componentClass="select" multiple size="6">
									    <option value="0">Not supplied</option>
									    <option value="1">1</option>
									    <option value="2">2</option>
									    <option value="3">3</option>
									    <option value="4">4</option>
									    <option value="5">5</option>
									  </FormControl>
									</Col>
							    </FormGroup>
							    <FormGroup controlId="departments">
									<Col componentClass={ControlLabel} sm={3}>Department:</Col>
									<Col sm={9}>
										<FormControl componentClass="select" multiple size="10">
											{filters.departments.map((item) => <option value={item}>{item}</option>)}		
										</FormControl>
									</Col>
								</FormGroup>
								<FormGroup>
									<Col componentClass={ControlLabel} sm={3}>Location:</Col>
									<Col sm={9}>
										<FormGroup>
											<Col sm={12}>
												<InputGroup>
													<InputGroup.Addon><input type="radio" checked/>  Within</InputGroup.Addon>
													<FormControl type="text"/>
													<InputGroup.Addon> miles of</InputGroup.Addon>
													<FormControl type="text" placeholder="Street address"/>
												</InputGroup>
											</Col>
										</FormGroup>
										<FormGroup>
											<Col sm={12}>
												<InputGroup>
													<InputGroup.Addon><input type="radio"/>  Zipcode:</InputGroup.Addon>
													<FormControl type="text"/>
												</InputGroup>
											</Col>
										</FormGroup>
									</Col>
								</FormGroup>
								<FormGroup>
									<Col componentClass={ControlLabel} sm={3}>Days open:</Col>
									<Col sm={9}>
										<InputGroup>
											<InputGroup.Addon>Between</InputGroup.Addon>
											<FormControl type="text" />
											<InputGroup.Addon>and</InputGroup.Addon>
											<FormControl type="text"/>
										</InputGroup>
									</Col>
								</FormGroup>
						    </Col>
				        </Panel>
					</Accordion>
					<ButtonToolbar>
						<ButtonGroup>		
							<LinkContainer to='/filteredResults'>	
								<Button bsStyle="primary">Submit</Button>		
							</LinkContainer>
						</ButtonGroup>
						<ButtonGroup>		
							<Button>Reset filters</Button>		
						</ButtonGroup>		
						<ButtonGroup>		
							<LinkContainer to='/'>	
								<Button>Cancel</Button>	
							</LinkContainer>
						</ButtonGroup>	
					</ButtonToolbar>
					</Form>
				</Col>
          	</Row>
        </Grid>
     </div>
)

FilterCitizenServiceRequests.propTypes = {
	filters: PropTypes.array
}