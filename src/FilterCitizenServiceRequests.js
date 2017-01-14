import React from 'react'
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import AshevilleLike from 'react-icons/lib/md/account-balance';
import { PropTypes } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Menu } from './Menu';

export const FilterCitizenServiceRequests = ({filterType="potholes", filterOpenDate=null, filterCompletedDate=null, filterComments="", filterCommentsSetting="Like", filterTimeToCompletion=null, filterRating=null, filterZip="", filterAddressLine1="", filterAddressLine2="", filterLatitute=null, filterLongitude=null}) => (
	<div>
		<Menu />
        <Grid>
        	<Row>
				<Col sm={12}>
					<h1><AshevilleLike /> Citizen Service Requests</h1>
					<fieldset>
						<Form horizontal>
						<Col sm={6}>
							PUT FILTERS HERE
						</Col>
						<Col sm={6}>
							MORE FILTERS HERE
					    </Col>
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
					</fieldset>	
				</Col>
          	</Row>
        </Grid>
     </div>
)

FilterCitizenServiceRequests.propTypes = {
	filterType: PropTypes.string,
	filterOpenDate: PropTypes.instanceOf(Date),
	filterCompletedDate: PropTypes.instanceOf(Date),
	filterComments: PropTypes.string,
	filterCommentsSetting: PropTypes.string,
	filterTimeToCompletion: PropTypes.number,
	filterRating: PropTypes.number,
	filterZip: PropTypes.string,
	filterAddressLine1: PropTypes.string,
	filterAddressLine2: PropTypes.string,
	filterLatitude: PropTypes.number,
	filterLongitude: PropTypes.number
}