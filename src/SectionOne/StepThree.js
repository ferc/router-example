import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class StepThree extends Component {
  render() {
    return (
      <div>
        <h3>Step Three</h3>

        <ul>
          <li><Link to="/section-one/step-two">Previous</Link></li>
        </ul>
      </div>
    )
  }
}

export default StepThree
