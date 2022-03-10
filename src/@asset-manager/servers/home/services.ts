import { setForm } from '../../redux/actions/form';
import { ServerSidePropsContext } from '../../types';
import { personalDetails, addressDetails } from '../../utilities';

export class HomeService {
  async home({ store, context }: ServerSidePropsContext) {
    store.dispatch(setForm([personalDetails, addressDetails]));

    return {
      props: {},
    };
  }
}
