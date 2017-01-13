import React from 'react'
import { Header } from './Header'
import { DashboardItem } from './DashboardItem'
import { DashboardItemIcon } from './DashboardItemIcon'
import { DashboardSummary } from './DashboardSummary'

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
          itemIcon: "Check",
          itemValue: "4"
        },
        {
          itemLabel: "Most frequent request type:",
          itemIcon: "RoadLike",
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
        <Header />
        <DashboardSummary summaryItems={this.state.summaryItems}/>
      </div>
    )
  }
})