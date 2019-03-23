/*
 * @Author: qinghui_wu
 * @Date: 2019-03-23 16:48:24
 * @Last Modified by:   qinghui_wu
 * @Last Modified time: 2019-03-23 16:48:24
 */

/**
 * dispatch action
 * @param {*} type action_type
 * @param {*} data 数据
 * @param {*} dispatch
 */
export function doAction (type, data, dispatch) {
  let action = newAction(type, data)
  let newState = dispatch(action)
  return newState
}

/**
 * creat action
 * @param {*} type
 * @param {*} data
 */
export function newAction (type, data) {
  let param = { data }
  return { type, param }
}
