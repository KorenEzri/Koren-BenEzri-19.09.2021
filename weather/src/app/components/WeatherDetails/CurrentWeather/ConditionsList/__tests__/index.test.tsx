import * as React from 'react';
import { render } from '@testing-library/react';

import { ConditionsList } from '..';


describe('<ConditionsList  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ConditionsList />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
