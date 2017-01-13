import React from 'react'
import ReactBootstrap from 'react-bootstrap'
import { render } from 'react-dom'
import { App } from './App'
import { Header } from './Header'

window.React = React
window.ReactBootstrap = ReactBootstrap

render(
	<div>
		<App />
	</div>,
	document.getElementById('react-container')
)
