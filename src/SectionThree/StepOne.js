import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class StepOne extends Component {
  render() {
    return (
      <div>
        <h3>Step One</h3>

        <ul>
          <li><Link to="/section-three/step-two">Next</Link></li>
        </ul>
      </div>
    )
  }
}

export default StepOne
