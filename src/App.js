import React from 'react'
import { Menu } from './Menu'
import { DashboardSummary } from './DashboardSummary'
import { FilterCitizenServiceRequests } from './FilterCitizenServiceRequests'
import { FilteredResults } from './FilteredResults'
import { Whoops404 } from './Whoops404'

export const App = React.createClass ({
  getInitialState() {
    return {
      summaryItems: [
        {
          itemLabel: "Total requests to date:",
          itemIcon: "Wrench",
          itemValue: "12345"
        },
        {
          itemLabel: "Average time to completion:",
          itemIcon: "Hourglass",
          itemValue: "3 days"
        },
        {
          itemLabel: "Average rating:",
          itemIcon: "Star",
          itemValue: "4"
        },
        {
          itemLabel: "Most frequent request type:",
          itemIcon: "Road",
          itemValue: "Potholes"
        },
        {
          itemLabel: " Zipcode with most all time requests:",
          itemIcon: "Building",
          itemValue: "28804"
        },
        {
          itemLabel: "Last request submitted on:",
          itemIcon: "Calendar",
          itemValue: "January 1st, 2017 at 10:00am"
        }
      ]
    }
  },
  render() {
    return (
      <div className="app">
        <Menu />
        {(this.props.location.pathname === "/") ? 
          <DashboardSummary summaryItems={this.state.summaryItems}/> :
          (this.props.location.pathname === "/filterRequests") ? 
            <FilterCitizenServiceRequests /> :
          (this.props.location.pathname === "/filterRequests/filteredResults") ?
            <FilteredResults /> :
            <Whoops404 />
      }
        
      </div>
    )
  }
})