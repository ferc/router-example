import React, { Component } from 'react'
import { matchPath, Prompt, Redirect } from 'react-router-dom'

import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

import { ROUTE_PATTERN as SectionOneRoute }  from '../SectionOne'

export const INITIAL_STEP = 'step-one'
export const SECTION_NAME = 'section-three'
export const ROUTE_PATTERN = `/${SECTION_NAME}/:step?`
export const START_ROUTE = `/${SECTION_NAME}/${INITIAL_STEP}`

class SectionThree extends Component {
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

  canLeave = location => {
    const { step } = this.props.match.params

    if (step === INITIAL_STEP) return true

    const isInternalRedirection = !!matchPath(location.pathname, {
      path: ROUTE_PATTERN
    })

    if (isInternalRedirection) return true

    const sectionOne = matchPath(location.pathname, {
      path: SectionOneRoute
    })

    if (!sectionOne) return false

    const isGoingToSectionOneStepThree = sectionOne.params.step === 'step-three'

    return step === 'step-three' && isGoingToSectionOneStepThree
  }

  render() {
    const stepView = this.getStepView()

    return (
      <div>
        <Prompt
          message={location => {
            if (!this.canLeave(location)) {
              return 'Are you sure you want to go to leave the process?'
            }

            return true
          }}
        />

        <h2>Section Three</h2>

        {stepView}
      </div>
    )
  }
}

export default SectionThree
