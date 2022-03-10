import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { Store } from 'redux';
import { Input } from '.';
import { RootState } from '../redux';

export interface RootStateStore {
  store: Store<RootState>;
}

export interface ServerSidePropsContext extends RootStateStore {
  context: GetServerSidePropsContext;
}

export interface StaticPropsContext extends RootStateStore {
  context: GetStaticPropsContext;
}

export interface GlobalObj<T = any> {
  [key: string]: T;
}

export interface Form {
  [key: string]: {
    inputs: {
      [key: string]: Input;
    };

    isFormValid: boolean;
  };
}
