import React, { Component } from 'react';
import ID from './ID.js'
import { Router, Route, Link, browserHistory } from 'react-router'

export default class Variant extends Component {
  render() {
    var name = this.props.names;
    var refBases = "", rb;
    for (rb in this.props.referenceBases){
      refBases = refBases.concat(" ", this.props.referenceBases[rb]);
    }
    if (name == ""){
        name = "N/A";
    }
    return (
      <tr>
        <td><Link to={'/variants/'+this.props.id}>{name}</Link></td>
        <td>{this.props.referenceName}</td>
        <td><ID id={this.props.id} /></td>
        <td>{this.props.start}</td>
        <td>{this.props.end}</td>
        <td>{refBases}</td>
        <td>{this.props.alternateBases[0]}</td>
      </tr>
    )
  }
}