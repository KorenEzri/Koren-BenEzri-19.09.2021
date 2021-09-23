/**
*
* Asynchronously loads the component for WindSpeed
*
*/

import { lazyLoad } from 'utils/loadable';

export const WindSpeed = lazyLoad(() => import('./index'), module => module.WindSpeed);