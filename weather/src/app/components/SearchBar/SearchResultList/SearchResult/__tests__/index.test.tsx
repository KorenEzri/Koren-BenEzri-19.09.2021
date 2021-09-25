import * as React from 'react';
import { render } from '@testing-library/react';

import { SearchResult } from '..';


describe('<SearchResult  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<SearchResult />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
