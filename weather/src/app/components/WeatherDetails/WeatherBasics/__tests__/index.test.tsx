import * as React from 'react';
import { render } from '@testing-library/react';

import { WeatherBasics } from '..';


describe('<WeatherBasics  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<WeatherBasics />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
