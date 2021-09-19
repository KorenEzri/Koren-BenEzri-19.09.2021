/**
*
* Asynchronously loads the component for ForecastDayList
*
*/

import { lazyLoad } from 'utils/loadable';

export const ForecastDayList = lazyLoad(() => import('./index'), module => module.ForecastDayList);