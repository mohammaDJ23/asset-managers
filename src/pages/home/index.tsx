import Home from '../../modules/home';
import { homeController } from '../../@asset-manager/servers/home';
import { Servers } from '../../@asset-manager/utilities';

export default Home;

export const getServerSideProps = Servers.getServerSideProps(homeController.home);
