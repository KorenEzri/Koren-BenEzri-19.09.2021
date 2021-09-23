import * as React from 'react';
import { render } from '@testing-library/react';

import { WindSpeedDirection } from '..';


describe('<WindSpeedDirection  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<WindSpeedDirection />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
