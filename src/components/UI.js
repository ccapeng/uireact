import React, { Component } from 'react';
import UIList from '../UIList.js'


class UI extends Component {

  constructor(props) {
    super();
    this.uiID = props.match.params.ui;
    for (var i=0;i<UIList.length;i++) {
        var comp = UIList[i];
        if (comp.ui == this.uiID) {
          this.uiComp = comp;
          this.uiName = comp.name;
          break;
        }
      }
  }
  
  getItemContent(uiKey, u) {
    fetch(u)
    .then(
      function(response) {
        return response.text();
      }
    ).then(function(html){
      document.getElementById(uiKey).innerHTML = html;
    })
  }

  getItems() {

    var s = [];
    var len = this.uiComp.items.length;
    for (let i=0; i<len; i++) {
      let item = this.uiComp.items[i];
      let title = item.title;
      let url = "/"+item.url;
      let uiKey = this.uiID + i;
      s.push(
        <div className="cc-section cc-panel" key={uiKey}>
          <h2 className="cc-h cc-panel-header">{title}</h2>
          <div className="cc-panel-body" id={uiKey}>
            {this.getItemContent(uiKey,url)}
          </div>
        </div>
      )
    }
    return s;
  }

  render() {
    return (
      <div className="cc-section">
        <div className="cc-h-area">
          <h1 className="cc-h">{ this.uiName }</h1>
        </div>
        {this.getItems()}
      </div>
    )
  }
}

export default UI