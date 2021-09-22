import React from 'react';
import * as styles from '../spinner-styles';

export function SmallSpinner() {
  return (
  <styles.SpinnerDiv>
    <styles.StyledSpinner>
      <div className="container">
        <div className="circle circle-red"></div>
        <div className="circle circle-blue"></div>
        <div className="circle circle-green"></div>
      </div>
    </styles.StyledSpinner>
    </styles.SpinnerDiv>
  );
}
