
(This library is currently under development)

![logo](/dist/imgs/logo.png)[![Build Status](https://travis-ci.org/kensho/orama.svg)](https://travis-ci.org/kensho/orama)

Data visualization components with functional APIs for going from quick data exploration to complex custom visualizations.

```
npm i orama --save
```

<img align="right" width="50%" src="dist/imgs/gettingStarted01.png">

```jsx
import {Chart, Lines} from 'orama'

const MyChart = (props) => (
  <Chart>
    <Lines
      data={props.data}
      x='prop1'
      y='prop2'
    />
  </Chart>
)
```
**if you don't want to do a npm/webpack/babel setup yet, or if you don't care about React, see the ['Quick setup'](docs/quickSetup.md)**

### Docs

- [Getting started](/docs/gettingStarted.md)
- [Quick setup](/docs/quickSetup.md)
- [API](/docs/api.md)
- [Contributing](/docs/contributing.md)

*(/horáō, "to see, spiritual and mentally" – a vision, focusing on the impact it has on the one beholding the vision)*
