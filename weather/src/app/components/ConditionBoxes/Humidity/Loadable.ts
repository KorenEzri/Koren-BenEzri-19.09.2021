/**
*
* Asynchronously loads the component for Humidity
*
*/

import { lazyLoad } from 'utils/loadable';

export const Humidity = lazyLoad(() => import('./index'), module => module.Humidity);