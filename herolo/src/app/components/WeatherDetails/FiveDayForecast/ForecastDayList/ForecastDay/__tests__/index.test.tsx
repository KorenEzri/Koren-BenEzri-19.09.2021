import * as React from 'react';
import { render } from '@testing-library/react';

import { ForecastDay } from '..';


describe('<ForecastDay  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ForecastDay />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
