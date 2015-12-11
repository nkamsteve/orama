
import _ from 'lodash'
import {getPath2D} from '../../utils/path2DUtils'
import {getMidX, getMidY} from '../../utils/rectUtils'
import {plotValue} from '../plotValue'

/*
`points` is used to generate render data for dots and similar.
it handles `x`, `y`, 'radius' and 'fill'.

@calling logic
points{
  pointsDataMap(retrievePoinstData){}
}
*/

/*
generates the array of render data
*/
export const pointsDataMap = (props, datum) => {
  const path2D = getPath2D()
  const hoverPath2D = getPath2D()
  const x = plotValue(
    props, datum, 'x', getMidX(props.plotRect)
  )
  const y = plotValue(
    props, datum, 'y', getMidY(props.plotRect)
  )
  const r = plotValue(props, datum, 'radius', 5)
  const fill = plotValue(props, datum, 'fill')
  path2D.arc(x, y, r, 0, 2 * Math.PI)
  hoverPath2D.arc(x, y, r + 8, 0, 2 * Math.PI)
  const renderDatum = {
    alpha: _.isUndefined(props.pointsAlpha) ? 1 : props.pointsAlpha,
    hoverAlpha: props.hoverAlpha || 0.75,
    data: datum,
    fill,
    path2D,
    hoverPath2D,
    type: 'area',
  }
  return renderDatum
}
/*
If array of arrays (grouped data), flatten before sending to `pointsDataMap`.
There's no reason for the points plot to deal with grouped data
*/
const retrievePoinstData = data => {
  if (_.isArray(_.first(data))) return _.flatten(data)
  return data
}
/*
Main entry point, if there's only `xMap` or `yMap` it will output an one dimension plot.
*/
export const points = props => {
  if (!props.xScale && !props.yScale) return undefined
  return _.map(
    retrievePoinstData(props.data),
    datum => pointsDataMap(props, datum),
  )
}
