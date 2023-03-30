import React, { Children } from 'react';
import DashBoardContainer from "../../Home/Dashboard";

const CommonLayout = ({children:Component}) => {

//    = (Component) => (props) => 
    
  return (
    <>
    <DashBoardContainer/>
    {Component}
    {/* <Component {...props}/> */}
    </>
  )
}

export default CommonLayout