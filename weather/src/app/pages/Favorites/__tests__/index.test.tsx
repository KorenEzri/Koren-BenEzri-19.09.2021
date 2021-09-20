import * as React from 'react';
import { render } from '@testing-library/react';

import { Favorites } from '..';


describe('<Favorites  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Favorites />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
