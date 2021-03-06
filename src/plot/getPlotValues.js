// Copyright 2018 Kensho Technologies, LLC.

import {map, zipObject} from 'lodash'

import {ACCESSORS_NAMES, ACCESSORS_NAMES_NON_SCALABLE} from '../defaults'

import plotValue from './plotValue'

const keys = [...ACCESSORS_NAMES, ...ACCESSORS_NAMES_NON_SCALABLE]

export default function getPlotValues(props = {}, datum = {}, idx, defaults = {}) {
  const values = map(keys, key => plotValue(props, datum, idx, key, defaults[key]))
  const result = zipObject(keys, values)
  result.data = datum
  return result
}
