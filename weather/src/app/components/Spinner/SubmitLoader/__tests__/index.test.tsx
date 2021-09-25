import * as React from 'react';
import { render } from '@testing-library/react';

import { SubmitLoader } from '..';


describe('<SubmitLoader  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<SubmitLoader />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
