import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

import UIList from '../UIList.js';

class Dashboard extends Component {

  createList(){
    var s = [];
    for (let i=0; i< UIList.length; i++) {
      let name = UIList[i].name;
      let link = UIList[i].link;
      let ui = UIList[i].ui;
      if(link != null) {
        s.push(
          <li key={ui} className="col-md-3 col-sm-12">
            <Link to={`ui/${ui}`}>
              {name}
            </Link>
          </li>
        )
      } else {
        s.push(
          <li key={ui} className="col-md-3 col-sm-12">
            {name}
          </li>
        )
      }
    }
    return s;
  }

  render() {
    return (
      <section>
        <h2 className="cc-h">Components</h2>
        <div className="cc-section-panel cc-panel cc-panel-body cc-panel-border">
          <div className="cc-indent-lg">
            <ul className="cc-list row cc-flex-list">
              {this.createList()}
            </ul>
          </div>
        </div>
      </section>
    );
  }

}

export default Dashboard;