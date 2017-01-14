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
          itemLabel: "Average satisfaction:",
          itemIcon: "Star",
          itemValue: "4"
        },
        {
          itemLabel: "Most frequent request type:",
          itemIcon: "Road",
          itemValue: "Pothole"
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
      ],
      filters: {
          serviceTypes: [
            "Abandoned vehicle",
            "Bicycles",
            "Brush collection",
            "Deceased animal",
            "Fire hydrant leak",
            "General question",
            "Graffiti",
            "Hazardous waste",
            "Noise",
            "Overgrown lot",
            "Parks",
            "Pothole",
            "Roll cart issue",
            "Sanitation - general question",
            "Short term rental violations",
            "Stormwater/drainage",
            "Street lights",
            "Street sign damage",
            "Street sign needed - traffic pattern issue",
            "Trash or litter",
            "Transit",
            "Trash collection",
            "Trees and right of way",
            "Water leak"
          ],
          departments : [
            "Development services",
            "General administration",
            "IT services",
            "Parks & recreation",
            "Police: non-emergency",
            "Pulic works - Administration",
            "Public works - Engineering",
            "Public works - Sanitation",
            "Public works - Streets",
            "Stormwater",
            "Transportation",
            "Water"
          ],
          types : [
            "pothole"
          ],
          openDate1 : null,
          openDate2 : null,
          completedDate1 : null,
          completedDate2 : null,
          receivedDate1 : null,
          receivedDate2 : null,
          comments : "",
          commentsSetting : "Like",
          timeToCompletion : null,
          rating : null,
          zip : "",
          addressLine1 : "",
          addressLine2 : ""
      }
    }
  },
  render() {
    return (
      <div className="app">
        <Menu />
        {(this.props.location.pathname === "/") ? 
          <DashboardSummary summaryItems={this.state.summaryItems}/> :
          (this.props.location.pathname === "/filterRequests") ? 
            <FilterCitizenServiceRequests filters={this.state.filters}/> :
          (this.props.location.pathname === "/filteredResults") ?
            <FilteredResults /> :
            <Whoops404 />
      }
        
      </div>
    )
  }
})