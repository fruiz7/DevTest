import React from 'react'
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import AshevilleLike from 'react-icons/lib/md/account-balance';
import { LinkContainer } from 'react-router-bootstrap';
import { ResultsDataGrid } from './ResultsDataGrid';

export const FilteredResults = () => (
	<div>
        <Grid>
        	<Row>
				<Col sm={12}>
					<h1><AshevilleLike /> Citizen Service Requests</h1>
					<h3>Filtered Results</h3>
					<Form horizontal>
						<Col sm={12}>
							<FormGroup>
								<ButtonToolbar>
									<ButtonGroup>		
										<Button bsStyle="primary">Grid</Button>			
										<Button>List</Button>		
										<Button>Map</Button>		
									</ButtonGroup>		
									<ButtonGroup>
										<LinkContainer to='/filterRequests'>	
											<Button>Back to filter selections</Button>		
										</LinkContainer>
									</ButtonGroup>	
								</ButtonToolbar>
							</FormGroup>
							<FormGroup>
								<fieldset>
									<ResultsDataGrid />
								</fieldset>
							</FormGroup>
						</Col>
					</Form>
				</Col>
          	</Row>
        </Grid>
     </div>
)