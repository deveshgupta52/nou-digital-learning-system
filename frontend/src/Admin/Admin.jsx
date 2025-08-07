import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <div className="row dash">
        <div className="col-2 h-100 bg-dark">
              <ul>
                <li className='my-3 bg-light p-2 rounded-start'>
                    <Link className="nav-link">All users</Link>
                </li>
                 <li className='my-3 bg-light p-2 rounded-start'>
                    <Link className="nav-link">All users</Link>
                </li>
                 <li className='my-3 bg-light p-2 rounded-start'>
                    <Link  className="nav-link">All users</Link>
                </li>
              </ul>
        </div>
        <div className="col-10 bg-white">

        </div>
      </div>
    </div>
  )
}

export default Dashboard
