import * as React from 'react';
import { render } from '@testing-library/react';

import { Humidity } from '..';


describe('<Humidity  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Humidity />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
