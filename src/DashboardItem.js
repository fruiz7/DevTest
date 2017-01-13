import React from 'react'
import AshevilleLike from 'react-icons/lib/md/account-balance';
import Wrench from 'react-icons/lib/fa/wrench';
import Hourglass from 'react-icons/lib/fa/hourglass';
import Check from 'react-icons/lib/fa/check-square-o';
import RoadLike from 'react-icons/lib/md/confirmation-number';
import Building from 'react-icons/lib/md/business';
import Calendar from 'react-icons/lib/fa/calendar';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import { DashboardItemIcon } from './DashboardItemIcon';
import { PropTypes } from 'react';

export const DashboardItem = ({itemLabel, itemIcon, itemValue}) => (
	<FormGroup>
		<Col componentClass={ControlLabel} sm={8}>
			<DashboardItemIcon itemIcon = {itemIcon}/> {itemLabel}
		</Col>
		<Col sm={4}>
			<FormControl.Static>
				{itemValue}
			</FormControl.Static>
		</Col>
	</FormGroup>
)

DashboardItem.propTypes = {
	itemLabel: PropTypes.string,
	itemIcon: PropTypes.string,
	itemValue: PropTypes.string
}