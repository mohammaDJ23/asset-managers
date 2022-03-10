import { GetServerSideProps, GetServerSidePropsResult, GetStaticProps, GetStaticPropsResult } from 'next';
import { wrapper } from '../../redux';
import { ServerSidePropsContext, StaticPropsContext } from '../../types';

export class Servers {
  static getServerSideProps<T = any>(
    fn: (context: ServerSidePropsContext) => Promise<GetServerSidePropsResult<T>>,
  ): GetServerSideProps<T> {
    return wrapper.getServerSideProps(store => async context =>
      fn.call(this, {
        context,
        store,
      }),
    );
  }

  static getStaticProps<T = any>(
    fn: (context: StaticPropsContext) => Promise<GetStaticPropsResult<T>>,
  ): GetStaticProps<T> {
    return wrapper.getStaticProps(store => async context =>
      fn.call(this, {
        context,
        store,
      }),
    );
  }
}
