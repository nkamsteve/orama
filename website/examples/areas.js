import * as React from 'react'

import {Chart, Areas} from 'orama'

const data = [
  {date: new Date('2010-01-01'), value: 10},
  {date: new Date('2010-02-01'), value: 17},
  {date: new Date('2010-03-01'), value: 3},
  {date: new Date('2010-04-01'), value: 12},
  {date: new Date('2010-05-01'), value: 7},
]

export default (
  <Chart yZeroBased>
    <Areas data={data} x="date" y="value" />
  </Chart>
)
