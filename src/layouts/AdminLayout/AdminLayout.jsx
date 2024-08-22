import React from 'react';
import './AdminLayout.scss';
import {LoginAdmin} from '../../pages/Admin';
export const AdminLayout = (props) => {
    const {children} = props;
    const userAuth = null;
    if(!userAuth) return <LoginAdmin/>
  return (
    <div>
        <p>Layout Admin</p>
      {children}
    </div>
  )
}