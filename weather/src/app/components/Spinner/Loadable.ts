/**
*
* Asynchronously loads the component for Spinner
*
*/

import { lazyLoad } from 'utils/loadable';

export const Spinner = lazyLoad(() => import('./index'), module => module.Spinner);