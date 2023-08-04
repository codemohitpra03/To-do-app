import React from 'react'
import Modal from './Modal'

const Navbar = () => {
  return (
  <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">My-To-Do</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button className="nav-link active" aria-current="page" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add new note</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Modal/>
    </>
  )
}

export default Navbar