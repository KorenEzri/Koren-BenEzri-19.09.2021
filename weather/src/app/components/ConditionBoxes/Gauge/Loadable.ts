/**
*
* Asynchronously loads the component for Gauge
*
*/

import { lazyLoad } from 'utils/loadable';

export const Gauge = lazyLoad(() => import('./index'), module => module.Gauge);