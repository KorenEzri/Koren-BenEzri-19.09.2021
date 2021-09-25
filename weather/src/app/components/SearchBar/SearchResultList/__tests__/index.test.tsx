import * as React from 'react';
import { render } from '@testing-library/react';

import { SearchResultList } from '..';


describe('<SearchResultList  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<SearchResultList />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
