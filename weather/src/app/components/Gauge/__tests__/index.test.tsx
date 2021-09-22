import * as React from 'react';
import { render } from '@testing-library/react';

import { Gauge } from '..';


describe('<Gauge  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Gauge />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
