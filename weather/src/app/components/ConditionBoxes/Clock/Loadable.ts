/**
*
* Asynchronously loads the component for Clock
*
*/

import { lazyLoad } from 'utils/loadable';

export const Clock = lazyLoad(() => import('./index'), module => module.Clock);