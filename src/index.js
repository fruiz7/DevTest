import React from 'react'
import ReactBootstrap from 'react-bootstrap'
import { render } from 'react-dom'
import { App } from './App'
import { Whoops404 } from './Whoops404'
import { FilterCitizenServiceRequests } from './FilterCitizenServiceRequests'
import { FilteredResults } from './FilteredResults'
import { Router, Route, hashHistory } from 'react-router'

window.React = React
window.ReactBootstrap = ReactBootstrap

render(
	<div>
		<Router history={hashHistory}>
			<Route path="/" component={App}/>
			<Route path="dashboard" component={App}/>
			<Route path="filterRequests" component={FilterCitizenServiceRequests}/>
			<Route path="filteredResults" component={FilteredResults}/>
			<Route path="*" component={Whoops404}/>
		</Router>
	</div>
	,
	document.getElementById('react-container')
)
