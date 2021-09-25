/**
*
* Asynchronously loads the component for SubmitLoader
*
*/

import { lazyLoad } from 'utils/loadable';

export const SubmitLoader = lazyLoad(() => import('./index'), module => module.SubmitLoader);