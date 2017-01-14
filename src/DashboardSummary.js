import React from 'react'
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';
import Image from 'react-bootstrap/lib/Image';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import AshevilleLike from 'react-icons/lib/md/account-balance';
import { DashboardItem } from './DashboardItem';
import { PropTypes } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

export const DashboardSummary = ({summaryItems}) => (
	<div>
        <Grid>
        	<Row>
				<Col sm={12}>
				<h1><AshevilleLike /> Citizen Service Requests</h1>
				<h3>At a glance</h3>
					<Form horizontal>
					<Col sm={6}>
						{summaryItems.map((item, i) => <DashboardItem key={i}
										{...item}/>
						)}		
						<ButtonToolbar>
							<ButtonGroup>		
								<LinkContainer to='/filterRequests'>	
									<Button bsStyle="primary">Explore data</Button>
								</LinkContainer>	
							</ButtonGroup>
							<ButtonGroup>		
								<Button>Submit request with The Asheville App</Button>		
							</ButtonGroup>		
						</ButtonToolbar>
					</Col>
					<Col sm={6} xsHidden>
				    	<Image src="map_dashboard.PNG" responsive/>
				    </Col>
					</Form>
				</Col>
          	</Row>
        </Grid>
     </div>
)

DashboardSummary.propTypes = {
	items: PropTypes.array
}