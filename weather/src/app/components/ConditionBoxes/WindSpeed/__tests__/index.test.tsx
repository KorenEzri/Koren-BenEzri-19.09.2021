import * as React from 'react';
import { render } from '@testing-library/react';

import { WindSpeed } from '..';


describe('<WindSpeed  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<WindSpeed />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
