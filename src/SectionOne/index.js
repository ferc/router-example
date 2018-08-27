import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

export const INITIAL_STEP = 'step-one'
export const SECTION_NAME = 'section-one'
export const ROUTE_PATTERN = `/${SECTION_NAME}/:step?`
export const START_ROUTE = `/${SECTION_NAME}/${INITIAL_STEP}`

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
    const {
      location: {
        state: { sectionThreeData } = {}
      },
      match: {
        params: { step }
      }
    } = this.props

    const validStep = step === INITIAL_STEP ||
      (
        step === 'step-three' &&
        sectionThreeData
      )

    if (!validStep && redirectToStart) {
      return <Redirect to={START_ROUTE} />
    }

    switch(step) {
      case 'step-one':
        return <StepOne />

      case 'step-two':
        return <StepTwo />

      case 'step-three':
        return <StepThree />

      default:
        return <Redirect to={START_ROUTE} />
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
