import React from 'react';
import './ClientLayout.scss';
export const ClientLayout = (props) => {
    const {children} = props;
  return (
    <div>
        <p>Layout Client</p>
      {children}
    </div>
  )
}
