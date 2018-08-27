import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class StepTwo extends Component {
  render() {
    return (
      <div>
        <h3>Step Two</h3>

        <ul>
          <li><Link to="/section-three/step-one">Previous</Link></li>
          <li><Link to="/section-three/step-three">Next</Link></li>
        </ul>
      </div>
    )
  }
}

export default StepTwo
