import React, { Component } from 'react'

import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

class SectionOne extends Component {
  getStep = () => {
    const { section } = this.props.match.params

    switch(section) {
      case 'step-one':
        return <StepOne />

      case 'step-two':
        return <StepTwo />

      case 'step-three':
        return <StepThree />

      default:
        return <h1>Invalid Step</h1>
    }
  }

  render() {
    const step = this.getStep()

    return (
      <div>
        <h1>Section One</h1>

        {step}
      </div>
    )
  }
}

export default SectionOne
