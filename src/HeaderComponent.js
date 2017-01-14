import React from 'react'

export const HeaderComponent = React.createClass({
  textOnClick: function(e) {
    e.stopPropagation();
  },

  filterText: function(e) {
    this.props.filterByColumn(e.target.value, this.props.columnName)
  },

  render: function(){
    return (
      <span>
        <div><strong style={{color: this.props.color, width: "100%"}}>{this.props.displayName}</strong></div>
        <input type='text'style={{width: "100%"}} onChange={this.filterText} onClick={this.textOnClick} />
      </span>
    );
  }
});