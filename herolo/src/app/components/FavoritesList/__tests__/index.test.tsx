import * as React from 'react';
import { render } from '@testing-library/react';

import { FavoritesList } from '..';


describe('<FavoritesList  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<FavoritesList />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
