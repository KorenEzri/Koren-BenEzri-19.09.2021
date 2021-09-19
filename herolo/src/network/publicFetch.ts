import { FetchOptions, Maybe, Method } from '../types';
import { baseFetchURL } from 'utils';

export async function publicFetch<T>(
  path: string,
  method: Method = 'GET',
  body?: Maybe<Record<string, any>>,
): Promise<T> {
  const fetchOptions: RequestInit & Pick<FetchOptions, 'cache'> = {
    method,
    mode: 'cors',
    cache: 'no-cache',
  };
  if (body) fetchOptions.body = JSON.stringify(body);
  fetchOptions.headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
  });
  const response = await fetch(baseFetchURL + path, fetchOptions);
  const data = await response.json();
  if (response.status === 200) {
    return data;
  }
  throw data;
}
