import * as React from 'react';
import { render } from '@testing-library/react';

import { FiveDayForecast } from '..';


describe('<FiveDayForecast  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<FiveDayForecast />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
