import { Maybe } from '.';

export interface FetchOptions {
  method: string;
  mode: string;
  cache: string;
  body?: string;
  headers?: Headers;
}
declare class Stringified<T> extends String {
  private ___stringified: T;
}
declare global {
  interface JSON {
    stringify<T>(
      value: T,
      replacer?: (key: string, value: any) => any,
      space?: string | number,
    ): string & Stringified<T>;
    parse<T>(text: Stringified<T>, reviver?: (key: any, value: any) => any): T;
    parse(text: string, reviver?: (key: any, value: any) => any): any;
  }
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface IConnectionPayload {
  id: string;
  name: string;
}

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface ISuccess {
  success: boolean;
}
