import React from 'react';
import './ErrorLayout.scss';
export const ErrorLayout = (props) => {
    const {children} = props;
  return (
    <div>
        <p>Layout Error</p>
      {children}
    </div>
  )
}

