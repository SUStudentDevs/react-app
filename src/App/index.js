/**
 * App class
 * @module App/index
 * @author Ulysse Fontaine
 */
import React from 'react';
import { connect } from 'react-redux';
import HomeAuth from '../HomeAuth';
import MainBoard from '../MainBoard';

/**
 * App container, choosing which "page" to render
 * @extends React.Component
 */
class App extends React.Component {
  /**
   * Rendering method
   */
  render = () => {
    if(this.props.isLoggedIn) {
      return <MainBoard/>;
    } else {
      return <HomeAuth/>;
    }
  }
}

/**
 * Map isLoggedIn application state to props
 * @param {object} state - The state of the app
 * @param {object} props - The previous props
 * @return {object} the new props
 */
const mapStateToProps = (state, props) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
}

export default connect(mapStateToProps)(App);
