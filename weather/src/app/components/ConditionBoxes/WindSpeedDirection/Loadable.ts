/**
*
* Asynchronously loads the component for WindSpeedDirection
*
*/

import { lazyLoad } from 'utils/loadable';

export const WindSpeedDirection = lazyLoad(() => import('./index'), module => module.WindSpeedDirection);