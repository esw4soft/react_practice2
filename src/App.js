import React, { useState } from 'react'

function App() {
  return (
    <>
      <hr />
      <br />
      <img />

      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">email addres</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small
            id="emailHelp"
            className="form-text text-nuted"
            style={{ color: 'red', fontSize: '8px' }}
          >
            well never share tour email wowv anyone else
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="password"
          />
        </div>

        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label htmlFor="exampleCheck1" className="form-check-label">
            check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          submit
        </button>
      </form>
    </>
  )
}

export default App
