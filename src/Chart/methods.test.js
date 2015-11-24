
import {it as test} from 'mocha'
import assert from 'assert'

import * as methods from './methods'

test('Chart methods.calculateMargin', () => {
  const opts = {
    size: {width: 500, height: 500},
    xType: 'linear',
    yType: 'linear',
    xDomain: [0, 100],
    yDomain: [100, 0],
  }
  assert.deepEqual(
    methods.calculateMargin(opts),
    {x: 56.099999999999994, y: 20, width: 423.9, height: 416.5}
  )
})

test('Chart methods.getMaxTextWidth', () => {
  assert.deepEqual(
    methods.getMaxTextWidth('sans', 16, ['label1', 'superLabel']),
    10
  )
  assert.deepEqual(
    methods.getMaxTextWidth('sans', 16, [0, 50, 100]),
    3
  )
})