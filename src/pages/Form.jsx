import React from 'react'
import "../App.css"

const Form = () => {
  return (
    <div>
      <h1>Get In Touch</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error non dolorem vitae soluta perspiciatis, molestiae minus at enim facilis. Magnam officiis voluptate architecto? Harum quae cupiditate alias blanditiis voluptatem amet.</p>
     



<div className="input-group mb-3" form>
  <input
    type="text"
    className="form-control"
    placeholder="Name"
    aria-label="Name"
  />

  <span className="input-group-text"></span>

  <input
    type="text"
    className="form-control"
    placeholder="Email"
    aria-label="Email"
  />
  
   <input
    type="text"
    className="form-control"
    placeholder="Subject"
    aria-label="Subject"
  />
</div>

<div className="input-group">
  <span className="input-group-text">
    With textarea
  </span>

  <textarea
    className="form-control"
    aria-label="With textarea"
  ></textarea>
</div>
      </div>
    
  )
}

export default Form
