
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
    {height: 420, width: 417, x: 63, y: 20}
  )
})

test('Chart methods.getTicks', () => {
  assert.deepEqual(
    methods.getTicks('linear', [0, 100], 3),
    [0, 50, 100]
  )
  assert.deepEqual(
    methods.getTicks('ordinal', [0, 100]),
    [0, 100]
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

test('Chart methods.getRenderContext', () => {
  assert.deepEqual(
    typeof methods.getRenderContext(),
    'object'
  )
})