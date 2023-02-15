import React from 'react';
import img from "../../../../assets/image/error-image.webp"
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../routes/constants';
import { Button } from 'react-bootstrap';
import "../error.css"


const ErrorPage = ({error}) => {
  return (
    <div className='error-style'>
        <h2>{error}</h2>
        <img src={img} alt="cant load image"/>
        <Link to={ROUTES.DASHBOARD} className='btn'>
            <Button>Go Back</Button>
        </Link>
    </div>
  )
}

export default ErrorPage