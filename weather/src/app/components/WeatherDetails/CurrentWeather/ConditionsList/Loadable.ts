/**
*
* Asynchronously loads the component for ConditionsList
*
*/

import { lazyLoad } from 'utils/loadable';

export const ConditionsList = lazyLoad(() => import('./index'), module => module.ConditionsList);