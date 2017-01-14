import React from 'react'
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import { DashboardItemIcon } from './DashboardItemIcon';
import { PropTypes } from 'react';

export const DashboardItem = ({itemLabel, itemIcon, itemValue}) => (
	<FormGroup>
		<Col componentClass={ControlLabel} sm={8}>
			<DashboardItemIcon itemIcon={itemIcon}/> {itemLabel}
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