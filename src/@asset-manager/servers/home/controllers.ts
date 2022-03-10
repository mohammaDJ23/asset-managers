import { Bind } from '../../decoraters';
import { ServerSidePropsContext } from '../../types';
import { HomeService } from './services';

class HomeController {
  constructor(private HomeService: HomeService) {}

  @Bind()
  home(context: ServerSidePropsContext) {
    return this.HomeService.home(context);
  }
}

export const homeController = new HomeController(new HomeService());
