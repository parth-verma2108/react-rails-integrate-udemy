import Routes from "../routes/index";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';

class app extends Component {
  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

export default app;