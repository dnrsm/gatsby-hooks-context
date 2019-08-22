import React from 'react';

import { SampleContext } from '../contexts/sampleContext'

const Counter = () => (
  <SampleContext.Consumer>
    {
      ({ count, increment, decrement }) =>  {
        return (
          <React.Fragment>
            <div>count: {count}</div>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
          </React.Fragment>
        )
      }
    }
  </SampleContext.Consumer>
)

export default Counter