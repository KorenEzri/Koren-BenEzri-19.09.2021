import * as React from 'react';
import { render } from '@testing-library/react';

import { WindSpeedDirection } from '..';


describe('<WindSpeedDirection  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<WindSpeedDirection data={undefined} />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
