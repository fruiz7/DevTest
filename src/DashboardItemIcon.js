import React from 'react'
import AshevilleLike from 'react-icons/lib/md/account-balance';
import Wrench from 'react-icons/lib/fa/wrench';
import Hourglass from 'react-icons/lib/fa/hourglass';
import Star from 'react-icons/lib/fa/star-o';
import Road from 'react-icons/lib/fa/road';
import Building from 'react-icons/lib/md/business';
import Calendar from 'react-icons/lib/fa/calendar';
import { PropTypes } from 'react';

export const DashboardItemIcon = ({itemIcon}) => {
	switch(itemIcon.toString()) {
		case "Wrench":
			return (<Wrench className="itemIcon"/>)
		case "Hourglass":
			return (<Hourglass className="itemIcon" />)
		case "Star":
			return (<Star className="itemIcon" />)		
		case "Road":
			return (<Road className="itemIcon" />)
		case "Building":
			return (<Building className="itemIcon" />)
		case "Calendar":
			return (<Calendar className="itemIcon" />)
		default: 
			return (<AshevilleLike className="itemIcon" />)
	}
}

DashboardItemIcon.propTypes = {
	itemIcon: PropTypes.string
}