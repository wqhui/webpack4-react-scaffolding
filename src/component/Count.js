/*
 * @Author: qinghui_wu
 * @Date: 2019-03-23 17:06:12
 * @Last Modified by: qinghui_wu
 * @Last Modified time: 2019-03-23 18:56:31
 */
import React from 'react'

import { ADDCOUNT, CUTCOUNT } from '../action/actionnames'
import * as actions from '../action/countAction' // 这里引入就已经注册了reducer

export default function Count (props) {
  const { appState, dispatch } = props
  let value = appState.get('value', 0)
  return (
    <div>
      <button onClick={() => dispatch({ type: CUTCOUNT })}>Decrease -</button>
      <span>count：{value}</span>
      <button onClick={() => dispatch({ type: ADDCOUNT })}>Increase +</button>
    </div>
  )
}
