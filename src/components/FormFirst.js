// made by Igor and Erwan

import React from "react";
import { Link } from "react-router-dom";
import UploadIcon from '@mui/icons-material/Upload';

export default function FirstForm() {

    return (
      <form className="form-consultation">
        <label className="label-form">
          <div className="labeldiv">
            <h1 className="title-label-form">*Describe your tattoo idea:</h1>
            <textarea type="text" className='input-form-big' placeholder="Your tattoo idea..."/>
          </div>
        </label>
        <label className="label-form">
          <div className="labeldiv">
            <h1 className="title-label-form">*Describe the placement on the body:</h1>
            <textarea type="text" className='input-form-big' placeholder="Your chosen body placement..."/>
          </div>
        </label>
        <label className="label-form">
            <div className="labeldiv">
                <h1 className="title-label-form">*Upload images of reference:</h1>
                <div htmlFor="file-upload" className="custom-file-upload">
                    <div className="icon-cont">
                    <UploadIcon sx={{ fontSize: "3rem" }} className='icon-form'/>
                    </div>
                    <input id="file-upload" type="file"/>
                </div>
            </div>
        </label>
        <label className="label-form">
            <div className="labeldiv">
                <h1 className="title-label-form">*Upload images of chosen body part:</h1>
                <div htmlFor="file-upload" className="custom-file-upload">
                    <div className="icon-cont">
                    <UploadIcon sx={{ fontSize: "3rem" }} className='icon-form'/>
                    </div>
                    <input id="file-upload" type="file"/>
                </div>
            </div>
        </label>
        <h1 className="text-form">Step 1/2</h1>
        <div className="buttons-form-container">
            <Link to='/consultationtwo'><input className="button-home buttons-form" type="submit" value="Next" /></Link>
        </div>
      </form>
    );
  }