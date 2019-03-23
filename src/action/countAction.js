/*
 * @Author: qinghui_wu
 * @Date: 2019-03-23 16:47:49
 * @Last Modified by: qinghui_wu
 * @Last Modified time: 2019-03-23 18:56:02
 */
import { regReducer } from '../reducer/index'
import { ADDCOUNT, CUTCOUNT } from './actionnames'

function addCount (state) { // 加
  return state.update('value', val => ++val)
}

regReducer(ADDCOUNT, addCount)

function cutCount (state) { // 减
  return state.update('value', val => --val)
}

regReducer(CUTCOUNT, cutCount)
