import * as React from 'react';
import { render } from '@testing-library/react';

import { Spinner } from '..';


describe('<Spinner  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Spinner />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
