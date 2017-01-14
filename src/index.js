import React from 'react'
import ReactBootstrap from 'react-bootstrap'
import { render } from 'react-dom'
import { App } from './App'
import { Router, Route, hashHistory } from 'react-router'

window.React = React
window.ReactBootstrap = ReactBootstrap

render(
	<div>
		<Router history={hashHistory}>
			<Route path="/" component={App}/>
			<Route path="dashboard" component={App}/>
			<Route path="filterRequests" component={App}/>
			<Route path="filteredResults" component={App}/>
			<Route path="*" component={App}/>
		</Router>
	</div>
	,
	document.getElementById('react-container')
)
