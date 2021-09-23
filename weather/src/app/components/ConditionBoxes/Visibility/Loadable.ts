/**
*
* Asynchronously loads the component for Visibility
*
*/

import { lazyLoad } from 'utils/loadable';

export const Visibility = lazyLoad(() => import('./index'), module => module.Visibility);