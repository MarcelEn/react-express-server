import React, { Component } from 'react';
import {connect} from 'react-redux';

import WelcomeToReact from '../../components/welcometoreact/WelcomeToReact.jsx';

class App extends Component {
  render() {
    return (
        <WelcomeToReact message={this.props.message}/>
    );
  }
}

function mapStateToProps(state) {
    return state.ui;
}

function mapDispatchToProps(dispatch) {
    return {}//{ actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)