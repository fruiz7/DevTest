import React from 'react'
import AshevilleLike from 'react-icons/lib/md/account-balance';
import Wrench from 'react-icons/lib/fa/wrench';
import Hourglass from 'react-icons/lib/fa/hourglass';
import Check from 'react-icons/lib/fa/check-square-o';
import RoadLike from 'react-icons/lib/md/confirmation-number';
import Building from 'react-icons/lib/md/business';
import Calendar from 'react-icons/lib/fa/calendar';
import { PropTypes } from 'react';

export const DashboardItemIcon = ({itemIcon}) => {
	switch(itemIcon.toString()) {
		case "Wrench":
			return (<Wrench />)
		case "Hourglass":
			return (<Hourglass />)
		case "Check":
			return (<Check />)		
		case "RoadLike":
			return (<RoadLike />)
		case "Building":
			return (<Building />)
		case "Calendar":
			return (<Calendar />)
		default: 
			return (<AshevilleLike />)
	}
}

DashboardItemIcon.propTypes = {
	itemIcon: PropTypes.string
}