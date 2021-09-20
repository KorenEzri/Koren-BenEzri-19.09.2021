/**
*
* Asynchronously loads the component for ForecastDay
*
*/

import { lazyLoad } from 'utils/loadable';

export const ForecastDay = lazyLoad(() => import('./index'), module => module.ForecastDay);