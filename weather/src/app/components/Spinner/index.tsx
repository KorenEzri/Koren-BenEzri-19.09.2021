import * as React from 'react';
import { ISpinnerError } from 'types';
import { SmallSpinner } from './SmallSpinner';
import * as styles from './spinner-styles';
interface Props {
  children: any;
  VisualComponent: React.FunctionComponent | false;
  showSpinner: boolean;
  error: ISpinnerError | undefined;
}

export function Spinner(props: Props) {
  const { children, VisualComponent, error, showSpinner: show } = props;
  return (
    <>
      {show ? (
        <styles.PositionedSpinnerDiv>
          <styles.SpinnerDiv className="container">
            {VisualComponent ? <VisualComponent /> : <SmallSpinner />}
          </styles.SpinnerDiv>
        </styles.PositionedSpinnerDiv>
      ) : error && error.isErr ? (
            <styles.StyledError  className="errorcontainer">
              {error.message ? (
                <p>Error: {error.message}</p>
              ) : (
                <p>Error: Internal server error. Please try again later.</p>
              )}
            </styles.StyledError>
      ) : (
        children
      )}
      </>
  );
}
