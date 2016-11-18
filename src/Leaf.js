import React, { Component } from 'react'

export default class Leaf extends Component{
  constructor() {
    super()
    this.state = {
      
    }
  }
  loadFromServer() {
    let type = {'content-type': 'application/json'};
    this.serverRequest = $.ajax(
      { url: this.props.route.baseurl + this.props.route.container + this.props.routeParams.id,
        type: "GET", data: JSON.stringify({}),
        dataType: "json", 
        contentType: "application/json", 
        success: (result) => {
          console.log("loaded");
          this.setState({leaf: JSON.stringify(result, null, "\t")});
        },
        error: (xhr, status, err) => {
          console.log(err);
        }
    });
  }
  componentDidMount() {
    this.loadFromServer();
  }
    
  render() {
    //console.log("leaf", this.state.leaf);
    return <div className="json">
             <h3>{this.props.route.container}</h3>
             <div>{this.state.leaf}</div>
           </div>
  }
}