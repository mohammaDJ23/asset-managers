import { GetServerSidePropsResult } from 'next';
import { Pages, ServerSidePropsContext } from '../../types';

export class InitialService {
  async initial<T>({ store, context }: ServerSidePropsContext): Promise<GetServerSidePropsResult<T>> {
    return {
      redirect: {
        destination: Pages.HOME,
        permanent: false,
      },
    };
  }
}
