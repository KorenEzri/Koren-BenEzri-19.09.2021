import * as React from 'react';
import { render } from '@testing-library/react';

import { Clock } from '..';


describe('<Clock  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Clock />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
