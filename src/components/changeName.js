import React, { useState } from 'react';

import { SampleContext } from '../contexts/sampleContext'

const ChangeName = () => {
  const handleInputChange = e => {
    const {name, value} = e.target
    setValues({...values, [name]: value})
  }
  const [values, setValues] = useState({name: ""});

  return (
    <SampleContext.Consumer>
      {
        ({ name, changeName }) =>  {
          return (
            <React.Fragment>
              <div>name: {name}</div>
              <input name='name' value={values.name} onChange={handleInputChange} />
              <button onClick={e => changeName(values.name)}>changeName</button>
            </React.Fragment>
          )
        }
      }
    </SampleContext.Consumer>
  )
}

export default ChangeName