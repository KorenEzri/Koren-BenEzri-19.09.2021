import * as React from 'react';
import { render } from '@testing-library/react';

import { CurrentWeather } from '..';


describe('<CurrentWeather  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<CurrentWeather />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
