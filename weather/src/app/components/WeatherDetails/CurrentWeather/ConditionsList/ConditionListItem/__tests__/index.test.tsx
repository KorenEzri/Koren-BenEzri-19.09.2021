import * as React from 'react';
import { render } from '@testing-library/react';

import { ConditionListItem } from '..';


describe('<ConditionListItem  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ConditionListItem />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
