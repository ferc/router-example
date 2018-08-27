import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

const INITIAL_STEP = 'step-one'

class SectionOne extends Component {
  state = {
    redirectToStart: true
  }

  componentDidMount() {
    this.setState({
      redirectToStart: false
    })
  }

  getStepView = () => {
    const { redirectToStart } = this.state
    const { step } = this.props.match.params

    if (step !== INITIAL_STEP && redirectToStart) {
      return <Redirect to="/section-one/step-one" />
    }

    switch(step) {
      case 'step-one':
        return <StepOne />

      case 'step-two':
        return <StepTwo />

      case 'step-three':
        return <StepThree />

      default:
        return <h1>Redirect</h1>
    }
  }

  render() {
    const stepView = this.getStepView()

    return (
      <div>
        <h2>Section One</h2>

        {stepView}
      </div>
    )
  }
}

export default SectionOne
