
import _ from 'lodash'
import * as rectUtils from '../../utils/rectUtils'
import {getScale} from './getScale'

export const JS_TO_VIS_TYPE = {
  'string': 'ordinal',
  'number': 'linear',
  'date': 'time',
}
export const RANGE_LINEAR_COLOR = ['#edf8b1', '#2c7fb8']
export const RANGE_ORDINAL_COLOR = ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3']
const TICK_X_SPACE = 100
const TICK_Y_SPACE = 90

export {getScale} from './getScale'

export function toType(input) {
  return ({}).toString.call(input).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

export const getType = (props, key) => {
  const {
    [`${key}Array`]: array,
  } = props
  const counter = _.reduce(
    array,
    (acc, d) => {
      acc[toType(d)] ++
      return acc
    },
    {number: 0, string: 0, date: 0}
  )
  const counterPairs = _.pairs(counter)
  const maxName = _.max(counterPairs, '1')[0]
  return JS_TO_VIS_TYPE[maxName]
}
export const getDomain = (props, key) => {
  const {
    [`${key}Array`]: array,
    [`${key}Type`]: type,
  } = props
  switch (type) {
  case 'ordinal':
    return _.uniq(array)
  default:
    return [_.min(array), _.max(array)]
  }
}
export const getRange = (props, key) => {
  const {
    plotRect,
    [`${key}Type`]: type,
  } = props
  switch (key) {
  case 'y':
    return [rectUtils.getMaxY(plotRect), plotRect.y]
  case 'fill':
  case 'color':
    switch (type) {
    case 'ordinal':
      return RANGE_ORDINAL_COLOR
    default:
      return RANGE_LINEAR_COLOR
    }
    break
  case 'x':
  default:
    return [plotRect.x, rectUtils.getMaxX(plotRect)]
  }
}
export const getTickCount = (props, key) => {
  const {
    [`${key}Range`]: range,
    [`${key}TickSpace`]: _tickSpace,
  } = props
  switch (key) {
  case 'y':
    const xTickSpace = _tickSpace || TICK_Y_SPACE
    return Math.round((range[0] - range[1]) / xTickSpace)
  case 'x':
  default:
    const yTickSpace = _tickSpace || TICK_X_SPACE
    return Math.round((range[1] - range[0]) / yTickSpace)
  }
}
export function getTicks(props, key) {
  const {
    [`${key}Type`]: type = 'linear',
    [`${key}Domain`]: domain = [0, 1],
    [`${key}TickCount`]: tickCount = 0,
  } = props
  switch (type) {
  case 'ordinal':
    return _.map(
      domain,
      d => ({
        value: d,
        text: d,
      })
    )
  case 'linear':
  default:
    const scale = getScale(props, key)
    const ticks = scale.ticks(tickCount)
    return _.map(
      ticks,
      d => ({
        value: d,
        text: d,
      })
    )
  }
}
export function getMap(props, key) {
  const {
    [`${key}Scale`]: scale,
    [key]: accessor,
  } = props
  return obj => scale(_.get(obj, accessor))
}
