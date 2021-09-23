import * as React from 'react';
import { render } from '@testing-library/react';

import { Visibility } from '..';


describe('<Visibility  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Visibility />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
