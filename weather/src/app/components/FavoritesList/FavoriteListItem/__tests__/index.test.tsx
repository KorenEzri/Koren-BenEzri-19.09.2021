import * as React from 'react';
import { render } from '@testing-library/react';

import { FavoriteListItem } from '..';


describe('<FavoriteListItem  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<FavoriteListItem />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
