import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class StepThree extends Component {
  render() {
    return (
      <div>
        <h3>Step Three</h3>

        <ul>
          <li><Link to="/section-three/step-two">Previous</Link></li>
          <li>
            <Link
              to={{
                pathname: '/section-one/step-three',
                state: {
                  sectionThreeData: true
                }
              }}
            >
              Go To Section One > Step Two
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default StepThree
