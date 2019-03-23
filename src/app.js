/*
 * @Author: qinghui_wu
 * @Date: 2019-03-23 16:48:33
 * @Last Modified by: qinghui_wu
 * @Last Modified time: 2019-03-23 18:47:01
 */
import React from 'react'
import { connect } from 'react-redux'

import Count from './component/Count'

function App (props) {
  const { appState, dispatch } = props
  return <Count appState={appState} dispatch={dispatch} />
}

// Map Redux state to component props
function mapStateToProps (state) {
  return {
    appState: state
  }
}

// Map Redux actions to component props
function mapDispatchToProps (dispatch) {
  return {
    dispatch: dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
