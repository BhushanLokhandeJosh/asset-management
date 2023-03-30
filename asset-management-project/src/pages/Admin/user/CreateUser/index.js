import React from 'react';
import DashBoardContainer from "../../../Home/Dashboard/index.js"
import UserSignup from './component/UserSignUp.js';
import CommonLayout from '../../../Shared/commonLayout/index.js';

const CreateUser = () => {

  return (
    <div>
      <CommonLayout children={<UserSignup/>}/>
    </div>
  )
}

export default CreateUser