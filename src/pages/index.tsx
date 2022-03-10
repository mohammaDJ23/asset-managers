import { initialController } from '../@asset-manager/servers/initial';
import { Servers } from '../@asset-manager/utilities';
import Initial from '../modules/initial';

export default Initial;

export const getServerSideProps = Servers.getServerSideProps(initialController.initial);
