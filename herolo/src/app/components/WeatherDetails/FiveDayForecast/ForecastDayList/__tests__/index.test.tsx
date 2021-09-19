import * as React from 'react';
import { render } from '@testing-library/react';

import { ForecastDayList } from '..';


describe('<ForecastDayList  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ForecastDayList />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
