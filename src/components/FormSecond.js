import React from "react";
import { Link } from "react-router-dom";

export default function SecondForm() {
    return (
      <form className="form-consultation">
        <label className="label-form">
          <div className="labeldiv">
            <h1 className="title-label-form">*Your name:</h1>
            <textarea type="text"  className='input-form-small' placeholder="Your name.."/>
          </div>
        </label>
        <label className="label-form">
          <div className="labeldiv">
            <h1 className="title-label-form">*Your phone number:</h1>
            <textarea type="text" className='input-form-small' placeholder="Your phone number..."/>
          </div>
        </label>
        <label className="label-form">
          <div className="labeldiv">
            <h1 className="title-label-form">*Your e-mail adress:</h1>
            <textarea type="text" className='input-form-small' placeholder="Your e-mail adress..."/>
          </div>
        </label>
        <label className="label-form">
          <div className="labeldiv">
            <h1 className="title-label-form">Anything else to say?</h1>
            <textarea type="text" className='input-form-big' placeholder="Your comments..."/>
          </div>
        </label>
        <h1 className="text-form">Step 2/2</h1>
        <div className="buttons-form-container">
            <Link to='/consultation'><input className="button-home buttons-form" type="submit" value="Back" /></Link>
            <Link to='/consultationfinal'><input className="button-home buttons-form" type="submit" value="Next" id="secondinp-btn" /></Link>
        </div>
      </form>
    );
  }
