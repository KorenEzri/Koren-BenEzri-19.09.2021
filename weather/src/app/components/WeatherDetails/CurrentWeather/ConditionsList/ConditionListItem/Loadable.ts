/**
*
* Asynchronously loads the component for ConditionListItem
*
*/

import { lazyLoad } from 'utils/loadable';

export const ConditionListItem = lazyLoad(() => import('./index'), module => module.ConditionListItem);