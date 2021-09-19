/**
*
* Asynchronously loads the component for FiveDayForecast
*
*/

import { lazyLoad } from 'utils/loadable';

export const FiveDayForecast = lazyLoad(() => import('./index'), module => module.FiveDayForecast);