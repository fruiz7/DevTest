import React from 'react'
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';
import Image from 'react-bootstrap/lib/Image';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Wrench from 'react-icons/lib/fa/wrench';
import Hourglass from 'react-icons/lib/fa/hourglass';
import Check from 'react-icons/lib/fa/check-square-o';
import RoadLike from 'react-icons/lib/md/confirmation-number';
import Building from 'react-icons/lib/md/business';
import Calendar from 'react-icons/lib/fa/calendar';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import AshevilleLike from 'react-icons/lib/md/account-balance';
import { DashboardItem } from './DashboardItem';
import { PropTypes } from 'react';

export const DashboardSummary = ({summaryItems}) => (
	<div>
        <Grid>
        	<Row>
				<Col sm={12}>
					<h1><AshevilleLike /> Citizen Service Requests</h1>
					<fieldset>
						<Form horizontal>
						<Col sm={6}>
							{summaryItems.map((item, i) => <DashboardItem key={i}
											{...item}/>
							)}		
							<ButtonToolbar>
								<ButtonGroup>		
									<Button bsStyle="primary">Explore data</Button>		
								</ButtonGroup>
								<ButtonGroup>		
									<Button>Submit request with The Asheville App</Button>		
								</ButtonGroup>		
							</ButtonToolbar>
						</Col>
						<Col sm={6}>
					    	<fieldset>
					    		<Image src="map_dashboard.PNG" responsive/>
					    	</fieldset>
					    </Col>
						</Form>
					</fieldset>	
				</Col>
          	</Row>
        </Grid>
     </div>
)

DashboardSummary.propTypes = {
	items: PropTypes.array
}