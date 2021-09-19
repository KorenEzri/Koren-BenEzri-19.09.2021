import * as React from 'react';
import { render } from '@testing-library/react';

import { WeatherDetails } from '..';


describe('<WeatherDetails  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<WeatherDetails />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
